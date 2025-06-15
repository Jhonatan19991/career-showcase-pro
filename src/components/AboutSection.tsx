
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Python & SQL", level: 95 },
  { name: "Apache Spark & Kafka", level: 90 },
  { name: "AWS & Azure", level: 85 },
  { name: "Machine Learning", level: 80 },
  { name: "Docker & Kubernetes", level: 85 },
  { name: "Apache Airflow", level: 90 },
];

const technologies = [
  "Azure (Data Factory, Databricks, Microsoft Fabric)",
  "AWS",
  "Apache Spark",
  "Apache Kafka",
  "Apache Airflow",
  "Python",
  "SQL",
  "Power BI",
  "DBT"
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="text-xl leading-relaxed mb-6">
                I'm Jhonatan Morales, a final‑semester student of Data Engineering and Artificial Intelligence at the Universidad Autónoma de Occidente. I'm passionate about turning raw data into practical, real‑world solutions and constantly exploring new technologies and methodologies
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Through various academic and personal projects, I've strengthened my skills in data analysis, pipeline design, and information processing—always striving to deliver clean, efficient, and scalable results.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/lovable-uploads/324ac4aa-b852-4d20-97cc-0bf6fe1f037d.png"
                  alt="Jhonatan Steven Morales"
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-default text-sm py-2 px-4"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
