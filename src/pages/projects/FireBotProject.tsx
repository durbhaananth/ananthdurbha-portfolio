import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FireBotProject = () => {
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
            <div className="text-8xl mb-6">🚒</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fire Bot <span className="gradient-text">Project</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Enhancing firefighting capabilities through autonomous robotics.
            </p>
            <div className="flex gap-4 justify-center">
              <Badge className="bg-electric/10 text-electric border-electric/30">
                Autonomous Systems
              </Badge>
              <Badge variant="outline">April 2024</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Motivation */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Motivation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The Fire Bot project was driven by the need to minimize human risk in hazardous firefighting environments. 
                Fires in inaccessible or dangerous areas often put firefighters' lives at risk. This project aimed to develop 
                an autonomous firefighting robot capable of navigating and extinguishing simulated fires, serving as a 
                proof-of-concept for robotics in emergency response scenarios.
              </p>
            </CardContent>
          </Card>

          {/* Inspiration */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Inspiration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Inspired by advancements in robotics and computer vision, the team explored how robots could enhance 
                firefighting capabilities. The project was influenced by the principles of "Development of Fire Fighting 
                Robot (QRob)" and aimed to merge autonomous navigation with manual control systems for enhanced precision 
                and adaptability.
              </p>
            </CardContent>
          </Card>

          {/* Components Used */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Components Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Sensors:</h4>
                  <p className="text-muted-foreground">QTI sensors for line detection, Infrared (IR) sensors for fire detection.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Microcontroller:</h4>
                  <p className="text-muted-foreground">ATmega328P-based PCB for system integration.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Actuators:</h4>
                  <p className="text-muted-foreground">Continuous rotation servos for precise movement control, a servo motor for ladder deployment.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Vision System:</h4>
                  <p className="text-muted-foreground">OV2640 camera module integrated with OpenCV for real-time object detection.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Communication:</h4>
                  <p className="text-muted-foreground">NRF24L01+ wireless transceiver for remote control.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Power Source:</h4>
                  <p className="text-muted-foreground">4x 1.5V AA batteries and 1x 9V battery.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Additional Components:</h4>
                  <p className="text-muted-foreground">Dual H-bridge motor driver (L298N), custom joystick interface for manual control.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Challenges Faced</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Achieving reliable autonomous navigation due to sensor calibration and arena limitations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Managing power constraints while integrating multiple sensors and actuators within the $300 budget.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Developing effective object detection algorithms with limited processing power on the microcontroller.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Ensuring precise ladder deployment in varying fire scenarios.</span>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Milestone 1:</h4>
                  <p className="text-muted-foreground">Successfully navigated a straight line over a distance of 6 feet while detecting and distinguishing single and double white lines in a random sequence. The robot demonstrated consistent and accurate performance.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Milestone 2:</h4>
                  <p className="text-muted-foreground">The robot received driving commands (forward, backward, turn) in real time from a base station using wireless radio. An out-of-bounds detection system was implemented, triggering a specific LED when the robot exited the designated area.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Milestone 3:</h4>
                  <p className="text-muted-foreground">Detected IR signals to simulate fire detection and successfully deployed a ladder to extinguish the fire. The break beam sensor validated successful ladder deployment by turning off the IR signal and activating a green LED to signify extinguishing the fire.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Final Achievement:</h4>
                  <p className="text-muted-foreground">The project met all milestones, achieving robust autonomous navigation, precise manual control, and effective fire simulation response. The system was validated in a controlled environment, showcasing its potential for real-world applications.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Arduino IDE", "Python", "OpenCV", "ATmega328P", "H-bridge Motor Drivers", "NRF24L01+", "QTI Sensors", "IR Sensors"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-electric/30">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="space-y-3">
                <div><span className="font-semibold">Programming:</span> Arduino IDE, Python (OpenCV integration).</div>
                <div><span className="font-semibold">Control Systems:</span> ATmega328P microcontroller, H-bridge motor drivers.</div>
                <div><span className="font-semibold">Vision Processing:</span> OpenCV for object detection.</div>
                <div><span className="font-semibold">Wireless Communication:</span> NRF24L01+ transceiver.</div>
                <div><span className="font-semibold">Sensors and Actuators:</span> QTI sensors, IR sensors, servos.</div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-electric">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Autonomous navigation using QTI sensors in an 8' x 8' arena.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Fire detection via IR sensors with adjustable detection distance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time object detection with OpenCV-powered vision system.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Manual joystick control for enhanced precision in challenging scenarios.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Lightweight and compact design under 900g with efficient power consumption.</span>
                </li>
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
                  <span className="text-muted-foreground"><span className="font-semibold">Advanced Sensing:</span> Integration of thermal imaging cameras for more accurate fire detection.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Improved Autonomy:</span> Use of advanced AI algorithms for better navigation and decision-making.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Multi-Robot Collaboration:</span> Development of a networked system for coordinated firefighting operations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Enhanced Power Management:</span> Adoption of rechargeable lithium-ion batteries for extended operational time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">IoT Integration:</span> Real-time data transmission to cloud-based monitoring systems for remote control and analysis.</span>
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
                  onClick={() => window.open("https://durbhaananth.github.io/project1.html", "_blank")}
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

export default FireBotProject;