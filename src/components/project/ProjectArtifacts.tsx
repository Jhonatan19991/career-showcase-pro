
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

interface ProjectArtifactsProps {
  artifacts: Array<{
    name: string;
    type: string;
    url: string;
  }>;
}

export const ProjectArtifacts = ({ artifacts }: ProjectArtifactsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Download Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {artifacts.map((artifact, index) => (
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
  );
};
