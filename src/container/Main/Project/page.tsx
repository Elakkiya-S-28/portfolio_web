import Image from "next/image";
import { PROJECTS } from "@/Data";

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge solutions built with modern technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id || project.title}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden"
            >
              {/* Image with overlay */}
              <div className="relative mb-6 rounded-xl overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.SkillsTools.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-sm text-orange-200 hover:bg-orange-500/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Animated shine effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
