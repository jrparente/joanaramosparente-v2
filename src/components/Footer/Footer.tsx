import { GithubIcon } from "lucide-react";
import { socialMedia } from "../../data/constants";

function Footer() {
  return (
    <footer>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="max-w-screen-xl mx-auto py-4 px-5 xs:px-10 sm:px-12 md:px-24 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Designed and coded by me. Code is publicly available on{" "}
            <a
              href="https://github.com/jrparente/joanaramosparente-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900"
            >
              <GithubIcon className="inline-flex mr-1 w-4 h-4" />
              GitHub
            </a>
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {socialMedia.map((route, index) => (
              <a
                href={route.href}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                key={index}
              >
                <route.icon className="w-4 h-4" fill="currentColor" />
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
