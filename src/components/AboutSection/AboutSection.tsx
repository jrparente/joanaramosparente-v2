// import profileImage from "../../assets/images/joana-parente-small.jpg";

import {
  ArrowDown,
  CloudCog,
  Download,
  ExternalLink,
  FolderCog,
} from "lucide-react";
import Button from "../ui/Button";
import { marketingSkills, technicalSkills } from "../../data/constants";

function AboutSection() {
  return (
    <section className="min-h-screen" id="about">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center px-5 xs:px-10 sm:px-12 md:px-24 py-24">
        <h2 className="text-2xl sm:text-4xl font-extrabold pb-1.5 sm:pb-3">
          About Me
        </h2>
        <div className=" flex flex-col justify-center items-start lg:flex-row lg:items-center gap-8">
          <article className="w-full">
            <p>
              <span className="font-semibold">Full-Stack Web Developer</span>,
              specializing in the MERN stack, with{" "}
              <a
                href="https://www.linkedin.com/in/joanaparente/#experience"
                target="_blank"
                rel="noopener noreferrer"
                className="link inline-flex items-center gap-1"
                aria-label="Check out my professional experience in my LinkedIn profile"
              >
                <span>over 10 years of professional experience</span>
                <ExternalLink className="w-3 h-3" />
              </a>{" "}
              as an Account and Business Manager in the Internet sector.
            </p>
            <p>
              Skilled in business management, sales, e-commerce, and digital
              marketing. I'm a dedicated lifelong learner passionate about
              problem-solving, technology, and continuous professional
              development.
            </p>
            <p>
              In 2022, I took the initiative to master front-end development
              independently. I successfully completed courses from Scrimba,
              SheCodes and freeCodeCamp, earning{" "}
              <a
                href="https://www.linkedin.com/in/joanaparente/#licenses_and_certifications"
                target="_blank"
                rel="noopener noreferrer"
                className="link inline-flex items-center gap-1"
                aria-label="View my certificates in my LinkedIn profile"
              >
                <span>certificates</span>
                <ExternalLink className="w-3 h-3" />
              </a>{" "}
              and completing{" "}
              <a
                href="/#projects"
                className="link inline-flex items-center gap-1"
                aria-label="Check out my personal projects"
              >
                <span>personal projects</span>
                <ArrowDown className="w-3 h-3" />
              </a>{" "}
              that attest to my knowledge of HTML, CSS, JavaScript and React.
            </p>

            <p>
              In 2024, I took things further and completed the{" "}
              <span className="font-semibold">
                MIT xPRO - Professional Certificate in Coding: Full Stack
                Development with MERN
              </span>
              , a rigorous program covering:
              <ul>
                <li className="ml-4 md:ml-8 list-disc">
                  <span className=" flex items-center gap-1 flex-wrap">
                    <span className="font-semibold">Foundational skills:</span>{" "}
                    Computer Science Foundations and real-world architecture
                    principles.
                  </span>
                </li>
                <li className="ml-4 md:ml-8 list-disc">
                  <span className=" flex items-center gap-1 flex-wrap">
                    <span className="font-semibold">Front-end expertise:</span>{" "}
                    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 no-underline font-mono">
                      <img
                        src="./react-logo.svg"
                        alt="React logo"
                        aria-label="React logo"
                        className="!mr-1"
                        width="14"
                        height="14"
                      />
                      React
                    </span>{" "}
                    and
                    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 no-underline font-mono">
                      <img
                        src="./nextjs.svg"
                        alt="NextJS logo"
                        aria-label="NextJS logo"
                        className="!mr-1"
                        width="14"
                        height="14"
                      />
                      NextJS
                    </span>
                  </span>
                </li>
                <li className="ml-4 md:ml-8 list-disc">
                  <span className=" flex items-center gap-1 flex-wrap">
                    <span className="font-semibold">Back-end proficiency:</span>{" "}
                    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 no-underline font-mono">
                      <img
                        src="./mongodb.svg"
                        alt="MongoDB logo"
                        aria-label="MongoDB logo"
                        className="!mr-1"
                        width="14"
                        height="14"
                      />
                      MongoDB
                    </span>
                    ,
                    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 no-underline font-mono">
                      <img
                        src="./expressjs.svg"
                        alt="expressjs logo"
                        aria-label="expressjs logo"
                        className="!mr-1"
                        width="14"
                        height="14"
                      />
                      ExpressJS
                    </span>{" "}
                    and{" "}
                    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 no-underline font-mono">
                      <img
                        src="./nodejs.svg"
                        alt="nodejs logo"
                        aria-label="nodejs logo"
                        className="!mr-1"
                        width="14"
                        height="14"
                      />
                      NodeJS
                    </span>
                  </span>
                </li>
                <li className="ml-4 md:ml-8 list-disc">
                  <span className=" flex items-center gap-1 flex-wrap">
                    <span className="font-semibold">
                      Extended Technologies:
                    </span>{" "}
                    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 no-underline font-mono">
                      <img
                        src="./docker.svg"
                        alt="docker logo"
                        aria-label="docker logo"
                        className="!mr-1"
                        width="14"
                        height="14"
                      />
                      Docker
                    </span>
                    ,{" "}
                    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 no-underline font-mono">
                      <img
                        src="./graphql.svg"
                        alt="graphql logo"
                        aria-label="graphql logo"
                        className="!mr-1"
                        width="14"
                        height="14"
                      />
                      GraphQL
                    </span>
                    ,{" "}
                    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 no-underline font-mono">
                      <CloudCog className="inline-flex mr-1 w-4 h-4" />
                      Cloud Computing
                    </span>
                    ,{" "}
                    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 no-underline font-mono">
                      <FolderCog className="inline-flex mr-1 w-4 h-4" />
                      Testing
                    </span>
                    ,{" "}
                    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 no-underline font-mono">
                      <img
                        src="./devops.svg"
                        alt="devops logo"
                        aria-label="devops logo"
                        className="!mr-1"
                        width="41"
                        height="14"
                      />
                      DevOps
                    </span>
                  </span>
                </li>
              </ul>
            </p>

            <p>
              Today, I work as a{" "}
              <span className="font-semibold">
                freelance web developer and digital consultant
              </span>
              , helping clients build their online presence and achieve their
              business goals. I’m also open to{" "}
              <span className="font-semibold">
                part-time or project-based roles
              </span>
              with teams that value thoughtful, clean, and scalable development.
            </p>

            <article className="space-y-4">
              <h3 className="text-lg font-semibold">Key Skills</h3>
              <div className="flex flex-wrap justify-start items-center gap-4">
                {technicalSkills.concat(marketingSkills).map((skill, index) => (
                  <span
                    key={index}
                    className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
            <a href="/Joana_Parente_Resume.pdf" download>
              <Button
                className="mt-10 flex items-center gap-2"
                aria-label="Resume"
              >
                <Download /> Resume
              </Button>
            </a>
          </article>
          {/* <figure className="w-full md:w-4/5 md:self-center flex justify-center">
          <img
            src={profileImage}
            alt="Joana Parente, a Full-Stack Developer based in Portugal"
            className="rounded-lg object-cover"
          />
        </figure> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
