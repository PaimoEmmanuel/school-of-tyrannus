import type { NextPage } from "next";
import Head from "next/head";
import HomeBanner from "../components/molecules/home-banner";
import HomeTestimony from "../components/organisms/home-testimony";
import NavigationBar from "../components/organisms/navigation-bar";
import HomeCourseTemplate from "../components/templates/home-course-template";
import NewsLetter from "../components/molecules/newsletter";
import Footer from "../components/organisms/footer";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home - School of Tyrannus</title>
      </Head>
      <div>
        <NavigationBar />
        <HomeBanner />
        {[1, 2, 3].map((item, index) => (
          <HomeCourseTemplate
            key={index + "oo"}
            index={index}
            courses={[
              {
                title: "Principles of Faith - asking and believing",
                lessons: 4,
                videos: 8,
              },
              {
                title: "Principles of Hope - esteeming the right things",
                lessons: 4,
                videos: 8,
              },
              {
                title: "Principles of Hope - esteeming the right things",
                lessons: 4,
                videos: 8,
              },
              {
                title: "Principles of Hope - esteeming the right things",
                lessons: 4,
                videos: 8,
              },
              // {
              //   title: "Principles of Hope - esteeming the right things",
              //   lessons: 4,
              //   videos: 8,
              // },
            ]}
          />
        ))}
        <HomeTestimony />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
