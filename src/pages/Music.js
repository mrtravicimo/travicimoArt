import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Music = () => {
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
        className="container mx-auto h-full overflow-auto bottom-10
    relative"
      >
        <div
          className="flex flex-col lg:flex-row h-full 
      items-center justify-start gap-x-24 text-center
      lg:text-left pt-24 lg:pt-36 pb-8"
        >
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Music</h1>
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
            <Link
              to={"/contact"}
              className="btn mb-[30px]
            mx-auto lg:mx-0"
            >
              Hire me
            </Link>
          </motion.div>
          {/* images grid */}
          <div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};


export default Music