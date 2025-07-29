import { ExternalLink, Github, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Intelligent Fire Fighting Robot",
      period: "04/2024",
      description: "Engineered an autonomous firefighting robot with advanced fire detection capabilities and hazardous environment navigation systems.",
      image: "🚒",
      achievements: [
        "90% fire detection accuracy using Arduino Uno and ATmega328P",
        "95% success rate in autonomous movement and ladder deployment",
        "Real-time hazard assessment and path planning algorithms",
        "Integration of thermal sensors and smoke detection systems"
      ],
      technologies: ["Arduino", "ATmega328P", "Computer Vision", "Autonomous Navigation", "Sensor Fusion"],
      category: "Autonomous Systems",
      color: "electric",
      demoUrl: "/projects/fire-bot"
    },
    {
      title: "Bio-Inspired Hexapod Explorer",
      period: "03/2024", 
      description: "Advanced hexapod robot designed for search and rescue operations with spider-inspired locomotion and terrain adaptation.",
      image: "🕷️",
      achievements: [
        "80% maneuver precision using MATLAB and Arduino",
        "18 servos coordination for complex gait patterns",
        "Robust terrain navigation algorithms",
        "Bio-inspired locomotion for search and rescue missions"
      ],
      technologies: ["MATLAB", "Arduino", "Servo Control", "Gait Planning", "Bio-inspired Design"],
      category: "Bio-Inspired Robotics",
      color: "neon",
      demoUrl: "/projects/hexapod"
    },
    {
      title: "Multi-Resolution Stereo Vision System",
      period: "09/2023",
      description: "High-performance stereo vision system with advanced depth perception and real-time multi-resolution processing capabilities.",
      image: "👁️",
      achievements: [
        "85% depth accuracy using SAD, SSD, and NCC methods",
        "93% improvement in disparity correction for occluded areas",
        "Real-time processing with CUDA acceleration",
        "Bidirectional matching and validity checks implementation"
      ],
      technologies: ["CUDA", "OpenCV", "Stereo Vision", "GPU Programming", "Real-time Processing"],
      category: "Computer Vision",
      color: "cyber",
      demoUrl: "/projects/stereo-vision"
    },
    {
      title: "KUKA Precision Trajectory Planner",
      period: "04/2023",
      description: "Advanced trajectory planning algorithm for a 7-DOF KUKA robotic arm with improved positioning accuracy for target manipulation.",
      image: "🦾",
      achievements: [
        "95% trajectory precision through MATLAB simulations",
        "Integration with Robotic Operating System (ROS)",
        "Optimized path planning for complex manipulations",
        "Real-time kinematics and dynamics calculations"
      ],
      technologies: ["MATLAB", "ROS", "KUKA", "Trajectory Planning", "Kinematics"],
      category: "Robotic Manipulation",
      color: "electric",
      demoUrl: "/projects/kuka-trajectory"
    },
    {
      title: "Hybrid AI Image Processing Suite",
      period: "03/2023",
      description: "Enhanced image processing pipeline using PyTorch with custom CNN architectures and advanced hybrid filtering techniques.",
      image: "🧠",
      achievements: [
        "98% accuracy in image classification tasks",
        "Custom CNN architecture outperforming VGG16",
        "Advanced semantic segmentation implementation",
        "Hybrid filtering with morphological operations"
      ],
      technologies: ["PyTorch", "VGG16", "CNN", "Image Filtering", "Computer Vision"],
      category: "Deep Learning",
      color: "neon",
      demoUrl: "/projects/hybrid-images"
    },
    {
      title: "Deep Learning Vision Analytics",
      period: "03/2023",
      description: "Comprehensive deep learning system for image classification and semantic segmentation with state-of-the-art accuracy.",
      image: "🔍",
      achievements: [
        "98.5% accuracy in multi-class image classification",
        "Advanced semantic segmentation with FCNs",
        "Real-time inference optimization",
        "Custom dataset preprocessing pipelines"
      ],
      technologies: ["PyTorch", "CNN", "FCN", "Transfer Learning", "Data Augmentation"],
      category: "AI/ML",
      color: "cyber",
      demoUrl: "/projects/deep-learning"
    },
    {
      title: "Bio-Inspired Pier Engineering",
      period: "04/2022",
      description: "Innovative pier design inspired by marine biological structures for enhanced durability and environmental integration.",
      image: "🌊",
      achievements: [
        "30% improved load distribution efficiency",
        "Bio-inspired structural optimization",
        "Environmental impact reduction design",
        "Advanced FEM analysis validation"
      ],
      technologies: ["CATIA V5", "ANSYS", "Bio-inspired Design", "Structural Analysis", "FEM"],
      category: "Structural Engineering",
      color: "electric",
      demoUrl: "/projects/pier-design"
    },
    {
      title: "Adaptive Flexible Fan System", 
      period: "03/2022",
      description: "Revolutionary flexible fan design with adaptive blade geometry for optimized airflow efficiency across variable conditions.",
      image: "🌪️",
      achievements: [
        "25% improvement in airflow efficiency",
        "Adaptive blade geometry optimization",
        "Multi-speed performance analysis",
        "Noise reduction through design innovation"
      ],
      technologies: ["SolidWorks", "CFD Analysis", "Flexible Design", "Aerodynamics", "Optimization"],
      category: "Mechanical Design",
      color: "neon",
      demoUrl: "/projects/flexible-fan"
    },
    {
      title: "Advanced Knee Prosthesis Design",
      period: "03/2022",
      description: "Comprehensive design and finite element analysis of knee prosthesis using advanced CAD modeling and biomechanical optimization.",
      image: "🦴",
      achievements: [
        "Maximum von-Mises stress of 250 MPa under realistic loads",
        "Comprehensive load analysis and stress distribution",
        "Advanced CAD modeling with CATIA V5R20",
        "Validated design through ANSYS finite element analysis"
      ],
      technologies: ["CATIA V5R20", "ANSYS", "FEM", "CAD", "Biomedical Engineering"],
      category: "Biomedical Design",
      color: "cyber",
      demoUrl: "/projects/knee-prosthesis"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "electric":
        return {
          badge: "bg-electric/10 text-electric border-electric/30",
          button: "border-electric text-electric hover:bg-electric hover:text-primary-foreground",
          glow: "hover:shadow-[0_0_30px_rgba(0,191,255,0.3)]"
        };
      case "neon":
        return {
          badge: "bg-neon/10 text-neon border-neon/30",
          button: "border-neon text-neon hover:bg-neon hover:text-primary-foreground",
          glow: "hover:shadow-[0_0_30px_rgba(170,85,255,0.3)]"
        };
      case "cyber":
        return {
          badge: "bg-cyber/10 text-cyber border-cyber/30",
          button: "border-cyber text-cyber hover:bg-cyber hover:text-primary-foreground",
          glow: "hover:shadow-[0_0_30px_rgba(0,255,170,0.3)]"
        };
      default:
        return {
          badge: "bg-primary/10 text-primary border-primary/30",
          button: "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
          glow: "hover:shadow-[0_0_30px_rgba(0,191,255,0.3)]"
        };
    }
  };

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge robotics projects showcasing innovation in autonomous systems, 
            computer vision, and bio-inspired design for real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <Card 
                key={index} 
                className={`glass-card overflow-hidden hover-card animate-fade-in-up group ${colorClasses.glow} cursor-pointer`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => window.open(project.demoUrl, '_self')}
              >
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={colorClasses.badge}>
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-background/80">
                      {project.period}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 text-${project.color}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <li key={achIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                          <div className={`w-1 h-1 bg-${project.color} rounded-full mt-2 flex-shrink-0`} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-muted-foreground/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`flex-1 ${colorClasses.button}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, '_self');
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
