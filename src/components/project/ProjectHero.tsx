
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

interface ProjectHeroProps {
  project: {
    title: string;
    date: string;
    shortDescription: string;
    githubUrl?: string;
    demoUrl?: string;
    blogUrl?: string;
  };
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
  const navigate = useNavigate();

  return (
    <>
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
    </>
  );
};
