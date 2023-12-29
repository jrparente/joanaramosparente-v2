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
        <h2 className="text-2xl sm:text-4xl text-gray-900 font-extrabold pb-1.5 sm:pb-3">
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
                className="underline font-medium text-primary-900 hover:text-primary-700 inline-flex items-center gap-1"
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
              Between October 2022 and September 2023, I took the initiative to
              master front-end development independently. I successfully
              completed courses from Scrimba, SheCodes and freeCodeCamp, earning{" "}
              <a
                href="https://www.linkedin.com/in/joanaparente/#licenses_and_certifications"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium text-primary-900 hover:text-primary-700 inline-flex items-center gap-1"
              >
                <span>certificates</span>
                <ExternalLink className="w-3 h-3" />
              </a>{" "}
              and completing{" "}
              <a
                href="/#projects"
                className="underline font-medium text-primary-900 hover:text-primary-700 inline-flex items-center gap-1"
              >
                <span>personal projects</span>
                <ArrowDown className="w-3 h-3" />
              </a>{" "}
              that attest to my knowledge of HTML, CSS, JavaScript and React.
            </p>
            <p>
              At the moment, I am{" "}
              <span className="font-semibold">
                working as a freelance web developer and consultant
              </span>
              , helping clients build their online presence and achieve their
              business goals, while also{" "}
              <span className="font-semibold">
                looking for a full-time position as a web developer
              </span>
              .
            </p>
            <p>
              Currently enrolled in{" "}
              <span className="font-semibold">
                MIT xPRO - Professional Certificate in Coding: Full Stack
                Development with MERN
              </span>
              , ending in August 2024. The program covers:
              <ul>
                <li className="ml-8 list-disc">
                  <span className=" flex items-center gap-1 flex-wrap">
                    <span className="font-semibold">Foundational skills:</span>{" "}
                    Comprehensive understanding of computational thinking
                    principles.
                  </span>
                </li>
                <li className="ml-8 list-disc">
                  <span className=" flex items-center gap-1 flex-wrap">
                    <span className="font-semibold">Front-end expertise:</span>{" "}
                    Mastery of{" "}
                    <span className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900 font-mono">
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
                    <span className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900 font-mono">
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
                <li className="ml-8 list-disc">
                  <span className=" flex items-center gap-1 flex-wrap">
                    <span className="font-semibold">Back-end proficiency:</span>{" "}
                    In-depth knowledge of{" "}
                    <span className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900 font-mono">
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
                    <span className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900 font-mono">
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
                    <span className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900 font-mono">
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
                <li className="ml-8 list-disc">
                  <span className=" flex items-center gap-1 flex-wrap">
                    <span className="font-semibold">
                      Extended Technologies:
                    </span>{" "}
                    <span className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900 font-mono">
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
                    <span className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900 font-mono">
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
                    <span className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900 font-mono">
                      <CloudCog className="inline-flex mr-1 w-4 h-4" />
                      Cloud Computing
                    </span>
                    ,{" "}
                    <span className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900 font-mono">
                      <FolderCog className="inline-flex mr-1 w-4 h-4" />
                      Testing
                    </span>
                    ,{" "}
                    <span className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 no-underline hover:text-gray-900 font-mono">
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
            <article className="space-y-4">
              <h3 className="text-lg font-semibold">Key Skills</h3>
              <div className="flex flex-wrap justify-start items-center gap-4">
                {technicalSkills.concat(marketingSkills).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-800 rounded-full px-3 py-1 text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
            <a href="/Joana_Parente_Resume.pdf" download>
              <Button className="mt-10 flex items-center gap-2">
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
