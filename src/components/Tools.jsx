import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardBody } from "@nextui-org/react";
import { useInView } from 'react-intersection-observer';

const Tools = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
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
        <div>
          <h1 className="text-2xl font-semibold mb-2">Tools & Platforms</h1>
        </div>
      </div>
      <motion.div
        ref={ref}
        className="text-primary overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <Card className="my-5 py-5 px-3" isBlurred as={motion.div} variants={cardVariants}>
          <CardBody>
            <h1 className="text-xl font-semibold tracking-wide">Languages</h1>
            <p className='text-primary-400'>JavaSript/Node.js, HTML/CSS, Python</p>
          </CardBody>
        </Card>
        <Card className="my-5 py-5 px-3" isBlurred as={motion.div} variants={cardVariants}>
          <CardBody>
            <h1 className="text-xl font-semibold tracking-wide">Frameworks</h1>
            <p className='text-primary-400'>React.js, Next.js, Tailwind CSS, NextUI, MUI, Bootstrap</p>
          </CardBody>
        </Card>
        <Card className="my-5 py-5 px-3" isBlurred as={motion.div} variants={cardVariants}>
          <CardBody>
            <h1 className="text-xl font-semibold tracking-wide">Tools</h1>
            <p className='text-primary-400'>Visual Studio Code, GitHub, Discord, Git</p>
          </CardBody>
        </Card>
        <Card className="my-5 py-5 px-3" isBlurred as={motion.div} variants={cardVariants}>
          <CardBody>
            <h1 className="text-xl font-semibold tracking-wide">Business</h1>
            <p className='text-primary-400'>Microsoft 365, G-Suite</p>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}

export default Tools;
