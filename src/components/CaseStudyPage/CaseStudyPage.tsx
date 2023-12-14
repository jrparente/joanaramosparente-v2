import { ExternalLink, Github } from "lucide-react";
import { Project } from "../../types/types";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";

interface CaseStudyPageProps {
  project: Project;
}

function CaseStudyPage({ project }: CaseStudyPageProps) {
  return (
    <>
      <section className="min-h-screen mt-20 md:mt-24 space-y-8">
        <header className="max-w-screen-xl mx-auto px-5 xs:px-10 sm:px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 items-start md:items-end">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-base text-gray-600 font-normal">Case Study</h1>
            <span className="text-4xl text-gray-900 font-extrabold ">
              {project.name}
            </span>
            {project.tagline && (
              <span className="text-base text-gray-600 ">
                {project.tagline}
              </span>
            )}
            <div className="flex items-center flex-wrap gap-2">
              {project.status && (
                <span
                  className={`text-xs uppercase font-mono text-gray-700 bg-gray-100 px-2 py-1 inline-block rounded ${
                    project.status === "Building..."
                      ? "bg-yellow-100 text-yellow-700"
                      : project.status === "On Hold"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {project.status}
                </span>
              )}
              {project.isFeatured && (
                <span className="text-xs uppercase font-mono text-primary-700 bg-primary-100 px-2 py-1 inline-block rounded">
                  Featured
                </span>
              )}
              {project.type === "Client Project" ? (
                <span className="text-xs uppercase font-mono text-gray-700 bg-gray-100 px-2 py-1 inline-block rounded my-0">
                  Client Project
                </span>
              ) : (
                <span className="text-xs uppercase font-mono  text-gray-700 bg-gray-100 px-2 py-1 inline-block rounded my-0">
                  Personal Project
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:items-end items-start gap-2 md:ml-auto mt-2 md:mt-0">
            <span className=" text-gray-600 font-semibold text-xs">
              Live Since: {project.date}
            </span>
          </div>
        </header>

        <article className="bg-gray-100 mb-12 w-full">
          <div className="max-w-screen-xl mx-auto px-5 xs:px-10 sm:px-12 md:px-24 grid grid-cols-1 lg:grid-cols-6 gap-8">
            <aside className="col-span-6 lg:col-span-2 lg:row-span-2 py-6 lg:order-2  flex items-center justify-center">
              <div className="screen-custom">
                <div
                  className="viewport"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>
            </aside>

            <section className="col-span-6 lg:col-span-4 pt-6 lg:order-1">
              <h2 className="text-xl font-semibold">Description</h2>
              <span className="text-base text-gray-700">
                {project.description}
              </span>
              {project.problemStatement && (
                <>
                  <h2 className="text-xl font-semibold mt-6">
                    Problem Statement
                  </h2>
                  <span className="text-base text-gray-700">
                    {project.problemStatement}
                  </span>
                </>
              )}
              {project.role && (
                <>
                  <h2 className="text-xl font-semibold mt-6">Role: </h2>
                  <span className="text-base text-gray-700">
                    {project.role}
                  </span>
                </>
              )}
            </section>

            <section className="col-span-6 lg:col-span-4 pb-6  lg:order-3">
              <ul className="flex flex-wrap text-xs rounded text-gray-600 gap-x-2 gap-y-2 font-mono mb-4">
                {project.techstack.map((tech) => (
                  <li key={tech} className="bg-gray-200 px-2 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <section className="w-full flex flex-wrap gap-4 max-w-screen-xl mx-auto px-5 xs:px-10 sm:px-12 md:px-24">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <div className="flex gap-2 items-center">
                  <Github className="w-4 h-4" /> Frontend Repository
                </div>
              </Button>
            </a>
          )}
          {project.links.backend && (
            <a
              href={project.links.backend}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <div className="flex gap-2 items-center">
                  <Github className="w-4 h-4" /> Backend Repository
                </div>
              </Button>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <div className="flex gap-2 items-center">
                  <ExternalLink className="w-4 h-4" />{" "}
                  {project.live
                    ? "Live Website"
                    : project.isDemo && "Demo Website"}
                </div>
              </Button>
            </a>
          )}
        </section>

        <section className="max-w-screen-xl mx-auto px-5 xs:px-10 sm:px-12 md:px-24 grid grid-cols-1 lg:grid-cols-6 gap-8">
          <div className="col-span-6 py-6">
            {[
              { title: "Features", content: project.features },
              { title: "Code Highlights", content: project.codeHighlights },
              {
                title: "Challenges and Learnings",
                content: project.challengesAndLearnings,
              },
            ].map((section, idx) => (
              <div key={idx} className="mb-8">
                <p className="text-2xl font-bold mb-4 text-gray-900">
                  {section.title}
                </p>
                {section.content?.map((item, index) => {
                  const [accordionTitle, accordionContent] = item.split(": ");
                  return (
                    <Accordion key={index} title={accordionTitle}>
                      {accordionContent}
                    </Accordion>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default CaseStudyPage;
