import type { NextPage } from "next";
import Head from "next/head";
import HomeBanner from "../components/molecules/home-banner";
import HomeTestimony from "../components/organisms/home-testimony";
import NavigationBar from "../components/organisms/navigation-bar";
import HomeCourseTemplate from "../components/templates/home-course-template";
import NewsLetter from "../components/molecules/newsletter";
import Footer from "../components/organisms/footer";
import { getLandingPageCourses } from "../services/home-page";
import { useEffect, useState } from "react";

interface IHome {
  homeCourses: any[];
}

const Home: NextPage<IHome> = ({ homeCourses }) => {
  console.log(homeCourses);

  return (
    <div className="">
      <Head>
        <title>Home - School of Tyrannus</title>
      </Head>
      <div>
        <NavigationBar />
        <HomeBanner />
        {homeCourses.map((item, index) => (
          <HomeCourseTemplate
            key={index + "oo"}
            index={index}
            title={item.name}
            about={item.description}
            courses={item.courses}
          />
        ))}
        <HomeTestimony />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await getLandingPageCourses();
  const homeCourses = await res.data;
  return {
    props: {
      homeCourses,
    },
  };
};

export default Home;
