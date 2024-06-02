"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLinks from "./NavLinks";

import { Menu, X } from "lucide-react";
import SigninButton from "../SigninButton";

const MainNavbar = () => {
  const [navOpen, isNavOpen] = useState(false);

  const toggleNavHandler = () => {
    isNavOpen(!navOpen);
  };

  return (
    <>
      <header className="w-full h-auto flex sm:px-16 py-4 flex-col sm:flex-row relative ">
        <div className="flex justify-between items-center w-full px-8 sm:px-0">
          <Link href={"/"} className="flex gap-2 justify-center items-center">
            <Image src={logoImg} width={40} priority alt="logo image" />
            <h1>Food Recipe</h1>
          </Link>
          <nav className="">
            {navOpen ? (
              <X
                className="block sm:hidden cursor-pointer"
                onClick={toggleNavHandler}
              />
            ) : (
              <Menu
                className="block sm:hidden cursor-pointer"
                onClick={toggleNavHandler}
              />
            )}
            <ul className="gap-4 hidden sm:flex">
              <li>
                <NavLinks href={"/meals"}>Recipes</NavLinks>
              </li>
              <li>
                <NavLinks href={"/community"}>Community</NavLinks>
              </li>
              <SigninButton></SigninButton>
            </ul>
          </nav>
        </div>
        <AnimatePresence>
          {navOpen ? (
            <motion.nav
              className="w-full px-8 py-4 sm:hidden flex flex-col gap-2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-[40px] flex justify-start items-center w-full">
                <NavLinks
                  className=""
                  onClick={toggleNavHandler}
                  href={"/meals"}
                >
                  Recipes
                </NavLinks>
              </div>
              <div className="h-[40px] flex justify-start items-center w-full">
                <NavLinks
                  className=""
                  onClick={toggleNavHandler}
                  href={"/community"}
                >
                  Community
                </NavLinks>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
};

export default MainNavbar;
