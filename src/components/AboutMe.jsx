import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion, stagger } from "motion/react";
import { toolsIcons } from "../assets/assets";

const AboutMe = () => {
  const aboutData = [
    {
      title: "Languages",
      desc: "HTML, CSS, JavaScript, React Js, Next Js",
      image: assets.languageIcon,
    },
    {
      title: "Education",
      desc: "Bachelor of Science in Computer Engineering",
      image: assets.educationIcon,
    },
    {
      title: "Projects",
      desc: "Building company brand.",
      image: assets.projectIcon,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="about-me"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-5 sm:pt-30 text-gray-700 dark:text-white"
    >
      <Title title="Introduction" description="About me" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="hidden sm:block w-[35%]">
          <img
            src={assets.image_profile}
            alt="image profile"
            className="w-[100%]"
          />
        </div>
        <div className="flex flex-col flex-1 space-y-4">
          <p className="text-center text-sm">
            I am an experienced Frontend Developer and Graphic layout Artist
            with over a decade of professional experience in the field.
            Throughtout my career, I have the privilege of collaborating with
            prestigious organization, contributing to their success and growth.
          </p>
          <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl ">
            {aboutData.map((data, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col hover:-translate-y-1 duration-300 cursor-pointer text-center sm:text-left px-4 bg-white border border-green-900 p-4 rounded-xl shadow-gray-700 shadow-[20px 20px 10px #fff]"
                key={index}
              >
                <img src={data.image} alt="" className="pb-4 w-8 mx-auto" />
                <h2 className="font-bold text-black text-xl pb-3">
                  {data.title}
                </h2>
                <p className="text-sm text-gray-700">{data.desc}</p>
              </motion.div>
            ))}

            <div className="space-y-4">
              <h1>Tools i use</h1>
              <div className="flex gap-2">
                {toolsIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-40 hover:scale-125 cursor-pointer duration-300"
                  >
                    <img src={icon} alt={icon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
