"use client";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
interface NavButtonProps {
  href?: string;
  children: React.ReactNode;
  separator?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({
  children,
  href,
  separator = true,
}) => {
  const [onHover, setOnHover] = React.useState(false);
  return (
    <motion.div
      className={`relative text-lg font-medium flex items-center border-black ${
        separator ? "border-r" : ""
      }`}
      onHoverStart={() => setOnHover(true)}
      onHoverEnd={() => setOnHover(false)}
      onClick={separator ?  undefined : () => signIn("google")}
    >
      <Link href={href || "#"} className="px-4 h-full flex items-center">
        {children}
      </Link>
      <motion.div
        className={`absolute w-[60%] h-2 bg-blue-300/70 bottom-3 right-4`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: onHover ? 1 : 0,
          y: onHover ? 0 : 5,
          x: onHover ? 0 : -5,
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default NavButton;
