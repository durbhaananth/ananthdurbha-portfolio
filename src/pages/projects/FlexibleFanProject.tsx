
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FlexibleFanProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background dark">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">🌪️</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Adaptive <span className="gradient-text">Flexible Fan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Revolutionary flexible fan design with adaptive blade geometry for optimized airflow efficiency
            </p>
            <div className="flex gap-4 justify-center">
              <Badge className="bg-neon/10 text-neon border-neon/30">Mechanical Design</Badge>
              <Badge variant="outline">March 2022</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-neon">About the Project</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Motivation:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    This project was inspired by the regional stiffness variations observed in tuna fish fins, which exhibit a gradient of decreasing stiffness from the leading edge to the trailing edge. By mimicking this stiffness distribution, the flexible fan design aimed to improve cooling effectiveness, reduce drag, and achieve higher efficiency compared to traditional rigid fan designs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Inspiration:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The bioinspired design replicates the stiffness gradient found in natural systems, allowing for beneficial deformation patterns and vortex shedding. This approach optimizes airflow dynamics, enhances cooling, and reduces noise.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-neon">Flexibility Description</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The fan was 3D-printed with a spanwise stiffness gradient. The leading edge and base were made rigid, transitioning to a fully flexible trailing edge. The stiffness distribution values of [0.75, 0.25, 0.5, 0.25, 0.25, 0.75] mimic the natural gradient observed in tuna fish fins, providing enhanced flexibility and better adaptability during motion.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-neon">Simulation</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Simulations were conducted to analyze the fan's behavior under fluidic conditions. Using the Navier-Stokes equations and the Bernoulli-Euler beam equation, the deflection of the fan was studied. Results indicated favorable deformation patterns that improve cooling effectiveness at the cost of slightly higher power consumption.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-neon">Performance Assessment</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Thermal Efficiency:</span> The flexible fan reduced face temperature from 32.4°C to 31°C, outperforming the rigid fan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Velocity Distribution:</span> The flexible fan maintained higher airflow velocities further from the fan, indicating better momentum transfer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Power Consumption:</span> The flexible fan required more power due to its deformable elements, with consistent oscillation cycles.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-neon">Technologies Used</CardTitle></CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {["SolidWorks", "CFD Analysis", "Flexible Design", "Aerodynamics", "Optimization", "3D Printing"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-neon/30">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="space-y-2">
                <li><span className="font-semibold">Design:</span> SolidWorks for 3D modeling and design optimization.</li>
                <li><span className="font-semibold">Analysis:</span> CFD analysis for fluid dynamics simulation.</li>
                <li><span className="font-semibold">Manufacturing:</span> 3D printing with variable stiffness materials.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-neon">Proposed Design Integration</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The flexible fan design integrates bioinspired stiffness gradients with compliant mechanisms. This approach enhances cooling efficiency while maintaining a sleek design. Future iterations could incorporate additional compliant elements and optimize materials for better performance.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-neon">Future Scope</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced materials with better flexibility and durability characteristics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Integration with smart control systems for adaptive performance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Scaling up for industrial cooling applications.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader><CardTitle className="text-neon">Project Resources</CardTitle></CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline" className="border-neon text-neon hover:bg-neon hover:text-primary-foreground" onClick={() => window.open("https://github.com/durbhaananth", "_blank")}>
                  <Github className="h-4 w-4 mr-2" />View Code
                </Button>
                <Button variant="outline" className="border-neon text-neon hover:bg-neon hover:text-primary-foreground" onClick={() => window.open("https://durbhaananth.github.io/project8.html", "_blank")}>
                  <ExternalLink className="h-4 w-4 mr-2" />Project Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FlexibleFanProject;
