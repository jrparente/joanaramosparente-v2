import { Linkedin, Github } from "lucide-react";

const socialMedia = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joanaparente/",
  },
  {
    icon: Github,
    label: "Github",
    href: "https://github.com/jrparente",
  },
];

function Footer() {
  return (
    <footer>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="max-w-screen-xl mx-auto py-4 px-5 xs:px-10 sm:px-12 md:px-24 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Joana Parente
            </a>
            . All Rights Reserved.
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
