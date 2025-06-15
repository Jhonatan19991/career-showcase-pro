
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
  "Python", "SQL", "Apache Spark", "Kafka", "Airflow", "AWS", "Azure", 
  "Docker", "Kubernetes", "TensorFlow", "PostgreSQL", "MongoDB", "Redis",
  "Elasticsearch", "Terraform", "Git", "MLflow", "Power BI", "Snowflake"
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
                I'm a passionate Data Engineer with 5+ years of experience building 
                robust, scalable data infrastructure that powers data-driven decision making.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                My expertise spans the entire data engineering lifecycle - from designing 
                ETL pipelines and real-time streaming architectures to implementing ML 
                operations and cloud-native solutions. I thrive on solving complex data 
                challenges and turning raw data into valuable business insights.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not building data pipelines, you'll find me exploring the latest 
                in AI/ML technologies, contributing to open-source projects, or mentoring 
                aspiring data engineers.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
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
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-gray-600">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">1M+</div>
                    <div className="text-gray-600">Records Processed Daily</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">99.9%</div>
                    <div className="text-gray-600">System Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">5+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
