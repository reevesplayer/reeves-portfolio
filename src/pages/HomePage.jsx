import { Button } from "@nextui-org/react";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CodingSVG from "../components/coding.png";

export default function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-3/5 flex flex-col items-center">
        <img src={CodingSVG} alt="Reeves Logo" className="w-1/4 mx-auto" />
        <div className="text-center">
          <p>Hello, I am</p>
          <h1>Reeves Player</h1>
        </div>
        <p className="text-">
          I am a full-stack web developer with a passion for creating beautiful,
          functional, and user-friendly applications. I have experience with
          HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. I am
          a hard worker, a quick learner, and a team player. I am looking for a
          position where I can grow as a developer and help create amazing
          products.
        </p>
        <Button color="primary">Explore</Button>
        <div className="flex mt-4">
          <FaGithubSquare className="mx-2" />
          <FaLinkedin className="mx-2" />
          <FaSquareXTwitter className="mx-2" />
          <FaFacebookSquare className="mx-2" />
        </div>
      </div>
    </div>
  );
}
