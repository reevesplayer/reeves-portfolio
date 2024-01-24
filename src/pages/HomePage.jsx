import React from "react";
import { Button } from "@nextui-org/react";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CodingSVG from "../components/avatar.png";
import { useEffect } from "react";
import backgroundDark from "../components/background-dark.png";
import backgroundLight from "../components/background-light.png";
import useDarkMode from "use-dark-mode";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const darkMode = useDarkMode(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

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
        <div className="sm:w-3/5 flex flex-col">
          <img src={CodingSVG} alt="Reeves Logo" className="sm:w-1/4 w-3/4 mx-auto rounded-xl" style={{ backgroundColor: '#fbcb64' }} />
          <div className="text-center">
            <p className=" text-lg mt-10">Hello, I am</p>
            <h1 className="text-primary sm:text-6xl text-5xl font-semibold tracking-wide">Reeves Player</h1>
          </div>
          <p className="text-primary sm:text-2xl text-xl my-5 sm:my-10 text-center sm:mx-20 mx-5 tracking-wider">
            I am a <span className="font-bold">front-end developer</span> with a vast knowledge of
            modern web technologies and frameworks. I specialize in building
            fast, responsive, and accessible applications available to all.
          </p>
          <div className="flex items-center justify-center">
            <Link to="/about">
              <Button color="primary" className="sm:w-2/12 mx-auto mt-5 sm:mt-4">
                <span className="text-base font-semibold">Explore</span>
              </Button>
            </Link>
          </div>
          <div className="flex mt-16 sm:mt-20 mx-auto">
            <FaGithubSquare className="mx-8 size-8" />
            <FaLinkedin className="mx-8 size-8" />
            <FaSquareXTwitter className="mx-8 size-8" />
            <FaFacebookSquare className="mx-8 size-8" />
          </div>
        </div>
      </div>
  );
};

export default HomePage;
