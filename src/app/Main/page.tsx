import { Skills } from "@/container/Main/Skills/page";
import { Contacts } from "@/container/Main/Contacts/page";
import Home from "@/container/Main/Home/page";

export default function Main() {
  return (
    <div className="relative">
      <div className="fixed flex flex-row justify-between items-center pt-5  w-full">
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

      <section id="contacts" className="min-h-screen px-7 pt-20">
        <Contacts />
      </section>
    </div>
  );
}
