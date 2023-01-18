import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen relative w-full  overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto h-screen  items-center	"
      >
        <h3 className="z-20 absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="/khalil.jpg"
          className="-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover object-top 
          md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Welcome to my{" "}
            <span className="underline decoration-[#F7AB0A]/50">digital</span>{" "}
            playground!
          </h4>
          <p className="text-base">
            As a seasoned web developer with nearly a decade of experience, I
            have a diverse set of skills, having worked with a wide variety of
            technologies and frameworks over the years. <br /> On my portfolio
            website, you will find examples of my past work and a glimpse into
            my capabilities. I am dedicated to delivering high-quality work and
            exceeding your expectations.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
