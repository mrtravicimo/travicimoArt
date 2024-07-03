import React, { useContext } from "react";
import WomanImg from "../img/home/Asuka-nobg.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative bg-purple-100">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center h-full px-4 lg:px-0 pt-24 lg:pt-0">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full lg:w-1/2 z-10 flex flex-col justify-center items-center lg:items-start mb-8 lg:mb-0"
          >
            <h1 className="h1 text-center lg:text-left">
              Artist <br /> & Musician
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 text-center lg:text-left">
              Tokyo, Japan
            </p>
            <Link to={"/contact"} className="btn mb-[30px] rounded-md">
              hire me
            </Link>
          </motion.div>
          {/* image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
          >
            <div className="w-full max-w-[300px] lg:max-w-[400px] h-auto">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                src={WomanImg}
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;