import React, { useContext, useState, useEffect } from "react";
import Image1 from "../img/portfolio/dragonSamurai.png";
import Image2 from "../img/portfolio/lantern.jpg";
import Image3 from "../img/portfolio/Asuka.jpg";
import Image4 from "../img/portfolio/oni.jpg";
import Image5 from "../img/portfolio/vampireNinja.png";
import Image6 from "../img/portfolio/deadpool.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { CursorContext } from "../context/CursorContext";
import Masonry from "react-masonry-css";
import { useInView } from "react-intersection-observer";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const images = [
    { src: Image1, alt: "Dragon Samurai" },
    { src: Image2, alt: "Lantern" },
    { src: Image3, alt: "Asuka" },
    { src: Image4, alt: "Oni" },
    { src: Image5, alt: "Vampire Ninja" },
    { src: Image6, alt: "Deadpool" },
  ];

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const backgroundControls = useAnimation();

  useEffect(() => {
    backgroundControls.start({
      x: (mousePosition.x - window.innerWidth / 2) / -30,
      y: (mousePosition.y - window.innerHeight / 2) / -30,
    });
  }, [mousePosition, backgroundControls]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="section relative overflow-hidden bg-white h-screen"
    >
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        animate={backgroundControls}
      >
        <svg
          width="80%"
          height="80%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#glow)">
            <motion.path
              d="M10,50 Q25,0 50,50 T90,50"
              fill="none"
              stroke="#FF0000"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M10,25 Q50,0 90,25"
              fill="none"
              stroke="#000000"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M10,75 Q50,100 90,75"
              fill="none"
              stroke="#FF0000"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
          </g>
          <motion.circle
            cx="20"
            cy="20"
            r="5"
            fill="#000000"
            opacity="0.2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.polygon
            points="80,10 90,30 70,30"
            fill="#FF0000"
            opacity="0.2"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.rect
            x="70"
            y="70"
            width="10"
            height="10"
            fill="#000000"
            opacity="0.1"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      <div className="container mx-auto h-full relative pt-24 lg:pt-36 pb-8 overflow-y-auto z-10 scrollbar-hide">
        <div className="flex flex-col lg:flex-row h-auto items-start justify-start gap-x-24 text-center lg:text-left">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="flex flex-col lg:items-start mb-10 lg:mb-0"
          >
            <motion.h1 
              className="h1 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.3 }}
            >
              Portfolio
            </motion.h1>
            <motion.p 
              className="mb-12 max-w-sm text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.4 }}
            >
              Step into a world where <span className="text-red-600">bold contrasts</span> meet 
              artistic expression. My portfolio showcases a fusion of 
              <b> stark blacks, crisp whites, and striking reds</b>, 
              each piece a testament to the power of minimalist design 
              and dramatic impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.5 }}
            >
              <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0 bg-red-600 text-white hover:bg-black hover:text-white">
                Explore More
              </Link>
            </motion.div>
          </motion.div>
          {/* images grid */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full lg:w-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.6 }}
          >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex w-auto"
              columnClassName="bg-clip-padding px-2"
            >
              {images.map((image, index) => (
                <MasonryItem 
                  key={index} 
                  image={image} 
                  index={index} 
                  setSelectedImage={setSelectedImage} 
                />
              ))}
            </Masonry>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <ExpandedImage image={selectedImage} setSelectedImage={setSelectedImage} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const MasonryItem = ({ image, index, setSelectedImage }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
      whileHover={{ scale: 1.05, boxShadow: "0 0 8px #FF0000" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedImage(image)}
    >
      <img src={image.src} alt={image.alt} className="w-full rounded-lg shadow-lg" />
    </motion.div>
  );
};

const ExpandedImage = ({ image, setSelectedImage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-full max-h-full object-contain"
      />
    </motion.div>
  );
};

export default Portfolio;