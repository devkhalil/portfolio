import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 z-20">
      <div className="relative w-full flex justify-center z-20">
        <div className=" w-full absolute flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className=" flex flex-row items-center"
          >
            <SocialIcon
              fgColor="gray"
              bgColor="transparent"
              url="https://www.linkedin.com/in/hebachi-khalil/"
            />
            <SocialIcon
              fgColor="gray"
              bgColor="transparent"
              url="https://www.freelancer.com/u/mondersky"
            />
            <SocialIcon
              fgColor="gray"
              bgColor="transparent"
              url="https://twitter.com/HebachiKhalil"
            />
          </motion.div>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
