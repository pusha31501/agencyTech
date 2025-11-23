import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion, stagger } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Web Design",
      Description:
        "Help to make your company presence online and establish brand identity ",
      icon: assets.webdesign_icon,
    },
    {
      title: "Graphics Design",
      Description:
        "I can help you create and collaborate ideas regarding your brand Identity ",
      icon: assets.graphicdesign_icon,
    },
    {
      title: "Branding",
      Description: "I help you create a marketing strategy that drives results",
      icon: assets.branding_icon,
    },
    {
      title: "Social Media",
      Description:
        "I can help you build a strong social media presence and engage with your audience",
      icon: assets.socialmedia_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title title="What i offers" description="My services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {servicesData.map((service, index) => (
          <ServiceCard service={service} index={index} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
