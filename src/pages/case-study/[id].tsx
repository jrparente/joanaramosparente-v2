import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import CaseStudyPage from "../../components/CaseStudyPage";

const ProjectCaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return <CaseStudyPage project={project} />;
};

export default ProjectCaseStudy;
