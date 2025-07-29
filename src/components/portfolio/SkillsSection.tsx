import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Programming & Software",
      icon: "💻",
      color: "electric",
      skills: [
        { name: "Python", level: 95 },
        { name: "C/C++", level: 90 },
        { name: "MATLAB", level: 85 },
        { name: "ROS/ROS2", level: 92 },
        { name: "Linux", level: 88 },
        { name: "Git", level: 85 }
      ]
    },
    {
      title: "Robotics & AI",
      icon: "🤖",
      color: "neon",
      skills: [
        { name: "Computer Vision", level: 90 },
        { name: "TensorFlow/PyTorch", level: 85 },
        { name: "SLAM", level: 88 },
        { name: "Kinematics", level: 92 },
        { name: "Path Planning", level: 87 },
        { name: "Sensor Fusion", level: 85 }
      ]
    },
    {
      title: "Industrial Automation",
      icon: "⚡",
      color: "cyber",
      skills: [
        { name: "Allen Bradley PLCs", level: 95 },
        { name: "SCADA Systems", level: 90 },
        { name: "HMI Development", level: 88 },
        { name: "Ladder Logic", level: 92 },
        { name: "FactoryTalk", level: 85 },
        { name: "RS Logix 500", level: 90 }
      ]
    },
    {
      title: "Hardware & Systems",
      icon: "🔧",
      color: "tech",
      skills: [
        { name: "Fanuc Robotics", level: 88 },
        { name: "KUKA Systems", level: 85 },
        { name: "Jetson Nano/TX2", level: 90 },
        { name: "Arduino/RPi", level: 92 },
        { name: "Vision Systems", level: 87 },
        { name: "AMR Deployment", level: 95 }
      ]
    }
  ];

  const ProgressBar = ({ value, color, delay }: { value: number; color: string; delay: number }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setCurrentValue(value);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, value, delay]);

    return (
      <div className="relative">
        <Progress 
          value={currentValue} 
          className={`h-2 bg-muted`}
        />
        <div 
          className={`absolute top-0 left-0 h-2 bg-gradient-to-r from-${color} to-${color}-light rounded-full transition-all duration-1000 ease-out glow`}
          style={{ width: `${currentValue}%` }}
        />
      </div>
    );
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full robotics and automation stack, 
            from low-level hardware integration to high-level AI/ML algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="glass-card p-8 hover-card animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`text-4xl bg-gradient-to-br from-${category.color} to-${category.color}-dark/20 p-3 rounded-lg`}>
                  {category.icon}
                </div>
                <h3 className={`text-2xl font-bold text-${category.color}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-sm text-${category.color} font-semibold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar 
                      value={skill.level} 
                      color={category.color}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications & Tools */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-electric">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "SolidWorks", "Ansys", "AutoCAD", "Unity", "Blender", "Docker", 
              "AWS", "Grafana", "Studio 5000", "FactoryTalk", "Cognex", "Keyence",
              "MAVROS", "Pixhawk", "OpenCV", "CUDA", "Gazebo", "ROBOGUIDE"
            ].map((tool, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-muted to-muted/50 rounded-full border border-electric/20 hover:border-electric/50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};