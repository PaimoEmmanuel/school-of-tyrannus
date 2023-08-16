import { ICourseLessons } from "../types/course";

export const REVIEWS = [
  {
    name: "Goodness Hyacinth",
    testimony:
      "I took the Young Believers' Course and was so blessed by the clarity I received concerning the fundamental principles of Christianity. I saw that being equipped with those seemingly 'basic foundational principles' is extremely important throughout our journey to God.",
  },
  {
    name: "Samuel Danilola",
    testimony:
      "I registered for the YBC course, and one thing that stuck with me was the emphasis on baptisms, that there is the baptism of the word after being baptised in water and spirit. That opened my eyes to the importance of being immersed in the scriptures.",
  },
  {
    name: "Joy Ugwuede",
    testimony:
      "As a new believer, I registered for the Young Believers' Class, and  I believe the class was the foundation I needed to begin understanding and applying God's higher allocation. The depth of the teachings was wholesome. I will recommend this course.",
  },
];

export const COURSE_REVIEWS = [
  {
    name: "Samuel Danilola",
    testimony:
      "I registered for the course in 2018, and one thing that stuck with me was the emphasis on baptisms, that there is the baptism of the word, after being baptised in water and spirit. That opened my eyes to the importance of being immersed in the scriptures.",
  },
  {
    name: "Goodness Hyacinth",
    testimony:
      "I took the Young Believers' Course in 2021/2022. I was so blessed by the clarity I received concerning the fundamental principles of Christianity. I saw that being equipped with those seemingly 'basic foundational principles' is extremely important throughout our journey to God.",
  },
  {
    name: "Joy Ugwuede",
    testimony:
      "I took this course in 2019, and as a new believer then, I believe the class was the foundation I needed to begin to understand and apply the higher allocation of God. The depth of the teachings was wholesome. I will recommend this course.",
  },
];

export const defaultCourse: ICourseLessons = {
  title: "",
  id: "",
  lessons: [
    {
      title: "",
      id: 0,
      contents: [
        {
          title: "",
          hasQuiz: true,
          quizUrl: "",
          videoRetrievalId: "",
          id: "",
          userStatus: {
            contentStatus: "",
            quizStatus: "",
            timeStamp: 0,
          },
          resources: [{ title: "", link: "" }],
          overview: "",
          manual: "",
        },
      ],
    },
  ],
};
