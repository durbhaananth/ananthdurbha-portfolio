
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PierDesignProject = () => {
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
            <div className="text-8xl mb-6">🌊</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bio-Inspired <span className="gradient-text">Pier Design</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Innovative structural design inspired by nature for enhanced durability and environmental integration
            </p>
            <div className="flex gap-4 justify-center">
              <Badge className="bg-electric/10 text-electric border-electric/30">Structural Engineering</Badge>
              <Badge variant="outline">April 2022</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-electric">About the Project</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Motivation:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    This project was driven by the need to create a strong, durable, and lightweight structure for underwater and high-stress environments. Taking inspiration from nature, the shiitake mushroom and loofah sponge served as models for adhesion and structural integrity, respectively.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Inspiration:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The shiitake mushroom's blunt edges and robust cap-stem structure inspired the adhesion method, while the porous lattice of the loofah sponge informed the energy absorption and stress distribution design. Together, these biomimetic elements provided a durable and resilient structure suitable for demanding applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-electric">Technical Overview</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Adhesion Design</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Mushroom-like extrusion design optimized for underwater adhesion.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Dimensions: 100x100 mm surface area, 3 mm base, 4.45 mm top, 6.1 mm spacing for effective attachment and detachment.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Tested to withstand 20 kg force in benchtop trials.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Lattice Structure</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Loofah sponge-inspired lattice structure for load distribution and resilience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Dimensions: 50x50x100 mm with a weight of 50.33 g.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Load-bearing capacity: 7,000 N peak under vertical load, with deformation starting at 4,000 N.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-electric">Performance Testing</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Hydraulic Press Test:</span> Elastic deformation observed up to 2 mm at 7,000 N, with stabilized deformation around 12 mm at 4,000 N.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Load Test:</span> Velcro attachment maintained integrity up to 10 pounds; separation occurred beyond this point without structural damage.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-electric">Technologies Used</CardTitle></CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {["CATIA V5", "ANSYS", "Bio-inspired Design", "Structural Analysis", "FEM", "Onshape"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-electric/30">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="space-y-2">
                <li><span className="font-semibold">Design:</span> CAD modeling using Onshape for precise structural representation.</li>
                <li><span className="font-semibold">Testing:</span> Hydraulic press for force-displacement analysis and load testing setup.</li>
                <li><span className="font-semibold">Materials:</span> Water-resistant polymers for adhesion and structural components.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-electric">Results</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Successfully demonstrated a lightweight, durable design suitable for underwater conditions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Adhesion design effectively withstood human-level force applications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Structural integrity maintained under hydraulic and load testing conditions.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-electric">Future Scope</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Enhance connection strength by modifying Velcro spacing and material composition.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Develop larger-scale models for industrial and marine applications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Incorporate IoT-enabled sensors for real-time monitoring and performance analysis.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader><CardTitle className="text-electric">Project Resources</CardTitle></CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline" className="border-electric text-electric hover:bg-electric hover:text-primary-foreground" onClick={() => window.open("https://github.com/durbhaananth", "_blank")}>
                  <Github className="h-4 w-4 mr-2" />View Code
                </Button>
                <Button variant="outline" className="border-electric text-electric hover:bg-electric hover:text-primary-foreground" onClick={() => window.open("https://durbhaananth.github.io/project7.html", "_blank")}>
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

export default PierDesignProject;
