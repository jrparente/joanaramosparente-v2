import { Project } from "../../../types/types";
import Button from "../Button";
import { Github, ExternalLink, FileText } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className=" py-4 flex flex-col md:flex-row lg:flex-col gap-8">
      <div className="screen">
        {project.iscasestudy ? (
          <a href={`/case-study/${project.id}`}>
            <div
              className="viewport"
              style={{
                backgroundImage: `url('${project.image}')`,
              }}
            ></div>
          </a>
        ) : (
          <div
            className="viewport"
            style={{
              backgroundImage: `url('${project.image}')`,
            }}
          ></div>
        )}
      </div>
      <div>
        <div className="flex items-center flex-wrap gap-2">
          {project.status && (
            <span
              className={`text-xs uppercase font-mono text-gray-700 bg-gray-100  px-2 py-1 inline-block rounded ${
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
        <h3 className="text-2xl font-bold my-4">{project.name}</h3>
        <p className="text-sm mb-4 sm:text-base text-gray-600 dark:text-[#bbbbbb]">
          {project.shortDescription || project.description}
        </p>
        <ul className="flex flex-wrap text-xs rounded gap-x-2 gap-y-2 mb-4">
          {project.techstack.map((tech) => (
            <li
              key={tech}
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800  rounded p-1 text-sm inline-flex items-center leading-4 text-gray-500 dark:text-neutral-100 font-mono"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex items-center flex-wrap gap-2">
          {project.iscasestudy && (
            <a href={`/case-study/${project.id}`}>
              <Button>
                <div className="flex gap-2 items-center">
                  <FileText className="w-4 h-4" /> Case Study
                </div>
              </Button>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <div className="flex gap-2 items-center">
                  <Github className="w-4 h-4" /> GitHub
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
                    ? "Live Site"
                    : project.isDemo
                    ? "Demo site"
                    : "Live Site"}
                </div>
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
