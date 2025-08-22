import React from 'react';
import { Brain, Database, BarChart3, Microscope, Zap, FlaskConical, TrendingUp, GitBranch, Award, Home } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Neuroscience' | 'Data Analysis' | 'Machine Learning';
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  isIndependent?: boolean;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Single LIF Neuron Simulation',
    category: 'Neuroscience',
    description: 'Implemented a Leaky Integrate-and-Fire neuron model from scratch with spike detection and voltage plotting over time.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Mathematical Modeling'],
    icon: <Zap className="w-6 h-6" />,
    isIndependent: true,
    githubUrl: 'https://github.com/Nippani-Meghana/lif-neuron-simulation'
  },
  {
    id: '2',
    title: 'Pospischil Cortical Neuron Model',
    category: 'Neuroscience',
    description: 'Computational model exploring how valproate and lamotrigine alter cortical firing patterns. Menu-driven program with dosage analysis and summary statistics.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Computational Neuroscience'],
    icon: <Brain className="w-6 h-6" />,
    isIndependent: true,
    githubUrl: 'https://github.com/Nippani-Meghana/pospischil-rs-cortical-neuron'
  },
  {
    id: '3',
    title: 'Schizophrenia Prediction Model',
    category: 'Machine Learning',
    description: 'Predictive model using logistic regression to simulate schizophrenia prediction patterns with generated datasets.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    icon: <FlaskConical className="w-6 h-6" />,
    isIndependent: true,
    githubUrl: 'https://github.com/Nippani-Meghana/SchizoPredictor'
  },
  {
    id: '4',
    title: 'Retail Sales Analytics Tool',
    category: 'Data Analysis',
    description: 'Interactive Python tool for analyzing retail and menu data with comprehensive visual insights and business recommendations.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'SciPy', 'Data Visualization'],
    icon: <BarChart3 className="w-6 h-6" />,
    githubUrl: 'https://github.com/Nippani-Meghana/OIBSIP_NM/tree/main/EDA'
  },
  {
    id: '5',
    title: 'Twitter Sentiment Analysis',
    category: 'Machine Learning',
    description: 'NLP-powered sentiment analysis system using TF-IDF vectorization and machine learning techniques for social media data.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'Feature Engineering'],
    icon: <TrendingUp className="w-6 h-6" />,
    githubUrl: 'https://github.com/Nippani-Meghana/OIBSIP_NM/tree/main/Sentiment_Analysis'
  },
  {
    id: '6',
    title: 'Google Play Store Analytics',
    category: 'Data Analysis',
    description: 'Python-driven analytics dashboard uncovering market metrics and sentiment insights from Play Store data.',
    technologies: ['Python', 'EDA', 'Trend Analysis', 'Pandas', 'Matplotlib'],
    icon: <Database className="w-6 h-6" />,
    githubUrl:'https://github.com/Nippani-Meghana/OIBSIP_NM/tree/main/Google_Play_Store_Data'
  },
  {
    id: '7',
    title: 'Wine Quality Prediction',
    category: 'Machine Learning',
    description: 'Multi-algorithm approach using Random Forest, SGD, and SVC for wine quality assessment with comprehensive model evaluation.',
    technologies: ['Scikit-learn', 'Pandas', 'Seaborn', 'Model Comparison'],
    icon: <Microscope className="w-6 h-6" />,
    githubUrl: 'https://github.com/Nippani-Meghana/OIBSIP_NM/tree/main/Wine_Quality_Prediction'
  },
  {
    id: '8',
    title: 'Data Cleaning & Auditing',
    category: 'Data Analysis',
    description: 'Comprehensive data cleaning pipeline for Airbnb and YouTube datasets with standardization and quality auditing.',
    technologies: ['Python', 'Pandas', 'Data Standardization', 'Quality Auditing'],
    icon: <GitBranch className="w-6 h-6" />,
    githubUrl:'https://github.com/Nippani-Meghana/OIBSIP_NM/tree/main/Cleaning_Data'
  },
  {
    id: '9',
    title: 'House Price Prediction',
    category: 'Machine Learning',
    description: 'Reproducible, Explainable liner regression pipeline for predicting house prices from structural and aminities with Robust Pre-processing, OHE and validation via R².',
    technologies: ['Python', 'Machine Learning', 'Lenear Regression', 'Data Visualization', 'Feature Engineering', 'NLP'],
    icon: <Home className="w-6 h-6" />,
    isIndependent: true,
    githubUrl: 'https://github.com/Nippani-Meghana/OIBSIP_NM/tree/main/House_Price_Prediction'
  }
];

const ProjectsSection = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Neuroscience':
        return 'bg-neural-primary/10 text-neural-primary border-neural-primary/20';
      case 'Machine Learning':
        return 'bg-neural-secondary/10 text-neural-secondary border-neural-secondary/20';
      case 'Data Analysis':
        return 'bg-neural-accent/10 text-neural-accent border-neural-accent/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of computational neuroscience, machine learning, and data analysis projects 
            exploring the fascinating world of brain-inspired computing.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="project-card rounded-xl shadow-md p-8 bg-white bg-opacity-80">
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center text-primary">
                  {project.icon}
                  {project.isIndependent && (
                    <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
                      Independent
                    </span>
                  )}
                </div>
                <span className={`text-xs px-3 py-1 rounded-full border ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>

              {/* Project content */}
              <h3 className="text-xl font-medium mb-3 text-foreground">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline hover:text-pink-700 transition"
                >
                  {project.title}
                </a>
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;