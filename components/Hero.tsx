import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundSquares from "./BackgroundSquares";
import profilePic from "../public/avatar2.png";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Khalil Hebachi",
      "Guy-who-loves-ProblemSolving.tsx",
      "<entrepreneurialMindSet />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen relative w-full  overflow-hidden">
      <div className="flex flex-col space-y-8 items-center justify-center text-center">
        <BackgroundSquares />
        <div className="flex flex-col space-y-8 items-center justify-center text-center h-screen">
          <Image
            alt="khalil Avatar"
            src={profilePic}
            className="relative h-32 w-32 mx-auto object-cover rounded-full"
          />
          <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
              Web Developer
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
              <span className="mr-3">{text}</span>
              <Cursor cursorColor="#F7AB0A" />
            </h1>
          </div>
          <div className="pt-5 z-20">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
