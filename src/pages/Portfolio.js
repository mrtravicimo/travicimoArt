import React, { useContext, useState, useEffect, useRef } from "react";
import Image1 from "../img/portfolio/dragonSamurai.png";
import Image2 from "../img/portfolio/lantern.jpg";
import Image3 from "../img/portfolio/Asuka.jpg";
import Image4 from "../img/portfolio/oni.jpg";
import Image5 from "../img/portfolio/vampireNinja.png";
import Image6 from "../img/portfolio/deadpool.jpg";
import Image7 from "../img/portfolio/7EE1D6B9-0E99-4991-B55E-CA56AC304E70.webp"
import Image8 from "../img/portfolio/1C886871-B7F8-4C11-AA72-C17CBBE6F1A1.jpeg"
import Image9 from "../img/portfolio/5F74CED9-E244-4227-850C-C5A5240548EC_1_105_c.jpeg"
import Image10 from "../img/portfolio/6B08FCD7-E362-4C24-A0A0-7E20CE10ED85_1_105_c.jpeg"
import Image11 from "../img/portfolio/43A32696-9F17-4FFE-A454-6ED975B11C65_1_105_c.jpeg"
import Image12 from "../img/portfolio/75FA0570-E0BB-4054-B4DE-4D21705011AB_1_105_c.jpeg"
import Image13 from "../img/portfolio/80F92304-8EEE-4729-BD37-CE2CC8E005AE.jpeg"
import Image14 from "../img/portfolio/517A8919-223D-4EED-A136-7E88DD4021BB_1_105_c.jpeg"
import Image15 from "../img/portfolio/562B215D-F3E6-4883-B65C-D19421FFEDB2_1_105_c.jpeg"
import Image16 from "../img/portfolio/609C90E1-52CB-4EE5-86BD-42E4D6BC6185_1_105_c.jpeg"
import Image17 from "../img/portfolio/A237A93B-6FC7-4D85-9FC5-917D877322AA_1_105_c.jpeg"
import Image18 from "../img/portfolio/BE070805-3BBE-4AB6-81D3-71AEADD17948_1_105_c.jpeg"
import Image19 from "../img/portfolio/C20D29A7-04B6-42E8-AF7D-B59EFF743685_1_105_c.jpeg"
import Image20 from "../img/portfolio/F4A31A9A-2FFB-4AE9-A870-F838111DE425.webp"
import Image21 from "../img/portfolio/HiPaint_1692421868855.jpg"
import Image22 from "../img/portfolio/HiPaint_1689861348243~2.jpg"
import Image23 from "../img/portfolio/HiPaint_1692194373083.jpg"
import Image24 from "../img/portfolio/58b25e4a-41d1-4fa0-a12c-255e30977d65.png"
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useAnimation, useScroll, useTransform } from "framer-motion";
import { CursorContext } from "../context/CursorContext";
import Masonry from "react-masonry-css";
import { useInView } from "react-intersection-observer";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

  const images = [
    { src: Image1, alt: "Dragon Samurai" },
    { src: Image2, alt: "Lantern" },
    { src: Image3, alt: "Asuka" },
    { src: Image4, alt: "Oni" },
    { src: Image5, alt: "Vampire Ninja" },
    { src: Image6, alt: "Deadpool" },
    { src: Image7, alt: "7EE1D6B9-0E99-4991-B55E-CA56AC304E70.webp"},
    { src: Image8, alt: "1C886871-B7F8-4C11-AA72-C17CBBE6F1A1.jpeg" },
    { src: Image9, alt: "5F74CED9-E244-4227-850C-C5A5240548EC_1_105_c.jpeg" },
    { src: Image10, alt: "6B08FCD7-E362-4C24-A0A0-7E20CE10ED85_1_105_c.jpeg" },
    { src: Image11, alt: "" },
    { src: Image12, alt: "" },
    { src: Image13, alt: "" },
    { src: Image14, alt: "" },
    { src: Image15, alt: "" },
    { src: Image16, alt: "" },
    { src: Image17, alt: "" },
    { src: Image18, alt: "" },
    { src: Image19, alt: "" },
    { src: Image20, alt: "" },
    { src: Image21, alt: "" },
    { src: Image22, alt: "" },
    { src: Image23, alt: "" },
    { src: Image24, alt: "" },
  ];

  const breakpointColumnsObj = {
    default: 3,
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
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="section relative overflow-hidden bg-white min-h-screen"
    >
      {/* Parallax background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: y1, rotate: rotate1, scale: scale1 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect width="100" height="100" fill="none" stroke="black" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="black" strokeWidth="0.5"/>
          </svg>
        </motion.div>
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: y2, rotate: rotate2, scale: scale2 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,100 0,100" fill="none" stroke="black" strokeWidth="0.5"/>
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        animate={backgroundControls}
      >
        {/* SVG content remains the same */}
      </motion.div>

      <div className="container mx-auto h-full relative pt-24 lg:pt-36 pb-8 overflow-y-auto z-10 scrollbar-hide">
        <div className="flex flex-col items-center justify-center h-auto text-center">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="flex flex-col items-center mb-10 max-w-2xl"
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
              className="mb-12 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.4 }}
            >
              in the creative mind of <span className="text-red-600"><b>Travis Racine</b></span> Art has always been a passion and would love to make it a way of life.
              <b> drawing since a child he would never drop that pen </b>, 
              he would go on drawing, painting and even become a tattoo artist through the years.
              now he is ready for the world to enjoy his passion.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.5 }}
            >
              <Link to={"/contact"} className="btn mb-[30px] rounded-md bg-red-800 text-white hover:bg-red-500 hover:text-white">
                Explore More
              </Link>
            </motion.div>
          </motion.div>
          {/* images grid */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
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