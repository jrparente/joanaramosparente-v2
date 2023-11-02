import { useEffect, useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

function ProjectsSection() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterTechStackOpen, setFilterTechStackOpen] = useState(false);
  const [filterCategoryOpen, setFilterCategoryOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [isCaseStudy, setIsCaseStudy] = useState(false);

  const allCategories = projects.reduce((categories, project) => {
    project.categories.forEach((category) => categories.add(category));
    return categories;
  }, new Set());

  const uniqueCategories = Array.from(allCategories);

  const allTechnologies = projects.reduce((mainTechnologies, project) => {
    project.mainTechnologies.forEach((category) =>
      mainTechnologies.add(category)
    );
    return mainTechnologies;
  }, new Set());

  const uniqueTechnologies = Array.from(allTechnologies);

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

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((project) =>
        project.categories.some((category) =>
          selectedCategories.includes(category)
        )
      );
    }

    // Sort by featured
    filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));

    setFilteredProjects(filtered);
  }, [selectedTech, selectedCategories, isLive, isCaseStudy]);

  function handleFilterByTechStack() {
    setFilterTechStackOpen((prev) => !prev);
  }

  function handleFilterByCategory() {
    setFilterCategoryOpen((prev) => !prev);
  }

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
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

          <div className="flex flex-row flex-wrap items-center justify-end gap-2">
            <div className="relative">
              <Button onClick={handleFilterByCategory}>
                Filter by Category
                <ChevronDown className="w-4 h-4 ml-2.5" />
              </Button>
              <div
                id="dropdownDefaultCheckbox"
                className={`z-10 w-64 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-12 right-0
              ${filterCategoryOpen ? "" : "hidden"}`}
              >
                <ul
                  className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownCheckboxButton"
                >
                  {uniqueCategories.map((category) => (
                    <li key={category as string}>
                      <div className="flex items-center">
                        <input
                          id={`${category}Checkbox`}
                          type="checkbox"
                          className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                          onChange={() => toggleCategory(category as string)}
                        />
                        <label
                          htmlFor={`${category}Checkbox`}
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {category as string}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <Button onClick={handleFilterByTechStack}>
                Filter by Technology
                <ChevronDown className="w-4 h-4 ml-2.5" />
              </Button>
              <div
                id="dropdownDefaultCheckbox"
                className={`z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-12 right-0
              ${filterTechStackOpen ? "" : "hidden"}`}
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
                    <hr />
                  </li>
                  {uniqueTechnologies.map((tech) => (
                    <li>
                      <div className="flex items-center">
                        <input
                          id={`${tech}Checkbox`}
                          type="checkbox"
                          className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                          onChange={() => toggleTech(tech as string)}
                        />
                        <label
                          htmlFor={`${tech}Checkbox`}
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {tech as string}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
