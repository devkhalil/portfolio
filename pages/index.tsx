import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0">
      <Head>
        <title>Hebachi Khalil Portfolio</title>
        <meta name="description" content="Hebachi Khalil Porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero></Hero>
      </section>
      <section id="about" className="snap-start">
        <About></About>
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
    </div>
  );
};
export default Home;
