import { fetchBibleVerse } from "../services/bible-verse";
import { books } from "../utils/bible-books";

interface IBook {
  id: number;
  name: string;
  testament: string;
  genre: {
    id: number;
    name: string;
  };
}

export interface IVerse {
  book: {
    id: number;
    name: string;
    testament: string;
  };
  chapterId: number;
  id: number;
  verse: string;
  verseId: number;
}

const getNumbersWithinRange = (lo: number, hi: number) => {
  let diff = hi - lo;
  let values: number[] = [];

  if (diff > 1) {
    values.push(lo);
    for (let i = 0; i < diff; i++) {
      lo++;
      values.push(lo);
    }
  } else {
    values = [lo, hi];
  }

  return values;
};

const removeHyphenFromVerses = (verses: string[]) => {
  let versesWithoutHyphen: number[] = [];

  verses.forEach((el) => {
    if (el.match("^[0-9]{1,3}-[0-9]{1,3}$")) {
      let loNum = parseInt(el.split("-")[0]);
      let hiNum = parseInt(el.split("-")[1]);

      let numbers = getNumbersWithinRange(loNum, hiNum);
      versesWithoutHyphen.push(...numbers);
    } else {
      versesWithoutHyphen.push(parseInt(el));
    }
  });

  const sorter = (a: number, b: number) => {
    return a > b ? 1 : b > a ? -1 : 0;
  };

  return versesWithoutHyphen.sort(sorter);
};

const getVerseDetails = (txt: string) => {
  let txtArray: string[] = [];

  if (txt.split(" ").length > 2) {
    let txtArrayLo = txt.split(" ");
    txtArray = [`${txtArrayLo[0]}` + " " + `${txtArrayLo[1]}`, txtArrayLo[2]];
  } else {
    txtArray = txt.split(" ");
  }

  // console.log(txtArray)

  // get book name
  let selectedBook = txtArray[0];

  // get book id
  let bookObjArr: IBook[] = books.filter((book) => {
    return book.name === selectedBook;
  });
  const bookId = `${bookObjArr[0].id}`;

  // chapter id
  const chapter = txtArray[1].split(":")[0];

  let versesUnsplit = txtArray[1].split(":")[1];
  const versesWithoutComma = versesUnsplit.split(",");
  let verses = removeHyphenFromVerses(versesWithoutComma);

  return { bookId, chapter, verses };
};

const filterArrayOfObjectsByArray = (
  arrayOfObjects: IVerse[],
  filter: number[]
) => {
  let filteredVerses: IVerse[] = [];

  filter.forEach((id) =>
    arrayOfObjects.forEach((verse) => {
      if (verse.verseId === id) {
        filteredVerses.push(verse);
      }
    })
  );

  return filteredVerses;
};

export const getBibleVerse = async (bibleText: string) => {
  // console.log(bibleText)
  let bibleTextObj = getVerseDetails(bibleText);

  // handle errors - incase the string has a wrong name and not a scripture
  let res = await fetchBibleVerse(bibleTextObj.bookId, bibleTextObj.chapter);

  // new -- 11-02-2023
  // let res = await fetchBibleVerse(bibleTextObj.bookId, bibleTextObj.chapter, bibleTextObj.verses)
  // return res

  return filterArrayOfObjectsByArray(res.data, bibleTextObj.verses);
};
