
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next data engineering project? 
            I'd love to hear about your challenges and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="morales.hernandez.jhonatan00@gmail.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect with me
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/jhonatan-morales-3a2314267/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <Linkedin className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium text-gray-900">LinkedIn</div>
                      <div className="text-gray-600">Professional network</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/Jhonatan19991" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <Github className="h-6 w-6 text-gray-700 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium text-gray-900">GitHub</div>
                      <div className="text-gray-600">Code repositories</div>
                    </div>
                  </a>
                  
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Download My Resume
                </h3>
                <p className="mb-6 text-blue-100">
                  Get a comprehensive overview of my experience, skills, and achievements.
                </p>
                <Button 
                  onClick={handleDownloadCV}
                  variant="secondary" 
                  size="lg"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100"
                >
                  Download CV (PDF)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
