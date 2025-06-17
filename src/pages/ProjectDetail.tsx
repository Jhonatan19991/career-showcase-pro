
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, Download, BarChart3 } from "lucide-react";

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


  // Add more projects as needed
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
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">{project.date}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {project.shortDescription}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {project.githubUrl && (
                <Button className="bg-gray-900 hover:bg-gray-800">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              )}
              {project.demoUrl && (
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {project.blogUrl && (
                <Button variant="outline">
                  Read Blog Post
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {project.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      {project.dashboards && project.dashboards.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Dashboards</h2>
                <p className="text-lg text-gray-600">
                  Interactive dashboards and analytics created for this project
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {project.dashboards.map((dashboard, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={dashboard.image} 
                        alt={dashboard.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          Dashboard
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {dashboard.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {dashboard.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Tools Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {dashboard.tools.map((tool) => (
                            <Badge key={tool} variant="secondary" className="text-sm">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Technologies */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-lg py-2 px-4">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Description */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <div className="prose prose-lg text-gray-600">
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenges, Solutions, Results */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-600 leading-relaxed">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions</h3>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="text-gray-600 leading-relaxed">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="text-gray-600 leading-relaxed">
                        • {result}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Downloadable Artifacts */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Download Resources</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {project.artifacts.map((artifact, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="h-auto p-4 flex flex-col items-start"
                    >
                      <div className="flex items-center mb-2">
                        <Download className="h-4 w-4 mr-2" />
                        <span className="font-medium">{artifact.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{artifact.type}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
