
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ProjectContent } from "@/components/project/ProjectContent";
import { ProjectArtifacts } from "@/components/project/ProjectArtifacts";

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
      "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/page/1/0.png",
      "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/page/1/1.png",
      "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/page/1/2.png",
    ],
    githubUrl: "https://github.com/Jhonatan19991/Worshop1",
    demoUrl: "",
    blogUrl: "",
    artifacts: [
      { name: "DashBoard", type: "PowerBi", url: "https://github.com/Jhonatan19991/images/blob/main/page/1/0.png" },
    ]
  },
  2: {
    "id": 2,
    "title": "ETL - Workshop-02 - Spotify and Grammy Awards Data Process",
    "date": "June 2025",
    "shortDescription": "Built a modular ETL pipeline integrating Spotify and Grammy datasets using Airflow, PostgreSQL, and Power BI.",
    "fullDescription": "This project processes and analyzes two major datasets—Spotify Tracks and Grammy Awards—through a full ETL pipeline. Data was extracted from Kaggle sources, transformed using Python and pandas, and loaded into a PostgreSQL database. Airflow orchestrated the workflow through a DAG, while Google Drive API enabled exporting processed CSVs to the cloud.\n\nThe database was queried live from Power BI to generate a dashboard offering insights on song attributes and award trends. The project runs in a virtual Ubuntu environment on VirtualBox, and is fully documented for reproducibility.",
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
    "challenges": [
      "Combining and cleaning two heterogeneous datasets (Spotify and Grammy)",
      "Managing task dependencies and scheduling with Airflow DAGs",
      "Setting up PostgreSQL for external VM access",
      "Exporting data securely to Google Drive via API"
    ],
    "solutions": [
      "Wrote modular ETL scripts in Python using pandas and SQLAlchemy",
      "Created Airflow DAGs for orchestrated multi-source data pipelines",
      "Configured PostgreSQL and firewall settings for VM connectivity",
      "Used Google Drive API and service account for automated file uploads"
    ],
    "results": [
      "Integrated and stored two large datasets into a relational PostgreSQL database",
      "Automated ETL process with Airflow running on a virtual machine",
      "Built an interactive Power BI dashboard based on live database queries",
      "CSV files with final outputs were uploaded to Google Drive successfully"
    ],
    "images": [
      "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/assets/Workflow2.png",
      "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/page/2/0.png"
    ],
    "githubUrl": "https://github.com/Jhonatan19991/Workshop-2",
    "demoUrl": "",
    "blogUrl": "",
    "artifacts": [
      {
        "name": "DashBoard",
        "type": "PowerBI",
        "url": "https://uao-my.sharepoint.com/:u:/g/personal/jhonatan_morales_uao_edu_co/EVMN1JxziyRDkHWR05eCBBMBulXWNpx0aMHF69z_3JxO1w?e=dYMbx9"
      }
    ]
  },
  3: {
    "id": 3,
    "title": "ETL - Workshop-03 - World Happiness Analysis and Prediction",
    "date": "June 2025",
    "shortDescription": "Designed a real-time ETL and prediction pipeline using Kafka, PostgreSQL, and scikit-learn to analyze global happiness trends.",
    "fullDescription": "This project analyzes World Happiness data (2015–2019) using an end-to-end ETL and predictive modeling workflow. The pipeline performs data extraction, transformation, and streaming using Apache Kafka. A trained regression model predicts happiness scores in real time, and results are stored in a PostgreSQL database.\n\nThe project was developed within a VirtualBox Ubuntu VM and deployed using Docker. It includes Jupyter notebooks for exploratory data analysis and model evaluation. Kafka consumers and producers were built to simulate real-time data flow, enabling dynamic insights into global happiness indicators.",
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
    "challenges": [
      "Processing and merging multi-year happiness datasets with different structures",
      "Implementing real-time data ingestion with Kafka producers and consumers",
      "Training and deploying a regression model for continuous streaming predictions",
      "Configuring PostgreSQL access from a virtual machine environment"
    ],
    "solutions": [
      "Standardized and cleaned datasets from 2015 to 2019 using pandas transformations",
      "Set up Kafka pipeline with producers sending data and consumers handling predictions",
      "Trained a machine learning model using scikit-learn and integrated it into the stream",
      "Used Docker and VirtualBox for isolated, reproducible development and deployment"
    ],
    "results": [
      "Built a fully working streaming ETL pipeline from CSV ingestion to live prediction storage",
      "Achieved a model performance explaining 92% of the data variance (R² score)",
      "Enabled PostgreSQL-based storage of predictions for downstream use and visualization",
      "Demonstrated successful real-time data analysis capabilities in a containerized environment"
    ],
    "images": [
      "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/assets/Workflow3.png",
    ],
    "githubUrl": "https://github.com/Jhonatan19991/Workshop-3",
    "demoUrl": "",
    "blogUrl": "",
    "artifacts": [
      {
        "name": "Model & Notebooks",
        "type": "Jupyter",
        "url": ""
      }
    ]
  },
  4: {
    "id": 4,
    "title": "ETL - Cardiovascular Health and Mortality Streaming Analysis",
    "date": "June 2025",
    "shortDescription": "Developed a real-time ETL and analytics pipeline using Airflow, Kafka, and PostgreSQL to analyze cardiovascular health and global mortality data.",
    "fullDescription": "This project integrates two datasets—Cardio Train and global cause of deaths—to analyze patterns in cardiovascular disease. A full ETL pipeline was built using Apache Airflow to extract, transform, and load the data into a PostgreSQL database structured in a dimensional model. Kafka streams real-time metrics from the fact table to a Power BI dashboard, and a Python application acts as a consumer for streaming data.\n\nThe entire system is dockerized for reproducible deployment and was developed inside a virtual machine running Ubuntu. The project also includes data validation workflows using Great Expectations and exploratory data analysis through Jupyter Notebooks.",
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
    "challenges": [
      "Merging health data with mortality data from different sources and formats",
      "Coordinating ETL tasks using Airflow in a Dockerized environment",
      "Implementing real-time data streaming between PostgreSQL and Power BI using Kafka",
      "Ensuring data quality across different pipeline stages"
    ],
    "solutions": [
      "Built a dimensional model combining structured datasets with standardized schemas",
      "Designed DAGs in Airflow to automate and monitor ETL processes",
      "Developed a Python Kafka consumer to feed real-time metrics into Power BI",
      "Applied data validation using Great Expectations for quality assurance"
    ],
    "results": [
      "Delivered a working end-to-end ETL pipeline with real-time streaming capabilities",
      "Enabled real-time dashboard updates via Kafka and Power BI integration",
      "Improved data consistency through validation and logging tools",
      "Deployed the system across environments using Docker and Ubuntu"
    ],
    "images": [
      "https://raw.githubusercontent.com/caroldvarela/images/refs/heads/main/Project-etl.png",
      "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/dashboard.png"
    ],
    "githubUrl": "https://github.com/Jhonatan19991/end-to-end-project",
    "demoUrl": "",
    "blogUrl": "",
    "artifacts": [
      {
        "name": "Documentation",
        "type": "PDF",
        "url": ""
      }
    ]
  },
  5:{
  "id": 5,
  "title": "⚽ Video Ball Tracker & Goal Scoring System",
  "date": "June 2025",
  "shortDescription": "Computer vision system to detect goals and score futsal shots using YOLOv11 and OpenCV, with a web app for player feedback.",
  "fullDescription": "This project analyzes futsal match videos using a YOLOv11-based model to detect the ball and goal in each frame. The system tracks the ball when detection fails and overlays visual annotations like bounding boxes, object labels, and a 3x3 goal grid for shot scoring. The final score is calculated based on where the ball enters the goal.\n\nA web application was also developed, allowing players or coaches to upload videos and automatically receive feedback on scoring and shot accuracy. This solution aims to enhance the Massey Futsal Shooting Test evaluation process.",
  "technologies": [
    "Python",
    "OpenCV",
    "NumPy",
    "YOLOv11",
    "PyTorch",
    "Ultralytics",
    "Flask",
    "HTML/CSS",
    "Docker"
  ],
  "challenges": [
    "Detecting fast-moving balls in low-resolution frames",
    "Tracking the ball accurately when detection fails",
    "Mapping ball positions to a dynamic 3x3 goal grid",
    "Deploying a user-friendly interface for video uploads and feedback"
  ],
  "solutions": [
    "Trained YOLOv11 model with custom datasets for futsal ball and goal detection",
    "Used OpenCV's CSRT tracker for ball tracking across missed frames",
    "Implemented logic to compute shot score from ball's entry into goal grid zones",
    "Built a Flask-based web platform for users to upload videos and get scoring results"
  ],
  "results": [
    "Generated annotated videos with visual insights and goal scoring",
    "Enabled accurate evaluation of futsal shooting tests",
    "Delivered a working end-to-end analysis and feedback platform",
    "Improved accessibility by allowing players to analyze their own performance via the web"
  ],
  "images": [
    "https://www.researchgate.net/profile/Ajmol-Ali/publication/291516917/figure/fig1/AS:324798317121536@1454449361371/Schematic-representation-of-the-Massey-Futsal-Shooting-Test-MFST.png"
  ],
  "githubUrl": "https://github.com/Jhonatan19991/Analisis-del-Rendimiento-en-Jugadores-de-Futsal-Utilizando-Vision-Computacional",
  "demoUrl": "https://futsal-shot-seeker.lovable.app/", 
  "blogUrl": "",
  "artifacts": [
    {
      "name": "Page",
      "type": "Page",
      "url": "https://futsal-shot-seeker.lovable.app/"
    }
  ]
},
6: {
  "id": 6,
  "title": "🏠 Housing Retail Pipeline with Airflow and Azure",
  "date": "June 2025",
  "shortDescription": "Hybrid ETL pipeline for housing retail data using Apache Airflow and Azure Data Factory, with Databricks for scalable processing and analysis.",
  "fullDescription": "This project implements an automated data pipeline for extracting, transforming, and analyzing housing retail data. The architecture combines local development using Apache Airflow with cloud orchestration via Azure Data Factory. Data is processed using Azure Databricks notebooks, enabling scalable transformations and exploratory data analysis (EDA).\n\nThe pipeline integrates data from various sources, performs data quality checks, and generates insights using visualizations. It supports both batch and streaming data processing scenarios and provides monitoring, scheduling, and lineage tracking through Azure services.",
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
    "Azure SDK",
    "Jupyter"
  ],
  "challenges": [
    "Coordinating hybrid orchestration between local and cloud environments",
    "Ensuring data consistency and validation across stages",
    "Optimizing Databricks transformations for large-scale datasets",
    "Managing secure connections and credentials across Azure services"
  ],
  "solutions": [
    "Built modular DAGs in Airflow for local development and testing",
    "Used ADF pipelines to schedule and manage cloud workflows",
    "Integrated Databricks notebooks for scalable ETL and EDA tasks",
    "Configured Azure Key Vault and Storage for secure access and data persistence"
  ],
  "results": [
    "Achieved seamless integration between local and cloud data workflows",
    "Automated ingestion and transformation of housing retail data",
    "Enabled scalable and interactive data analysis through Databricks",
    "Improved visibility into data operations using monitoring tools in ADF"
  ],
  "images": [
    "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/Housing-images/housing.drawio.png",
    "https://raw.githubusercontent.com/Jhonatan19991/images/refs/heads/main/Housing-images/ADF-PipeLine.png"
  ],
  "githubUrl": "https://github.com/Jhonatan19991/housing-retail-pipeline",
  "demoUrl": "",
  "blogUrl": "",
  "artifacts": [
    {
      "name": "Architecture Diagram",
      "type": "Image",
      "url": "https://learn.microsoft.com/en-us/azure/architecture/example-scenario/dataplate/data-pipeline-with-azure-data-factory/media/architecture-diagram.png"
    }
  ]
}


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
      <ProjectHero project={project} />
      <ProjectGallery images={project.images || []} title={project.title} />
      <ProjectContent project={project} />
      <ProjectArtifacts artifacts={project.artifacts || []} />
    </div>
  );
};

export default ProjectDetail;
