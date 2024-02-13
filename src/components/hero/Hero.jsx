import Portfolio from "../portfolio/Portfolio";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
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

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MATTHEW MIYATA</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <div>
              <motion.a href="#Portfolio" variants={textVariants}>
                See the Latest Works
              </motion.a>
              <motion.a href="#Contact" variants={textVariants}>
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* <motion.div
        initial="initial"
        animate="animate"
        variants={sliderVariants}
        className="slidingTextContainer"
      >
        Web Developer Content Creator Photographer
      </motion.div> */}
      <div className="imageContainer">
        {/* <img src="/hero.png" alt="profile pic" /> */}
      </div>
    </div>
  );
};

export default Hero;
