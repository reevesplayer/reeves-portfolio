import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardBody, Image, Chip, Link } from "@nextui-org/react";
import { useInView } from 'react-intersection-observer';
import project1 from '../components/project-1.png';
import placeHolder from '../components/coding.png';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <div className="pr-8 text-primary mb-8 flex items-center">
        <div className="flex-grow">
          <h1 className="text-2xl font-semibold mb-2">Projects</h1>
        </div>
        <div className="">
          <Link href="https://test.com" isExternal>
            <h1 className="text-md font-light mb-2 text-primary-400">View Resume →</h1>
          </Link>
        </div>
      </div>

      <motion.div
        ref={ref}
        className="text-primary"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Project 1 */}
        <Card isBlurred className="my-5 py-5 px-3" as={motion.div} variants={cardVariants}>
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Project cover"
                  className="object-cover"
                  height={200}
                  shadow="md"
                  src={project1}
                  width="100%"
                />
                <div className="flex items-center justify-center pt-5">
                  <Link isExternal href="https://github.com/reevesplayer/intern-tracker">
                    <Chip className="mx-2.5">GitHub</Chip>
                  </Link>
                  <Link isExternal href="https://classy-kleicha-da37d6.netlify.app/">
                    <Chip className="mx-2.5">Live Demo</Chip>
                  </Link>
                </div>
              </div>
              <div className="col-span-6 md:col-span-8">
                <h3 className="text-xl font-semibold tracking-wide">Internship Application Tracker</h3>
                <p className="text-primary-400 text-md italic mb-5">Application Tracker</p>
                <p className="text-primary text-md">
                  A simple web-app for the user to track their current internship/job application status.
                  Including the option to toggle between a certain status such as{' '}
                  <span className="text-orange-400">Applied</span>,{' '}
                  <span className="text-teal-500"> Interview</span>,{' '}
                  <span className="text-green-500">Accepted</span>,{' '}
                  <span className="text-red-500">Denied</span>.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Project 2 */}
        <Card isBlurred className="my-5 py-5 px-3" as={motion.div} variants={cardVariants}>
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Project cover"
                  className="object-cover"
                  height={200}
                  shadow="md"
                  src={placeHolder}
                  width="100%"
                />
                <div className="flex items-center justify-center pt-5">
                  <Link isExternal href="https://github.com/reevesplayer/">
                    <Chip className="mx-2.5">GitHub</Chip>
                  </Link>
                  <Link isExternal href="">
                    <Chip className="mx-2.5">Live Demo</Chip>
                  </Link>
                </div>
              </div>
              <div className="col-span-6 md:col-span-8">
                <h3 className="text-xl font-semibold tracking-wide">Sample Project</h3>
                <p className="text-primary-400 text-md italic mb-5">
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

        {/* Project 3 */}
        <Card isBlurred className="my-5 py-5 px-3" as={motion.div} variants={cardVariants}>
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Project cover"
                  className="object-cover"
                  height={200}
                  shadow="md"
                  src={placeHolder}
                  width="100%"
                />
                <div className="flex items-center justify-center pt-5">
                  <Link isExternal href="https://github.com/reevesplayer/">
                    <Chip className="mx-2.5">GitHub</Chip>
                  </Link>
                  <Link isExternal href="">
                    <Chip className="mx-2.5">Live Demo</Chip>
                  </Link>
                </div>
              </div>
              <div className="col-span-6 md:col-span-8">
                <h3 className="text-xl font-semibold tracking-wide">Sample Project</h3>
                <p className="text-primary-400 text-md italic mb-5">
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
      </motion.div>

      <div className="flex justify-end">
        <Link href="https://github.com/reevesplayer" isExternal>
          <h1 className="text-md font-light mb-2 text-primary-400">View More →</h1>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
