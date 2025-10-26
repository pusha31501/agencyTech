import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion, stagger } from "motion/react";

const OurWork = () => {
  const wordData = [
    {
      title: "Mobile App Marketing",
      desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashbboard Management",
      desc: "We help you execute your plan and deliver results",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Promotion",
      desc: "We help you create a marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest Works"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl ">
        {wordData.map((data, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col hover:-translate-y-1 duration-300 cursor-pointer text-center px-4"
            key={index}
          >
            <img src={data.image} alt="" className="pb-4" />
            <h2 className="font-bold text-xl pb-3 dark:text-white">
              {data.title}
            </h2>
            <p className="text-sm text-gray-400">{data.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
