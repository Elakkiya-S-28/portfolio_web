import { SKILLS, TOOLS } from "@/Data";

export const Skills = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-white text-center">Skills</h2>
      <p className="text-[20px] font-bold text-white py-2.5 text-center">Experience ranges from production-ready to basic working knowledge.</p>
      <section className="px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 my-10 gap-10 ml-15 ">
          {SKILLS.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.id}
                className="w-40 h-40 rounded-xl shadow-md bg-[#FAF3E1]
                 flex flex-col items-center justify-center  shadow-sm
            hover:shadow-md
            hover:-translate-y-2.5
            transition-all duration-300"
              >
                <Icon className={`text-4xl ${i.color}`} />
                <span className="mt-5 font-bold text-[#222222]">
                  {i.skills}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-20 px-6">
        <h2 className="text-2xl font-semibold text-gray-300 mb-6 tracking-wide text-white text-center">
          Tools I Use
        </h2>

        <div
          className="
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    gap-5
  "
        >
          {TOOLS.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.id}
                className="
            flex items-center gap-3
            px-10 py-5
            rounded-full
            bg-[#FAF3E1]
            shadow-sm
            hover:shadow-md
            hover:-translate-y-1.75
            transition-all duration-300
          "
              >
                <Icon className={`text-3xl ${i.color}`} />
                <span className="text-sm font-bold text-[#222222]">
                  {i.tools}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
