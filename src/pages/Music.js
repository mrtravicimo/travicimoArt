import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Music = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  const songs = [
    { 
      title: "sanpo", 
      url: "https://youtu.be/xlEAmLYmTew?si=WDIm9aehY0rYXa1y",
      id: "xlEAmLYmTew"
    },
    { 
      title: "Cyber Valkyrie", 
      url: "https://youtu.be/u1gnZ4jCbaU?si=k9xdPW3tR_hOYAOM",
      id: "u1gnZ4jCbaU"
    },
    { 
      title: "Starpocolypse", 
      url: "https://youtu.be/7XtxJM8mriU?si=JDfLYzC66PcHLzDh",
      id: "7XtxJM8mriU"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section min-h-screen bg-white relative overflow-hidden"
    >
      {/* Cool background */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="music-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#music-pattern)"/>
        </svg>
      </div>

      <div className="container mx-auto h-full relative z-10 flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.2 }}
          className="text-center max-w-2xl mb-12"
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Music</h1>
          <p className="mb-8 text-gray-600">
            I am also a music artist. Since childhood, I've played various instruments including 
            <b> Guitar, Drums, Bass, Piano, and Flute</b>. 
            I played in a metal band for several years and now I'm exploring different styles to broaden 
            my understanding of how to build various genres.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.4 }}
          className="mb-12 w-full max-w-4xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">View songs on YouTube</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {songs.map((song, index) => (
              <SongLink key={index} title={song.title} url={song.url} id={song.id} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.6 }}
        >
          <Link
            to="/contact"
            className="btn px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            Hire me
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

const SongLink = ({ title, url, id }) => {
  const controls = useAnimation();

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      onMouseEnter={() => controls.start({ scale: 1.05 })}
      onMouseLeave={() => controls.start({ scale: 1 })}
    >
      <motion.div
        animate={controls}
        className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl h-full flex flex-col"
      >
        <div className="relative pb-[56.25%] flex-shrink-0">
          <img 
            src={`https://img.youtube.com/vi/${id}/0.jpg`}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-3 flex-grow">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        </div>
      </motion.div>
    </motion.a>
  );
};

export default Music;