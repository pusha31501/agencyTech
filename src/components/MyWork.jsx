import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion, stagger } from "motion/react";

const MyWork = () => {
  const [modal, setModal] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const handleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const filterDataByID = (itemID) => {
    const data = myworkData.filter((c) => c.id === itemID);
    setFilterData(data);
    //handleModal();
  };

  const myworkData = [
    {
      id: 0,
      title: "Frontend Project",
      description: "Web and Graphic Design",
      link: "https://mgpmaritime.vercel.app",
      Company: "MGP MARITIME CO.",
      image: assets.mgpbg,
    },

    {
      id: 1,
      title: "Graphic Design",
      description: "Company Collateral Design",
      link: "https://ultreumsecurity.com/",
      Company: "ULTREUM SECURITY SDN.BHD.",
      image: assets.ultreumbg,
    },
    {
      id: 2,
      title: "Branding",
      description: "Graphic Design",
      link: "https://www.ebay.com/itm/257040113885",
      Company: "SCENTERIA LUSCIOUS SCENTS",
      image: assets.scenteriabg,
    },
  ];
  return (
    <div
      id="my-work"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      {modal && (
        <div className="absolute inset-0 bg-gray-400/90 z-20 flex items-center justify-center overflow-y-hidden">
          <div className="bg-gray-900 rounded-xl p-2 text-center text-white min-w-[95%] sm:min-w-[60%] min-h-[30%] sm:min-h-[80%] overflow-hidden">
            {filterData.map((name, index) => (
              <div
                key={index}
                className="relative border-2 border-amber-500 flex flex-col items-center justify-center"
              >
                <span
                  className="absolute top-0 right-0 font-extrabold text-2xl cursor-pointer hover:text-3xl transition-all duration-300"
                  onClick={handleModal}
                >
                  X
                </span>
                <img
                  src={name.thumbnail}
                  alt=""
                  className="w-[90%] h-90 object-contain"
                />
                <div>
                  <h1>{name.Company}</h1>
                  <span>{name.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
            onClick={() => filterDataByID(index)}
            key={index}
            className="cursor-pointer relative w-[1/3] h-[250px] bg-amber-300 border-amber-100 border-1 overflow-hidden rounded-2xl"
          >
            <img
              src={work.image}
              alt={work.image}
              className="bg-cover bg-no-repeat bg-center w-full h-full"
            />
            <div className="absolute flex items-center justify-between bottom-6 bg-white/80 w-full px-4 py-4 mx-auto text-black">
              <div>
                <h2 className="font-bold text-md">{work.Company}</h2>
                <p className="text-sm text-gray-700">{work.title}</p>
                <span className="text-sm">{work.description}</span>
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
