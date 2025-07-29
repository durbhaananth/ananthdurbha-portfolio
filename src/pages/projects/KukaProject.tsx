import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const KukaProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">🦾</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              KUKA <span className="gradient-text">Trajectory Planning</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Efficient robotic motion planning for industrial automation using KUKA LBR iiwa 7 R800
            </p>
            <div className="flex gap-4 justify-center">
              <Badge className="bg-electric/10 text-electric border-electric/30">
                Robotic Manipulation
              </Badge>
              <Badge variant="outline">April 2023</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* About the Project */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">About the Project</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Motivation:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    This project explores the precise control and motion planning capabilities of the KUKA LBR iiwa 7 R800 
                    robotic arm, focusing on real-world applications of robotics in dynamic environments. The primary objective 
                    is to program the robot to position a rectangular shape accurately on a rectangular target within its workspace. 
                    Leveraging an Aruco marker for target detection, the robotic arm uses a camera mounted on its flange to determine 
                    the target's location and orientation. The trajectory planning, executed in joint space, ensures compliance with 
                    joint constraints and achieves the desired motion with precision in exactly 10 seconds.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Inspiration:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Inspired by the increasing demand for precision in robotics, this project incorporated modern control techniques 
                    and efficient kinematic modeling to achieve seamless and reliable trajectory planning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Overview */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Technical Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The project involved the development of trajectory planning algorithms for a 7-DOF robotic arm:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Kinematic Modeling:</span> Forward and inverse kinematics equations were derived to model the robot's movements accurately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Trajectory Planning:</span> Polynomial interpolation and linear segment blending techniques were used to design smooth joint-space trajectories.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Execution Time:</span> A 10-second time frame was optimized for point-to-point motion tasks, balancing precision and speed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Simulation Tools:</span> MATLAB Robotics Toolbox for trajectory generation and visualization.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Challenges and Solutions */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Challenges and Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Precision Optimization:</span> Achieved sub-millimeter precision in end-effector positioning by refining kinematic calculations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Collision Avoidance:</span> Implemented dynamic constraints to prevent collisions in cluttered environments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Computational Efficiency:</span> Optimized algorithms to reduce computation time without sacrificing accuracy.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Achieved precise point-to-point motion within a 10-second time frame.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Validated smooth trajectory execution with MATLAB simulations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Demonstrated improved motion efficiency and reduced operational time for industrial tasks.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Technologies Used */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {["MATLAB", "Robotics System Toolbox", "KUKA LBR iiwa 7 R800", "Trajectory Planning", "Inverse Kinematics", "Forward Kinematics"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-electric/30">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="space-y-2">
                <li><span className="font-semibold">Programming:</span> MATLAB, Robotics System Toolbox.</li>
                <li><span className="font-semibold">Hardware:</span> KUKA LBR iiwa 7 R800 robotic arm.</li>
                <li><span className="font-semibold">Mathematical Modeling:</span> Forward and inverse kinematics, trajectory interpolation.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Future Scope */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Future Scope</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Real-Time Adaptability:</span> Incorporate sensor feedback to dynamically adjust trajectories in real time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">AI Integration:</span> Use machine learning for predictive motion planning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Industrial Applications:</span> Extend to complex tasks like welding and assembly line automation.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Project Links */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-electric">Project Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="border-electric text-electric hover:bg-electric hover:text-primary-foreground"
                  onClick={() => window.open("https://github.com/durbhaananth", "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  variant="outline" 
                  className="border-electric text-electric hover:bg-electric hover:text-primary-foreground"
                  onClick={() => window.open("https://durbhaananth.github.io/project3.html", "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Project Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default KukaProject;