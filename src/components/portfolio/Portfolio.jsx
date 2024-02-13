import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    link: "https://mern-blogger-eb273b6050cf.herokuapp.com/",
    git: "https://github.com/mattmiyata/mern-blog",
    img: "BloggerImage.PNG",
    title: "Blogger fullstack MERN Application",
    description:
      "Blogger is a fullstack MERN applicaiton.  It is made in React Vite for the front-end and nodeJS and Express for the back-end and MongoDB for the database server. Any user can create and account to create their own blogs and edit or delete them at will.",
  },
  {
    id: 2,
    link: "https://polar-crag-30437-057b7f051c66.herokuapp.com/",
    git: "https://github.com/mattmiyata/YoutubeVideoDownloader",
    img: "youfast-high-resolution-logo.png",
    title: "YouFast Video Saver",
    description:
      "Link your favorite youtube videos to download them on your device!  YouFast is a server side rendered youtube downloader built with nodejs and express for the backend, EJS for the frontend, and utilizing the ytdl-core API.",
  },
  {
    id: 3,
    link: "https://socketiochatserver-6ad190f163f6.herokuapp.com/",
    git: "https://github.com/mattmiyata/socketiochat",
    img: "chatter-high-resolution-logo.png",
    title: "Chatter Chat App",
    description:
      "Chatter is a easy way to chat with friends.  Create a room and enjoy instant messaging with multiple people.  Chatter is built with React frontend and nodejs and express backend utilizing the socket.io api for websocket connectivity.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-5000, 5000]);

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <div className="container">
            <a href={`${item.link}`} target="_blank" rel="noreferrer">
              Visit the Site
            </a>
            <a href={`${item.git}`} target="_blank" rel="noreferrer">
              See the Code!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
