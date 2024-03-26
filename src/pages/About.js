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
        className="container mx-auto h-full relative"
      >
        {/* text & image wrapper */}
        <div
          className="flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24 
      text-center lg:text-left lg:pt-16"
        >
          {/* image */}
          <div
            className="flex-1 max-h-96 lg:max-h-max 
        order-2 lg:order-none overflow-hidden"
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              <b>rem aliquam modi vero temporibus.</b> veniam obcaecati nihil
              corrupti architecto magnam in ut, dolorem harum laborum aliquid
              velit impedit voluptatem illum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              dolore dicta sint in placeat fugit modi, rerum maiores quos
              perspiciatis molestiae voluptatibus delectus repudiandae quibusdam
              numquam illo ab veniam a.
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
