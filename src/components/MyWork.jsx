import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion, stagger } from "motion/react";

const MyWork = () => {
  const myworkData = [
    {
      title: "Frontend Project",
      description: "web Design",
      link: "https://mgpmaritime.vercel.app",
      image:
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Graphic Design",
      description: "Company Collateral design",
      link: "https://ultreumsecurity.com/",
      image:
        "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?q=80&w=571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Landing Page Site",
      description: "web design",
      link: "https://mgpmaritime.vercel.app",
      image:
        "https://images.unsplash.com/photo-1584824486516-0555a07fc511?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div
      id="my-work"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title title="My portfolio" description="My latest work" />
      <p className="text-center text-sm max-w-lg">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10"
      >
        {myworkData.map((work, index) => (
          <div
            key={index}
            className="relative w-[1/3] h-[250px] bg-amber-300 overflow-hidden rounded-2xl"
          >
            <img
              src={work.image}
              alt={work.image}
              className="bg-cover bg-no-repeat bg-center w-full h-full"
            />
            <div className="absolute flex items-center justify-between bottom-6 bg-white/80 w-full px-4 py-4 mx-auto text-black">
              <div>
                <h2 className="font-bold text-md">{work.title}</h2>
                <p className="text-sm text-gray-700">{work.description}</p>
              </div>
              <div className="flex items-center justify-center rounded-full bg-green-100 overflow-hidden hover:border duration-300 transition-all">
                <a href={work.link} target="_blank" className="p-4">
                  <img src={assets.arrowsite} alt="" className="w-4 " />
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MyWork;
