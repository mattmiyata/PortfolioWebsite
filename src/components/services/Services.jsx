import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>Web Development</h1>
          <p>
            I'm a full stack web developer focused on creative solutions to
            problems.{" "}
          </p>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div>
          <div className="text">
            <h2>Javascript</h2>
            <p>CSS HTML design and dynamic content</p>
          </div>
          <img src="/javascript.png" alt="js" />
        </div>
        <div>
          <div className="text">
            <h2>Nodejs</h2>
            <p>
              Nodejs is the core for our backend technologies coupled with
              express
            </p>
          </div>
          <img src="/nodejs.png" alt="js" />
        </div>
        <div>
          <div className="text">
            <h2>React</h2>
            <p>
              We use react for fast, responsive UI to create an enjoyable user
              experience.
            </p>
          </div>
          <img src="/react.png" alt="js" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
