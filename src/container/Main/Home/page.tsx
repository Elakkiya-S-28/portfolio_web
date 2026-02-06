"use client";
import { TypeAnimation } from "react-type-animation";

import HomeImage from "@/component/HomeImage/page";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Elakkiya_Resume.pdf";
    link.download = "Elakkiya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center ml-10 mr-10">
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-5xl">Hello </span>
            <span className="text-5xl text-[#F26B4F]">.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-40 h-[3px] bg-[#F26B4F]"></div>
            <TypeAnimation
              sequence={["I'm Elakkiya Selvarajan",3000,"",1000]}
              wrapper="span"
              speed={40}
             className="text-4xl font-semibold min-w-[420px] inline-block"
              repeat={Infinity}
            />
            {/* <h2 className="text-4xl font-semibold">I'm Elakkiya Selvarajan</h2> */}
          </div>

          <h1 className="text-5xl text-[#F26B4F]">Front End Developer</h1>
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-[#F26B4F] text-white rounded-xl font-semibold hover:bg-[#e85f44] transition w-[50%]"
          >
            My Resume
          </button>
        </div>

        <div>
          <HomeImage />
        </div>
      </div>
      <div>
        <h1 className="text-2xl wrap-anywhere text-red-50">
          I’m a React Native Developer with 2+ years of experience building
          cross-platform mobile applications. I also have experience in web
          frontend development and a good understanding of backend APIs, which
          helps me create complete and scalable solutions.
        </h1>
      </div>
    </div>
  );
}
