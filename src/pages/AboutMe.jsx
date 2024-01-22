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

          <div className="pr-8 text-primary mb-8 flex items-center">
            <div>
              <h1 className="text-2xl font-semibold mb-2">Tools & Platforms</h1>
            </div>
          </div>
          <div className="text-primary">
            <Card className="my-5 py-5 px-3">
              <CardBody>
                <h1 className="text-xl font-semibold tracking-wide">Languages</h1>
                <p>JavaSript/Node.js, HTML/CSS, Python</p>
              </CardBody>
            </Card>
            <Card className="my-5 py-5 px-3">
              <CardBody>
                <h1 className="text-xl font-semibold tracking-wide">Frameworks</h1>
                <p>React.js, Next.js, Tailwind CSS, NextUI, MUI, Bootstrap</p>
              </CardBody>
            </Card>
            <Card className="my-5 py-5 px-3">
              <CardBody>
                <h1 className="text-xl font-semibold tracking-wide">Tools</h1>
                <p>Visual Studio Code, GitHub, Discord, Git</p>
              </CardBody>
            </Card>
            <Card className="my-5 py-5 px-3">
              <CardBody>
                <h1 className="text-xl font-semibold tracking-wide">Business</h1>
                <p>Microsoft 365, G-Suite</p>
              </CardBody>
            </Card>
          </div>

          <div className="pr-8 text-primary mb-8 flex items-center">
            <div className="flex-grow">
              <h1 className="text-2xl font-semibold mb-2">Projects</h1>
            </div>
            <div className="">
              <Link href="https://test.com"
              isExternal
              >
                <h1 className="text-md font-light mb-2">View Resume →</h1>
              </Link>
            </div>
          </div>
          
          <Card
              className="my-5 py-5 px-3"
            >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4">
                  <Image
                    alt="Album cover"
                    className="object-cover"
                    height={200}
                    shadow="md"
                    src={project1}
                    width="100%"
                  />
                  <div className="flex items-center justify-center pt-5">
                    <Link 
                    isExternal
                    href="https://github.com/reevesplayer/intern-tracker"
                    >
                      <Chip className="mx-2.5">
                        GitHub
                      </Chip>
                    </Link>
                    <Link 
                    isExternal
                    href="https://classy-kleicha-da37d6.netlify.app/"
                    >
                      <Chip className="mx-2.5">
                        Live Demo
                      </Chip>
                    </Link>
                  </div>
                </div>
                <div className="col-span-6 md:col-span-8">
                  <h3 className="text-xl font-semibold tracking-wide">Internship Application Tracker</h3>
                  <p className="text-primary text-md italic mb-5">
                    Application Tracker
                  </p>
                  <p className="text-primary text-md">
                  A simple web-app for the user to track their current intership/job application status. 
                  Including the option to toggle between a certain status such as <span className="text-orange-400">Applied</span>,  
                  <span className="text-teal-500"> Interview</span>, <span className="text-green-500">Accepted</span>, <span className="text-red-500">Denied</span>.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card
              className="my-5 py-5 px-3"
            >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4">
                  <Image
                    alt="Album cover"
                    className="object-cover"
                    height={200}
                    shadow="md"
                    src={placeHolder}
                    width="100%"
                  />
                  <div className="flex items-center justify-center pt-5">
                    <Link 
                    isExternal
                    href="https://github.com/reevesplayer/"
                    >
                      <Chip className="mx-2.5">
                        GitHub
                      </Chip>
                    </Link>
                    <Link 
                    isExternal
                    href=""
                    >
                      <Chip className="mx-2.5">
                        Live Demo
                      </Chip>
                    </Link>
                  </div>
                </div>
                <div className="col-span-6 md:col-span-8">
                  <h3 className="text-xl font-semibold tracking-wide">Sample Project</h3>
                  <p className="text-primary text-md italic mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-primary text-md">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem dicta maiores magni 
                  sequi at doloremque asperiores veritatis consectetur amet id ullam architecto inventore voluptates ad, 
                  dolorum modi atque cum tempore.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card
              className="my-5 py-5 px-3"
            >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4">
                  <Image
                    alt="Album cover"
                    className="object-cover"
                    height={200}
                    shadow="md"
                    src={placeHolder}
                    width="100%"
                  />
                  <div className="flex items-center justify-center pt-5">
                    <Link 
                    isExternal
                    href="https://github.com/reevesplayer/"
                    >
                      <Chip className="mx-2.5">
                        GitHub
                      </Chip>
                    </Link>
                    <Link 
                    isExternal
                    href=""
                    >
                      <Chip className="mx-2.5">
                        Live Demo
                      </Chip>
                    </Link>
                  </div>
                </div>
                <div className="col-span-6 md:col-span-8">
                  <h3 className="text-xl font-semibold tracking-wide">Sample Project</h3>
                  <p className="text-primary text-md italic mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-primary text-md">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem dicta maiores magni 
                  sequi at doloremque asperiores veritatis consectetur amet id ullam architecto inventore voluptates ad, 
                  dolorum modi atque cum tempore.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Contact Me</h1>
            <Contact />
          </div>

        </div>
    </div>
  );
};

export default AboutMe;
