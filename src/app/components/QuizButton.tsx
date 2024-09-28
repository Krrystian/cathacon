"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const QuizButton = () => {
  const [onHover, setOnHover] = React.useState(false);
  return (
    <Link
      className="relative text-3xl flex justify-between p-2 bg-[#6C464E] text-[#F1FFE7] rounded-md overflow-hidden"
      href="#"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <motion.div
        className="absolute h-full bg-blue-300 top-0 left-0"
        initial={{ width: 0 }}
        animate={{ width: onHover ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
      />
      <p className={`z-50 ${onHover ? "mix-blend-difference" : ""}`}>
        Rozwiąż quiz
      </p>
      <p
        className={`z-50 delay-200 transition-all ${
          onHover ? "mix-blend-difference" : ""
        }`}
      >
        {">>>"}
      </p>
    </Link>
  );
};

export default QuizButton;
