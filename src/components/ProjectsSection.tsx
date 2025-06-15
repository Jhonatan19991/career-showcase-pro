
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Real-time Data Pipeline Architecture",
    date: "December 2024",
    description: "Built scalable ETL pipeline processing 1M+ daily transactions with 99.9% uptime. Reduced data processing time by 75% using Apache Spark and Kafka.",
    technologies: ["Python", "Apache Spark", "Kafka", "PostgreSQL", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Machine Learning Prediction System",
    date: "November 2024",
    description: "Developed ML model for customer churn prediction achieving 92% accuracy. Deployed using MLOps best practices with automated retraining.",
    technologies: ["Python", "TensorFlow", "MLflow", "Azure ML", "FastAPI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Cloud Data Warehouse Migration",
    date: "October 2024",
    description: "Led migration of legacy on-premise data warehouse to cloud, improving query performance by 10x and reducing infrastructure costs by 40%.",
    technologies: ["SQL", "Azure Synapse", "Power BI", "Terraform", "Python", "Airflow"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
  },
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
