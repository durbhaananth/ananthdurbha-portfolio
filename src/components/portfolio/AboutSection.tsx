import { Bot, Cpu, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Bot,
      title: "AMR Deployment",
      description: "50+ AMRs deployed with 100% readiness rate",
      color: "electric"
    },
    {
      icon: Cpu,
      title: "PLC Programming",
      description: "100+ AB Studio 5000 routines optimized",
      color: "neon"
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "20% uptime boost through smart diagnostics",
      color: "cyber"
    },
    {
      icon: Target,
      title: "Vision Systems",
      description: "30% accuracy improvement in defect detection",
      color: "tech"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Robotics & Controls Engineer with hands-on experience in deploying and troubleshooting 
            AMRs in warehouse automation environments. Expert in industrial automation, AI/ML navigation, 
            and scalable fulfillment solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Summary Card */}
          <div className="glass-card p-8 hover-card animate-slide-in-up">
            <h3 className="text-2xl font-bold mb-6 text-electric">Core Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-electric rounded-full mt-2 pulse-glow" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Industrial Automation:</strong> Allen Bradley PLCs, RS Logix 500, 
                  FactoryTalk, SCADA systems with proven track record in warehouse environments
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neon rounded-full mt-2 pulse-glow" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Robotics Systems:</strong> ROS, SLAM, KUKA, Fanuc robotic arms, 
                  AMR deployment and commissioning at enterprise scale
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyber rounded-full mt-2 pulse-glow" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">AI/ML Integration:</strong> Computer vision, autonomous navigation, 
                  stereo vision systems with real-time obstacle avoidance
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-tech rounded-full mt-2 pulse-glow" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">System Diagnostics:</strong> Real-time troubleshooting, 
                  Grafana monitoring, predictive maintenance protocols
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className={`glass-card p-6 hover-card animate-scale-in text-center`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-${highlight.color} to-${highlight.color}-dark/20 flex items-center justify-center`}>
                <highlight.icon className={`h-6 w-6 text-${highlight.color}`} />
              </div>
              <h4 className="font-semibold mb-2">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glass-card p-6 hover-card">
            <h4 className="text-xl font-semibold mb-3 text-electric">Master of Science</h4>
            <p className="text-lg mb-2">Mechatronics, Automation and Robotics</p>
            <p className="text-muted-foreground mb-2">University of Delaware, Newark, DE</p>
            <p className="text-sm text-muted-foreground">02/2023 – 05/2024</p>
          </Card>
          
          <Card className="glass-card p-6 hover-card">
            <h4 className="text-xl font-semibold mb-3 text-neon">Bachelor of Technology</h4>
            <p className="text-lg mb-2">Mechanical Engineering</p>
            <p className="text-muted-foreground mb-2">RK College of Engineering, JNTU Kakinada</p>
            <p className="text-sm text-muted-foreground">06/2019 – 06/2022</p>
          </Card>
        </div>
      </div>
    </section>
  );
};