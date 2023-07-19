import Head from "next/head";

import { About, GetInTouch, Hero, Project } from "../components/Home";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ahmad Iqbal - Personal Portfolio </title>
      </Head>
      <Hero />
      <About />
      <Project />
      <GetInTouch />
    </>
  );
};

export default Home;
