import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Robotics Controls Engineer",
      company: "Piston Automotive",
      location: "Kansas City, MO",
      period: "02/2025 - Present",
      type: "Current",
      achievements: [
        "Developed and debugged 100+ AB Studio 5000 PLC routines and HMI/SCADA dashboards, boosting uptime by 20%",
        "Improved Keyence cameras & HMI fault detection, reducing false rejects by 35% across 3 lines",
        "Integrated Fanuc R-2000iB 6 DOF for material handling with optimized cycle timing",
        "Configured Cognex In-sight vision systems, increasing inspection accuracy by 30%"
      ],
      skills: ["Allen Bradley PLCs", "Fanuc Robotics", "SCADA", "Keyence Vision", "Cognex Systems"]
    },
    {
      title: "Robotics Engineer",
      company: "GreyOrange",
      location: "Roswell, GA",
      period: "12/2024 – 02/2025",
      type: "Recent",
      achievements: [
        "Deployed and commissioned 50+ AMRs per cycle with 100% readiness rate",
        "Led real-time diagnostics resolving 95%+ hardware/software issues using Grafana",
        "Executed live floor testing ensuring navigation and performance benchmarks",
        "Reduced post-deployment defects by 40% through cross-team collaboration"
      ],
      skills: ["AMR Deployment", "Jetson TX2", "Grafana", "JSON Navigation", "System Integration"]
    },
    {
      title: "Robotic Software Engineer",
      company: "Maschinenmensch",
      location: "Brooklyn, NY",
      period: "08/2024 - 02/2025",
      type: "Recent",
      achievements: [
        "Programmed stereo vision and AI/ML for autonomous aerial vehicles using Nvidia Jetson Nano/Raspberry Pi5",
        "Integrated MAVROS and Pixhawk for real-time navigation with nonlinear MPC optimization",
        "Enhanced flight stability by 30% through advanced control algorithms",
        "Calibrated proximity sensors and millimeter-wave radar, achieving 28% latency reduction"
      ],
      skills: ["MAVROS", "Pixhawk", "Computer Vision", "Raspberry Pi", "Autonomous Systems"]
    },
    {
      title: "Automation Engineer",
      company: "Sarvani Telecom Pvt. Ltd.",
      location: "Hyderabad, India",
      period: "04/2022 – 01/2023",
      type: "Previous",
      achievements: [
        "Embedded SCADA systems with PLCs and RTUs to improve system efficiency and uptime",
        "Conducted predictive maintenance and automation troubleshooting",
        "Ensured 24/7 support for uninterrupted industrial operations",
        "Implemented monitoring systems for telecommunications infrastructure"
      ],
      skills: ["SCADA Systems", "PLCs", "RTUs", "Predictive Maintenance", "Industrial Automation"]
    },
    {
      title: "Mechanical Supervisor",
      company: "RR Industries",
      location: "AP, India",
      period: "06/2018 – 05/2019",
      type: "Previous",
      achievements: [
        "Operated and maintained shrink wrap, packing, and hydraulic press machines, reducing downtime by 15%",
        "Trained workers and optimized inventory, boosting production by 10% and reducing shortages by 12%",
        "Implemented regular checks and preventive maintenance protocols",
        "Enhanced production efficiency through workforce training and optimization"
      ],
      skills: ["Machine Maintenance", "Production Optimization", "Team Training", "Inventory Management", "Preventive Maintenance"]
    },
    {
      title: "Mechanical Intern",
      company: "South Central Railway",
      location: "AP, India",
      period: "05/2017 – 06/2017",
      type: "Previous",
      achievements: [
        "Manufactured railway components (rivets, bolts) to ISO standards, improving efficiency and reliability",
        "Led stress testing, achieving 95% stability in component testing",
        "Troubleshooted mechanical systems and collaborated across teams",
        "Ensured quality compliance with railway industry standards"
      ],
      skills: ["ISO Standards", "Component Manufacturing", "Stress Testing", "Quality Control", "Team Collaboration"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Current":
        return "bg-electric text-electric-foreground";
      case "Recent":
        return "bg-neon text-neon-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of deploying cutting-edge robotics solutions across diverse industries, 
            from warehouse automation to aerospace applications.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-electric to-neon opacity-50" />

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative mb-12 animate-fade-in-up ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-8 w-4 h-4 bg-electric rounded-full border-4 border-background shadow-lg pulse-glow transform -translate-y-1/2" 
                style={{
                  [index % 2 === 0 ? 'right' : 'left']: '-8px'
                }} 
              />

              <Card className="glass-card p-8 hover-card relative">
                {/* Arrow for desktop */}
                <div className={`hidden md:block absolute top-8 w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${
                  index % 2 === 0 
                    ? 'border-r-8 border-r-card -right-2' 
                    : 'border-l-8 border-l-card -left-2'
                }`} />

                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-electric">{exp.title}</h3>
                <h4 className="text-xl font-semibold mb-6 text-neon">{exp.company}</h4>

                <div className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <ChevronRight className="h-4 w-4 text-electric mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="border-electric/30 text-electric hover:bg-electric/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};