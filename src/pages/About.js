import React, { useContext } from "react";
import Selfie from "../img/about/7E7451D2-C0F4-42AB-8D5E-E8F0B8FFFA18_1_105_c.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative overflow-auto bottom-8 top-8"
      >
        {/* text & image wrapper */}
        <div
          className="flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24 
      text-center lg:text-left lg:pt-16"
        >
          {/* image */}
          <div
            className="flex-1 mb-50 max-h-96 lg:max-h-max 
        order-2 lg:order-none  rounded-full"
          >
            <img src={Selfie} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 
          lg:w-auto z-10 flex flex-col justify-center 
          items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Born in Quebec Canada I started drawing at a very young age and entering my teenager years also got involved in music.
              <b>Never Give Up!.</b> with doing numourous jobs i always kept my passion alive and continue to make art until my demise.
              <br />
              <br />
              
            </p>
            <Link to={"/portfolio"} className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
