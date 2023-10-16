import { Code, Globe, Feather, DollarSign, Cpu } from "lucide-react";

function SkillBar() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-32 py-5 bg-gray-200 mt-10 md:mt-15 lg:mt-0 px-5 xs:px-10 sm:px-12 md:px-24">
      <div className="flex flex-row items-center my-2 lg:my-0">
        <Code size={24} />
        <span className="ml-2">HTML, CSS, JavaScript</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <Globe size={24} />
        <span className="ml-2">React, Next.js</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <Feather size={24} />
        <span className="ml-2">UI/UX Design</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <DollarSign size={24} />
        <span className="ml-2">Digital Marketing</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <Cpu size={24} />
        <span className="ml-2">Artificial Intelligence</span>
      </div>
    </div>
  );
}

export default SkillBar;
