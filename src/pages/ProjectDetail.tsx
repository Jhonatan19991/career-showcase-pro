
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, Download } from "lucide-react";

// Mock project data - in a real app, this would come from an API or CMS
const projectData = {
  1: {
    title: "Real-time Data Pipeline Architecture",
    date: "December 2024",
    shortDescription: "Built scalable ETL pipeline processing 1M+ daily transactions with 99.9% uptime.",
    fullDescription: `This project involved designing and implementing a comprehensive real-time data pipeline architecture to handle high-volume transaction data for a fintech company. The system processes over 1 million transactions daily with strict requirements for data accuracy, real-time processing, and fault tolerance.

The architecture leverages Apache Kafka for real-time streaming, Apache Spark for distributed processing, and PostgreSQL for data storage. The entire system is containerized using Docker and deployed on AWS infrastructure with auto-scaling capabilities.

Key achievements include reducing data processing latency from hours to seconds, implementing robust error handling and data quality checks, and achieving 99.9% system uptime through comprehensive monitoring and alerting.`,
    technologies: ["Python", "Apache Spark", "Kafka", "PostgreSQL", "Docker", "AWS", "Terraform", "Prometheus"],
    challenges: [
      "Handling peak loads of 10,000+ transactions per second",
      "Ensuring data consistency across distributed systems",
      "Implementing real-time fraud detection capabilities",
      "Maintaining system performance during traffic spikes"
    ],
    solutions: [
      "Implemented horizontal scaling with Kubernetes orchestration",
      "Used distributed consensus algorithms for data consistency",
      "Integrated ML models for real-time anomaly detection",
      "Deployed auto-scaling policies based on queue depth metrics"
    ],
    results: [
      "75% reduction in data processing time",
      "99.9% system uptime achieved",
      "50% reduction in infrastructure costs",
      "Real-time fraud detection with 95% accuracy"
    ],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
    ],
    githubUrl: "https://github.com/jmorales/realtime-pipeline",
    demoUrl: "https://pipeline-demo.jmorales.dev",
    blogUrl: "https://blog.jmorales.dev/realtime-pipeline-architecture",
    artifacts: [
      { name: "Architecture Diagram", type: "PDF", url: "#" },
      { name: "Performance Benchmarks", type: "Excel", url: "#" },
      { name: "Code Samples", type: "ZIP", url: "#" }
    ]
  },
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

      {/* Content Sections */}
      <section className="py-16 bg-gray-50">
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
