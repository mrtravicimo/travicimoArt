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
             I am also a music artist since a little kid i would play music instruments,
             including <b>Guitar, Drums, Bass, Piano, Flute.</b>
             <br/> <br/> I played in a metal band for a number of years 
             and now I am trying to explore many different types of styles to broden my understanding of how to build various genres.
            </p>
          {/* images grid */}
          <div className="max-w-[250px] lg:max-w-[320px]
          h-[187px] lg:h-[220px] flex-auto">  
          <h2 className='bottom-5 text-center text-black text-2xl '>View songs on YouTube</h2>    
          <div className='text-center text-stone-800 hover:text-orange-800 hover:scale-150 transition-all duration-500'>
              <a href="https://youtu.be/xlEAmLYmTew?si=WDIm9aehY0rYXa1y">sanpo</a>              
             </div>
          <div className='text-center text-stone-800 hover:text-orange-800 hover:scale-150 transition-all duration-500'>
              <a href="https://youtu.be/u1gnZ4jCbaU?si=k9xdPW3tR_hOYAOM">Cyber Valkyrie</a>              
             </div>
             <div className='text-center text-stone-800 hover:text-orange-800 hover:scale-150 transition-all duration-500'>
              <a href="https://youtu.be/7XtxJM8mriU?si=JDfLYzC66PcHLzDh">Starpocolypse</a>
             </div>
          </div>
            <Link
              to={"/contact"}
              className="btn mb-[30px]
            mx-auto lg:mx-0"
            >
              Hire me
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};


export default Music