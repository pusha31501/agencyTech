import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      id="hero"
      className="flex flex-col items-center gap-6 py-10 sm:pt-30 px-4 sm:px-12 lg:px-24 xl-px-24 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-between max-w-5xl"
      >
        <div className="flex-1 max-w-xl space-y-2 order-2 sm:order-1">
          <p className="text-xl">Hi! I'm Sir Paul Laurence</p>
          <h1 className="text-3xl sm:text-6xl font-bold text-green-800">
            frontend web developer based in Metro Manila.
          </h1>
          <p className="sm:leading-8 text-sm sm:text-lg">
            I am a frontend developer and Graphic Layout Artist from City of
            Taguig, Metro Manila with experience in multiple projects.
          </p>
        </div>
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          src={assets.image_round}
          alt="image profile"
          className="w-[50%] sm:w-[30%] sm:order-1 mb-4"
        />
      </motion.div>
      <a
        href="#contact-us"
        className="text-sm sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
      >
        connect with me
        <img src={assets.arrow_icon} width={14} alt="" />
      </a>
    </motion.div>
  );
};

export default Hero;
