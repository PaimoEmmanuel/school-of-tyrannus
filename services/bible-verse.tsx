import axios from "axios";

// NLWC --->>> https://shark-app-fwwao.ondigitalocean.app/books/43/chapters/2/verse/KJV/[1,2,3,4,5,6,7,8,9]

// Base URL is injected by proxy in dev and by vercel.json in production
export const fetchBibleVerse = async (bookID: string, chapter: string) => {
  return await axios.get(`/books/${bookID}/chapters/${chapter}`);
};

// export const fetchBibleVerse = async (bookID: string, chapter: string, verses: number[]) => {
// 	return await axios.get(`/books/${bookID}/chapters/${chapter}/verse/KJV/${verses}`)
// }
