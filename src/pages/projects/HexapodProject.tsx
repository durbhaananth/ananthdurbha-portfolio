import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const HexapodProject = () => {
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
            <div className="text-8xl mb-6">🕷️</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Autonomous <span className="gradient-text">Hexapod</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Bioinspired Hexapod for Adaptable Terrain Navigation
            </p>
            <div className="flex gap-4 justify-center">
              <Badge className="bg-neon/10 text-neon border-neon/30">
                Bio-Inspired Robotics
              </Badge>
              <Badge variant="outline">March 2024</Badge>
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
              <CardTitle className="text-neon">Motivation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The Autonomous Hexapod project was inspired by the need for versatile robots capable of navigating uneven 
                terrains and performing critical operations in complex environments. The research on hybrid gait planning by 
                Ruyi Wang and Neil Powell served as a significant influence, focusing on stability and operational efficiency 
                through bioinspired gait mechanics.
              </p>
            </CardContent>
          </Card>

          {/* Inspiration */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-neon">Inspiration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The hexapod's design drew inspiration from tripod and crab-like movements to achieve adaptability, efficiency, 
                and resilience. This bioinspired approach optimizes the robot's gait to handle unpredictability, making it 
                ideal for dynamic environments like search-and-rescue missions and sensory networks.
              </p>
            </CardContent>
          </Card>

          {/* Technical Overview */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-neon">Technical Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Kinematic Profile</h4>
                  <p className="text-muted-foreground mb-4">
                    The hexapod robot's motion was developed using inverse kinematics algorithms and geometric parameters 
                    like link lengths and joint orientations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground"><span className="font-semibold">Tripod Gait:</span> Alternating leg groups maintain ground contact while others move forward.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground"><span className="font-semibold">Rotation Gait:</span> Opposing leg groups move in opposite directions to allow rotation without changing position.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground"><span className="font-semibold">Tools Used:</span> MATLAB and Robotics System Toolbox for trajectory generation and solving inverse kinematics.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Simulated Environment</h4>
                  <p className="text-muted-foreground mb-4">
                    A simulated environment tested the robot's leg movement:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Inputs like motor positions and segment lengths were animated in 3D to visualize joint movement.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">The simulation assessed leg range of motion, identifying necessary adjustments before field implementation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground"><span className="font-semibold">Tools:</span> MATLAB for scripting and CSV files for trajectory data.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mechatronics Description */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-neon">Mechatronics Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">The hexapod uses:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Servos:</span> Six servos for coordinated movement (connected to an Arduino Mega).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Gait Logic:</span> Rotation and forward gait achieved through synchronized leg movements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Control:</span> Looping circular leg motion ensures seamless and efficient navigation.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-neon">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Smooth Walking Patterns:</span> Effective straight-line movement with minor deviations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Accurate Rotation:</span> The robot achieved precision rotational movement without translational drift.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Challenges:</span> Friction and inertia introduced during field testing were resolved through code refinements.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Challenges and Solutions */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-neon">Challenges and Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Sensor Calibration:</span> Adjusted to improve motion accuracy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Delay Minimization:</span> Code revisions reduced actuation delays for smoother operation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Ground Impact Issues:</span> Enhanced simulation models to address real-world environmental factors.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Technologies Used */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-neon">Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {["MATLAB", "Arduino IDE", "TinkerCAD", "Robotics System Toolbox", "Arduino Mega", "Servo Motors"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-neon/30">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="space-y-2">
                <li><span className="font-semibold">Programming:</span> MATLAB, TinkerCAD, and Arduino IDE.</li>
                <li><span className="font-semibold">Simulation:</span> Robotics System Toolbox for kinematic modeling.</li>
                <li><span className="font-semibold">Hardware:</span> Arduino Mega, servo motors, and custom wiring setups.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-neon">Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Stable walking and rotational gaits with bioinspired mechanics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Minimal deviations during straight-line movements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Smooth actuation sequences validated through benchtop and field testing.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Future Scope */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-neon">Future Scope</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Advanced Sensing:</span> Integration of tactile sensors for real-time adaptability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">AI Integration:</span> Use of machine learning for optimizing gait over time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Applications:</span> Deployment in disaster zones for search-and-rescue missions.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Project Links */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-neon">Project Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="border-neon text-neon hover:bg-neon hover:text-primary-foreground"
                  onClick={() => window.open("https://github.com/durbhaananth", "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  variant="outline" 
                  className="border-neon text-neon hover:bg-neon hover:text-primary-foreground"
                  onClick={() => window.open("https://durbhaananth.github.io/project2.html", "_blank")}
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

export default HexapodProject;