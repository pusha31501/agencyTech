import React from "react";
import { motion } from "motion/react";

const Title = ({ title, description }) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-lg text-center text-gray-500 dark:text-white/75 -mb-6"
      >
        {title}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-medium text-green-800"
      >
        {description}
      </motion.h2>
    </>
  );
};

export default Title;
