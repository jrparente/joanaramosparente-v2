import { GithubIcon } from "lucide-react";
import { socialMedia } from "../../data/constants";

function Footer() {
  return (
    <footer className="bg-primary-950 py-5">
      <div className="max-w-screen-xl mx-auto py-4 px-5 xs:px-10 sm:px-12 md:px-24">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            <span className="text-white">
              Designed and coded by me. Code is publicly available on{" "}
            </span>
            <a
              href="https://github.com/jrparente/joanaramosparente-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 inline-flex items-center leading-4 dark:text-neutral-100 no-underline hover:text-primary-500"
            >
              <GithubIcon className="inline-flex mr-1 w-4 h-4" />
              GitHub
            </a>
          </span>
          <div className="flex mt-8 space-x-5 sm:justify-center sm:mt-0">
            {socialMedia.map((route, index) => (
              <a
                href={route.href}
                key={index}
                className="hover:text-primary-500 text-white"
              >
                <route.icon className="w-5 h-5" />
                <span className="sr-only">{route.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
