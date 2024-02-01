import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a
            href="https://github.com/mattmiyata?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/pngegg.png" alt="git" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
