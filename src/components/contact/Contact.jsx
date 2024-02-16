import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wma6wv8",
        "template_0gmaito",
        form.current,
        "3Tjr5dKOUdF-A2VR3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toggleButton();
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>mattmiyata@gmail.com</span>
          <h2>Github</h2>
          <span>
            <a href="https://github.com/mattmiyata?tab=repositories">
              Click Here to see the Github
            </a>
          </span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        {showButton ? (
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" required placeholder="Name" name="Name" />
            <input type="email" required placeholder="Email" name="Email" />
            <textarea
              required
              minLength={10}
              rows={8}
              placeholder="Message"
              name="Message"
            ></textarea>
            <button type="submit" value="Send">
              Submit
            </button>
          </form>
        ) : (
          <h2>
            Thanks for messaging us! We'll be sure to get back to you as soon as
            possible!
          </h2>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
