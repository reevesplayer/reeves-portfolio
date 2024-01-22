import React from "react";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CodingSVG from "../components/avatar.png";
import backgroundDark from "../components/background-dark.png";
import backgroundLight from "../components/background-light.png";
import useDarkMode from "use-dark-mode";
import {Card, CardBody, Image, Chip, Link} from "@nextui-org/react"
import project1 from "../components/project-1.png";
import placeHolder from "../components/coding.png";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Tools from "../components/Tools";


const AboutMe = () => {
  const darkMode = useDarkMode(false);
  const backgroundImage = darkMode.value ? backgroundDark : backgroundLight;

  return (
    <div
      className="flex justify-center pt-24"
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Column (Fixed) */}
      <div className="w-1/2 flex flex-col justify-center px-28 bg-transparent">
        <img src={CodingSVG} alt="Reeves Logo" className="w-1/4 rounded-xl mb-8" style={{ backgroundColor: '#fbcb64' }} />
        <div>
          <p className="text-md">Hello, I am</p>
          <h1 className="text-primary text-5xl font-semibold tracking-wide my-3">Reeves Player</h1>
        </div>
        <p className="text-primary text-2xl my-6 tracking-wider leading-9">
          I am a <span className="font-bold">front-end developer</span> with a vast knowledge of
          modern web technologies and frameworks. I specialize in building
          fast, responsive, and accessible applications available to all.
        </p>
        <div className="">
          <h4 className="my-3">01 ━━━━━ ABOUT ME</h4>
          <h4 className="my-3">01 ━━━━━ TOOLS & PLATFORMS</h4>
          <h4 className="my-3">01 ━━━━━ EXPERIENCE</h4>
          <h4 className="my-3">01 ━━━━━ PROJECTS</h4>
        </div>
        <div className="flex mt-16">
          <FaGithubSquare className="mr-8 size-8" />
          <FaLinkedin className="mr-8 size-8" />
          <FaSquareXTwitter className="mr-8 size-8" />
          <FaFacebookSquare className="mr-8 size-8" />
        </div>
      </div>

      {/* Right Column (Scrollable) */}
      <div className="w-1/2 overflow-auto bg-transparent px-20">
          <div className="pr-8 text-primary mb-8 flex items-center">
            <div>
              <h1 className="text-2xl font-semibold mb-2">About Me</h1>
              <p className="text-lg leading-9">Keeping it real all day every day. Doing what I can, when I can, the best that I can do it.</p>
            </div>
          </div>
          
          <div className="pr-8 text-primary mb-8 flex items-center">
            <FaLinkedin className="mr-4 mb-20 size-10" />
            <div>
              <h1 className="text-xl font-semibold mb-2">Full-Stack Development</h1>
              <p className="text-lg leading-9">
                While my primary knowledge and focus are in front-end development, I possess knowledge
                in back-end languages and functionalities as well.
              </p>
            </div>
          </div>

          <div className="pr-8 text-primary mb-8 flex items-center">
            <FaLinkedin className="mr-4 mb-20 size-10" />
            <div>
              <h1 className="text-xl font-semibold mb-2">IT Knowledge</h1>
              <p className="text-lg leading-9">
                As an experienced front-end developer, I also possess many IT skills as well. I pursued 
                to increase my knowledge in server maintenance and uptime capability.
              </p>
            </div>
          </div>

          <div className="pr-8 text-primary mb-8 flex items-center">
            <FaLinkedin className="mr-4 mb-20 size-10" />
            <div>
              <h1 className="text-xl font-semibold mb-2">Swift Development</h1>
              <p className="text-lg leading-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur molestias alias 
                necessitatibus rerum commodi vitae provident aliquid obcaecati. 
              </p>
            </div>
          </div>
          <div className="pr-8 text-primary mb-8 flex items-center">
            <div>
              <h1 className="text-2xl font-semibold mb-2">Areas of Specialization</h1>
              <p className="text-lg leading-9">A set of skills I strive to perfect when possible.</p>
            </div>
          </div>
          
          <div className="pr-8 text-primary mb-8 flex items-center">
            <FaLinkedin className="mr-4 mb-20 size-10" />
            <div>
              <h1 className="text-xl font-semibold mb-2">Full-Stack Development</h1>
              <p className="text-lg leading-9">
                While my primary knowledge and focus are in front-end development, I possess knowledge
                in back-end languages and functionalities as well.
              </p>
            </div>
          </div>

          <div className="pr-8 text-primary mb-8 flex items-center">
            <FaLinkedin className="mr-4 mb-20 size-10" />
            <div>
              <h1 className="text-xl font-semibold mb-2">IT Knowledge</h1>
              <p className="text-lg leading-9">
                As an experienced front-end developer, I also possess many IT skills as well. I pursued 
                to increase my knowledge in server maintenance and uptime capability.
              </p>
            </div>
          </div>

          <div className="pr-8 text-primary mb-8 flex items-center">
            <FaLinkedin className="mr-4 mb-20 size-10" />
            <div>
              <h1 className="text-xl font-semibold mb-2">Swift Development</h1>
              <p className="text-lg leading-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur molestias alias 
                necessitatibus rerum commodi vitae provident aliquid obcaecati. 
              </p>
            </div>
          </div>

          <Tools />

          <Projects />

          <div className="mb-7">
            <h1 className="text-2xl font-semibold mb-2">Contact Me</h1>
            <Contact />
          </div>
        </div>
    </div>
  );
};

export default AboutMe;
