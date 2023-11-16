// import profileImage from "../../assets/images/joana-parente-small.jpg";

import { Download } from "lucide-react";
import Button from "../ui/Button";

const technicalSkills: string[] = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "NextJS",
  "SQL",
  "MongoDB",
  "Express.js",
  "Git",
];
const marketingSkills: string[] = [
  "SEO Best Practices",
  "Content Creation",
  "Social Media Strategy",
];

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
              Full-stack web developer, specializing in the MERN stack, with
              over 10 years of professional experience as an Account and
              Business Manager in the Internet sector.
            </p>
            <p>
              Skilled in business management, sales, e-commerce, and digital
              marketing. A dedicated lifelong learner passionate about
              problem-solving, technology, and continuous professional
              development.
            </p>
            <p>
              Currently enrolled in{" "}
              <span className="font-bold">
                MIT xPRO - Professional Certificate in Coding: Full Stack
                Development with MERN
              </span>
              , ending in August 2024. The program covers foundational web
              development skills, dives into front-end expertise with React, and
              solidifies back-end proficiency with MongoDB, ExpressJS, and
              NodeJS.
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
