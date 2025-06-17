
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ProjectContent } from "@/components/project/ProjectContent";
import { ProjectArtifacts } from "@/components/project/ProjectArtifacts";

// Mock project data - in a real app, this would come from an API or CMS
const projectData = {
  1: {
    title: "ETL - Workshop-01 - Data Engineer Interview",
    date: "April 2024",
    shortDescription: "Designed an ETL pipeline to manage 50k+ candidate records, integrating PostgreSQL and Power BI.",
    fullDescription: `This project simulates a data engineer interview scenario where an end-to-end ETL process was implemented. The pipeline processes over 50,000 candidate records including personal information, experience level, applied position, and technical test scores.

The project uses Python and SQLAlchemy to normalize and store the data in a PostgreSQL database. Jupyter Notebooks were used for exploratory data analysis. Finally, Power BI was connected directly to the database to build interactive dashboards, allowing insights on candidate performance across different technologies and seniorities.

The workflow is modular and reusable, with environment configuration handled through a .env file and project dependencies managed via a virtual environment.`,
    technologies: ["Python", "Jupyter", "SQLAlchemy", "PostgreSQL", "Power BI"],
    challenges: [
      "Cleaning and transforming raw candidate data with missing values",
      "Designing normalized relational schemas for PostgreSQL",
      "Ensuring proper database connection and credential management",
      "Creating meaningful visuals with dynamic filtering in Power BI"
    ],
    solutions: [
      "Built transformation scripts in Python using pandas and SQLAlchemy",
      "Used .env files to securely manage PostgreSQL credentials",
      "Created modular ETL pipeline with separate folders for data, src, notebooks, and scripts",
      "Connected Power BI to PostgreSQL for real-time dashboarding"
    ],
    results: [
      "Successfully processed and stored 50k+ records in PostgreSQL",
      "Improved data clarity through normalization and transformation",
      "Built a functional Power BI dashboard based on live database connection",
      "Published clear documentation for setup, execution, and analysis"
    ],
    images: [
      "https://raw.githubusercontent.com/Jhonatan19991/Worshop1/main/img/workflow_diagram.png",
      "https://raw.githubusercontent.com/Jhonatan19991/Worshop1/main/img/dashboard_1.png",
      "https://raw.githubusercontent.com/Jhonatan19991/Worshop1/main/img/dashboard_2.png"
    ],
    githubUrl: "https://github.com/Jhonatan19991/Worshop1",
    demoUrl: "",
    blogUrl: "",
    artifacts: [
      { name: "ETL Source Code", type: "Python", url: "https://github.com/Jhonatan19991/Worshop1/tree/main/src" },
      { name: "Exploratory Analysis", type: "Notebook", url: "https://github.com/Jhonatan19991/Worshop1/tree/main/notebooks" },
      { name: "Dataset", type: "CSV", url: "https://github.com/Jhonatan19991/Worshop1/blob/main/data/candidates.csv" }
    ]
  }
};

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ProjectHero project={project} />
      <ProjectGallery images={project.images} title={project.title} />
      <ProjectContent project={project} />
      <ProjectArtifacts artifacts={project.artifacts} />
    </div>
  );
};

export default ProjectDetail;
