import { Code, Feather, DollarSign, Cpu } from "lucide-react";

function SkillBar() {
  return (
    <div className="mt-auto flex flex-col lg:flex-row items-center justify-center lg:gap-32 py-5 bg-gray-200 md:mt-15 lg:mt-0 px-5 xs:px-10 sm:px-12 md:px-24 text-sm lg:text-base uppercase font-semibold">
      <div className="flex flex-row items-center my-2 lg:my-0">
        <div className="bg-primary-500/10 p-2 rounded-md">
          <Code className="w-5 h-5 text-primary-500" />
        </div>
        <span className="ml-2">HTML, CSS, JavaScript</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <div className="bg-gray-500/10 p-2 rounded-md">
          <img src="./react-logo.svg" alt="React Logo" className="w-5 h-5 " />
        </div>
        <span className="ml-2">React</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <div className="bg-primary-500/10 p-2 rounded-md">
          <Feather className="w-5 h-5 text-primary-500" />
        </div>
        <span className="ml-2">UI/UX Design</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <div className="bg-primary-500/10 p-2 rounded-md">
          <DollarSign className="w-5 h-5 text-primary-500" />
        </div>
        <span className="ml-2">Digital Marketing</span>
      </div>
      <div className="flex flex-row items-center my-2 lg:my-0">
        <div className="bg-primary-500/10 p-2 rounded-md">
          <Cpu className="w-5 h-5 text-primary-500" />
        </div>
        <span className="ml-2">Artificial Intelligence</span>
      </div>
    </div>
  );
}

export default SkillBar;
