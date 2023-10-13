import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function ProjectsSection() {
  const projectsData = projects;

  return (
    <section
      className="min-h-screen px-5 xs:px-10 sm:px-12 md:px-24 py-24"
      id="projects"
    >
      <h2 className="text-2xl sm:text-4xl text-gray-900 font-extrabold pb-1.5 sm:pb-3">
        What I've been up to
      </h2>
      <div className="flex flex-col justify-center items-start lg:flex-row lg:items-center gap-8">
        <article className="w-full">
          <p className="text-sm sm:text-base text-gray-600 font-medium pb-4 sm:pb-10">
            Below are some of the projects that best represent my skills and
            experiences in web development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectsSection;
