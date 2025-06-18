
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
{
  id: 1,
  title: "ETL - Workshop-01 - Data Engineer Interview",
  date: "Aug 2024",
  description: "Built a modular ETL pipeline to process 50k+ candidate records using Python, PostgreSQL, and Power BI. Enabled real-time dashboarding and data normalization.",
  technologies: ["Python", "SQLAlchemy", "Jupyter", "PostgreSQL", "Power BI"],
  image: "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/page/1/0.png"
}
,
{
  "id": 2,
  "title": "ETL Pipeline: Spotify & Grammy Awards Data",
  "date": "Sep 2024",
  "description": "Designed and implemented a full ETL pipeline to integrate and analyze datasets from Spotify and the Grammy Awards. Built DAGs with Airflow for task orchestration, stored data in PostgreSQL, and automated reporting via Power BI. Also enabled CSV export to Google Drive using the Drive API.",
  "technologies": [
    "Python",
    "Apache Airflow",
    "PostgreSQL",
    "Google Drive API",
    "Power BI",
    "SQLAlchemy",
    "Jupyter",
    "VirtualBox",
    "Ubuntu"
  ],
  "image": "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/assets/Workflow2.png"
}
,
{
  "id": 3,
  "title": "ETL Pipeline: World Happiness Analysis and Prediction",
  "date": "Oct 2024",
  "description": "Built a real-time ETL and prediction system using World Happiness data (2015–2019), including EDA, model training, Kafka streaming, PostgreSQL storage, and deployment in a Dockerized Ubuntu VM.",
  "technologies": [
    "Python",
    "Apache Kafka",
    "PostgreSQL",
    "SQLAlchemy",
    "Jupyter",
    "scikit-learn",
    "Docker",
    "VirtualBox",
    "Ubuntu"
  ],
  "image": "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/assets/Workflow3.png"
},
{
  "id": 4,
  "title": "ETL Pipeline: Cardiovascular Health & Mortality Analysis",
  "date": "Nov 2024",
  "description": "Developed a dockerized ETL pipeline with Airflow, Kafka, and PostgreSQL to process health and mortality data, stream real-time metrics to Power BI, and validate data with Great Expectations in a Ubuntu VM",
  "technologies": [
    "Python",
    "Apache Kafka",
    "Apache Airflow",
    "PostgreSQL",
    "SQLAlchemy",
    "Jupyter",
    "Great Expectations",
    "Docker",
    "Power BI",
    "Ubuntu"
  ],
  "image": "https://raw.githubusercontent.com/caroldvarela/images/refs/heads/main/Project-etl.png"
},
{
  "id": 5,
  "title": "Video Ball Tracker & Goal Scoring System",
  "date": "June 2025",
  "description": "Built a YOLOv11-based computer vision system for futsal videos to detect balls/goals, track the ball, and score shots using a 3x3 goal grid, producing annotated videos for sports performance analysis.",
  "technologies": [
    "Python",
    "OpenCV",
    "NumPy",
    "YOLOv11",
    "PyTorch",
    "Ultralytics"
  ],
  "image": "https://www.researchgate.net/profile/Ajmol-Ali/publication/291516917/figure/fig1/AS:324798317121536@1454449361371/Schematic-representation-of-the-Massey-Futsal-Shooting-Test-MFST.png"
},
{
  "id": 6,
  "title": "Housing Retail Pipeline with Airflow and Azure",
  "date": "June 2025",
  "description": "Developed a hybrid data pipeline architecture for housing retail analytics using Apache Airflow for local orchestration and Azure Data Factory for cloud deployment, with Databricks integration for scalable ETL and EDA workflows.",
  "technologies": [
    "Python",
    "Apache Airflow",
    "Azure Data Factory",
    "Azure Databricks",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "SQLAlchemy",
    "Azure SDK"
  ],
  "image": "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/Housing-images/housing.drawio.png"
}




];

export const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleViewProject = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing data engineering solutions that drive business impact through 
            innovative technology and scalable architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.date}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-blue-200 text-blue-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  onClick={() => handleViewProject(project.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700 transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
