"use client";
import { Contacts } from "@/container/Main/Contacts/page";
import Experience from "@/container/Main/Experience/page";
import Home from "@/container/Main/Home/page";
import Project from "@/container/Main/Project/page";
import { Skills } from "@/container/Main/Skills/page";
import { useEffect, useState } from "react";

export default function Main() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative">
      <div
        className={`fixed top-0 z-50 w-full flex justify-between items-center pt-4
        transition-transform duration-300 ease-in-out bg-gray-800 pb-4
        ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <h1 className=" text-xl text-white font-bold px-7">
          Elakkiya Selvarajan
        </h1>

        <h3 className="text-xl text-white pr-7">
          <a
            href="#home"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#skills"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Skills
          </a>
          <a
            href="#project"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Project
          </a>
           <a
            href="#experience"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Experience
          </a>
          <a
            href="#contacts"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Contacts
          </a>
        </h3>
      </div>
      <section id="home" className="min-h-screen px-7 pt-20">
        <Home />
      </section>

      <section id="skills" className="min-h-screen px-7 pt-20">
        <Skills />
      </section>
      <section id="project" className="min-h-screen px-7 pt-20">
        <Project />
      </section>
      <section id="experience" className="min-h-screen px-7 pt-20">
        <Experience />
      </section>

      <section id="contacts" className="min-h-screen px-7 pt-20">
        <Contacts />
      </section>
    </div>
  );
}
