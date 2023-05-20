import { books } from "./bible-books";

let bookList = books.map((book) => book.name);

const chapterVerseRegex =
  "([0-9]{1,3}:[0-9]{1,3}(([-,]?(?:[0-9]{1,3}))*)?)(?=(?:[^><]*<[^<>]*>)*[^><]*$)";
const fullRegex = new RegExp(
  "(" + bookList.join("|") + ") " + chapterVerseRegex,
  "gm"
);

export const tagBibleVerses = (e: string) => {
  let replacement = "<span class='bible-verse-tag'>$1 $2</span>";
  // console.log(e.replace(fullRegex, replacement))

  return e.replace(fullRegex, replacement);
};
