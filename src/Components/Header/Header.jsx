import { motion } from "framer-motion";
import Navbar from "./Navbar/Navbar";

import { logo } from "../../Assets/icons/icons";

const Header = () => {
  return (
    <header className="relative flex items-center justify-center hero-mobile md:hero-desktop">
      <div className="flex flex-row items-center justify-between">
        <motion.a
          href="/"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="absolute z-20 top-10 left-10 md:top-20 md:left-20"
        >
          <img src={logo} alt="" />
        </motion.a>

        <Navbar />
      </div>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
        className="border-white border-2 md:w-[30.625rem] w-[28rem] p-10 absolute mx-auto top-72 md:top-56 md:left-20 "
      >
        <h1 className="hvr-pulse text-white text-5xl font-josefin tracking-widest leading-tight uppercase">
          Immersive experiences that deliver
        </h1>
      </motion.div>
    </header>
  );
};

export default Header;
