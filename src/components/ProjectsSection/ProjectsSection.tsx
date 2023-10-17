import { useEffect, useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

function ProjectsSection() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [isCaseStudy, setIsCaseStudy] = useState(false);

  useEffect(() => {
    let filtered = [...projects];

    if (selectedTech.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTech.every((tech) => project.techstack.includes(tech))
      );
    }

    if (isLive) {
      filtered = filtered.filter((project) => project.isPublicRepository);
    }

    if (isCaseStudy) {
      filtered = filtered.filter((project) => project.iscasestudy);
    }

    // Sort by featured
    filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));

    setFilteredProjects(filtered);
  }, [selectedTech, isLive, isCaseStudy]);

  function handleFilterMenu() {
    setFilterMenuOpen((prev) => !prev);
  }

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <section
      className="max-w-screen-xl mx-auto min-h-screen px-5 xs:px-10 sm:px-12 md:px-24 py-24"
      id="projects"
    >
      <h2 className="text-2xl sm:text-4xl text-gray-900 font-extrabold pb-1.5 sm:pb-3">
        What I've been up to
      </h2>
      <div className="flex flex-col justify-center items-start lg:flex-row lg:items-center gap-8">
        <article className="w-full flex flex-col gap-8">
          <p>
            Below are some of the projects that best represent my skills and
            experiences in web development.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-end gap-2 relative">
            <Button onClick={handleFilterMenu}>
              Filter Projects
              <ChevronDown className="w-4 h-4 ml-2.5" />
            </Button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownDefaultCheckbox"
              className={`z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-12 right-0
              ${filterMenuOpen ? "" : "hidden"}`}
            >
              <ul
                className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownCheckboxButton"
              >
                <li>
                  <div className="flex items-center">
                    <input
                      id="publicrepositoryCheckbox"
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                      onChange={() => setIsLive(!isLive)}
                    />
                    <label
                      htmlFor="ispublicrepositoryCheckbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Public Repository
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      id="caseStudyCheckbox"
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                      onChange={() => setIsCaseStudy(!isCaseStudy)}
                    />
                    <label
                      htmlFor="caseStudyCheckbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Case Studies
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      id="reactCheckbox"
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                      onChange={() => toggleTech("React")}
                    />
                    <label
                      htmlFor="reactCheckbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      React
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      id="nextJsCheckbox"
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                      onChange={() => toggleTech("Next.js")}
                    />
                    <label
                      htmlFor="nextJsCheckbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Next.js
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      id="javascriptCheckbox"
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                      onChange={() => toggleTech("JavaScript")}
                    />
                    <label
                      htmlFor="javascriptCheckbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      JavaScript
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      id="typescriptCheckbox"
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                      onChange={() => toggleTech("TypeScript")}
                    />
                    <label
                      htmlFor="typescriptCheckbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      TypeScript
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      id="tailwindCheckbox"
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                      onChange={() => toggleTech("Tailwind CSS")}
                    />
                    <label
                      htmlFor="tailwindCheckbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Tailwind CSS
                    </label>
                  </div>
                </li>{" "}
                <li>
                  <div className="flex items-center">
                    <input
                      id="apisCheckbox"
                      type="checkbox"
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                      onChange={() => toggleTech("APIs")}
                    />
                    <label
                      htmlFor="apisCheckbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      APIs
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectsSection;
