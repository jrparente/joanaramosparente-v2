import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import CaseStudyPage from "../../components/CaseStudyPage";
import { Project } from "../../types/types";

const ProjectCaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return (
      <section className="min-h-screen mt-20 md:mt-24 space-y-8">
        <div className="max-w-screen-xl mx-auto px-5 xs:px-10 sm:px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 items-start md:items-end">
          Project not found.
        </div>
      </section>
    );
  }

  return <CaseStudyPage project={project as Project} />;
};

export default ProjectCaseStudy;
