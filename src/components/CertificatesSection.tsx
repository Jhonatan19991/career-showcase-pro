import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Building } from "lucide-react";

const certificates = [
  {
    title: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    date: "May 2025",
    type: "certification",
    color: "bg-orange-100 text-orange-800 border-orange-200",
    url: "https://credentials.databricks.com/34481c4c-e049-426c-9588-34edffb1e3aa#acc.RCkBi3up" // ← replace with your actual cert URL
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "March 2025",
    type: "certification",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    url: "https://learn.microsoft.com/en-us/users/jhonatanstevenmoraleshernandez-4646/credentials/e526add65743d686?ref=https%3A%2F%2Fwww.linkedin.com%2F" // ← replace with your actual cert URL
  },
  {
    title: "Academy Accreditation – Databricks Fundamentals",
    issuer: "Databricks",
    date: "May 2025",
    type: "certification",
    color: "bg-orange-100 text-orange-800 border-orange-200",
    url: "https://credentials.databricks.com/0e26eafa-c2ea-41bb-9240-8731ac66dfd4#acc.Zwh9PV87" // ← replace with your actual cert URL
  },
  {
    title: "Academic Excellence Award",
    issuer: "Universidad Autónoma de Occidente",
    date: "May 2024",
    type: "award",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    description: "Highest GPA in the program",
    url: "https://www.youtube.com/live/TIcR-FuruHA?si=Dl_4Fepf2VHVPsHk&t=2180" // ← replace with your YouTube link
  }
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certificates & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and academic achievements that demonstrate my expertise and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:shadow-lg transition-shadow duration-300"
            >
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Award className="h-6 w-6 text-blue-600" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${cert.color} font-medium`}
                      >
                        {cert.type === "award" ? "Award" : "Certification"}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    
                    {cert.description && (
                      <p className="text-gray-700 font-medium pt-2">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
