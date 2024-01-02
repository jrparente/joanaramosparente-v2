import profileImage from "../../assets/images/joana-parente-small.jpg";
import { socialMedia } from "../../data/constants";

function Bio() {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center gap-6 my-12 px-3">
      <div className="flex flex-col items-center justify-center gap-3">
        <img
          src={profileImage}
          alt="Joana Ramos Parente"
          className="w-32 rounded-full"
        />
        <span className="uppercase text-xl font-thin tracking-widest">
          Joana Parente
        </span>
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm font-mono bg-primary-600/10 border border-primary-600 text-primary-600 px-2 py-1">
            Fullstack Developer
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <a
          href="/"
          className="relative font-light text-center py-4 px-3 text-sm tracking-widest rounded-md no-underline border border-solid border-neutral-400 hover:border-neutral-500 bg-neutral-100 dark:border-[#2D2D2D] dark:hover:border-[#4C4C4C] dark:bg-[#1C1C1C] shadow-sm dark:shadow-md"
        >
          Website
        </a>
        {socialMedia.map((route) => (
          <a
            key={route.href}
            href={route.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative font-light text-center py-4 px-3 text-sm tracking-widest rounded-md no-underline border border-solid border-neutral-400 hover:border-neutral-500 bg-neutral-100 dark:border-[#2D2D2D] dark:hover:border-[#4C4C4C] dark:bg-[#1C1C1C] shadow-sm dark:shadow-md"
          >
            {route.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Bio;
