import Image from "next/image";
import { PROJECTS } from "@/Data";

export default function Project() {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-white text-center">
        Projects
      </h2>
      <div className="mt-10 ">
        <div className="grid grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id || project.title}
              className="mb-6 bg-gray-900 rounded-lg p-6 mr-5 
  hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-auto rounded-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-white mb-5 mt-3">
                {project.title}
              </h3>
              <p className="text-[#FAF3E1]">{project.description}</p>
              <div className="mt-4 flex">
               <p className="text-white text-sm mt-auto pt-4">
                  <span className="text-[#FA8112] font-semibold">
                    Skills & Tools:
                  </span>{" "}
                  {project.SkillsTools.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
