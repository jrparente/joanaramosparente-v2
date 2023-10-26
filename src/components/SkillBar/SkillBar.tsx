import { Code, Globe, Feather, DollarSign, Cpu } from "lucide-react";

function SkillBar() {
  return (
    <div className="mt-auto flex flex-col lg:flex-row items-center justify-center lg:gap-32 py-5 bg-gray-200 md:mt-15 lg:mt-0 px-5 xs:px-10 sm:px-12 md:px-24 text-sm lg:text-base uppercase font-semibold">
      <div className="flex flex-row items-center my-2 lg:my-0">
        <Code className="w-5 h-5" />
        <span className="ml-2">HTML, CSS, JavaScript</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <Globe className="w-5 h-5" />
        <span className="ml-2">React, Next.js</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <Feather className="w-5 h-5" />
        <span className="ml-2">UI/UX Design</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <DollarSign className="w-5 h-5" />
        <span className="ml-2">Digital Marketing</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <Cpu className="w-5 h-5" />
        <span className="ml-2">Artificial Intelligence</span>
      </div>
    </div>
  );
}

export default SkillBar;
