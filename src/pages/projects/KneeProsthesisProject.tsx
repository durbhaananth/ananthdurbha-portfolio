
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const KneeProsthesisProject = () => {
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
            <div className="text-8xl mb-6">🦴</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced <span className="gradient-text">Knee Prosthesis</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive design and finite element analysis of knee prosthesis using advanced CAD modeling and biomechanical optimization
            </p>
            <div className="flex gap-4 justify-center">
              <Badge className="bg-cyber/10 text-cyber border-cyber/30">Biomedical Design</Badge>
              <Badge variant="outline">March 2022</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-cyber">About the Project</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Motivation:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The increasing demand for knee replacement surgeries due to degenerative diseases has necessitated the design of lighter, more durable prosthetic knee joints. This project aims to develop and analyze a prosthetic knee joint capable of sustaining high loads while maintaining biomechanical compatibility and cost-efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Objective:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The project seeks to design and analyze a flexible prosthetic knee joint using materials with high longevity, low maintenance, and excellent biomechanical compatibility. It focuses on von-Mises stress, total deformation, and strain distribution under varying loads.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-cyber">Technical Overview</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold mb-3">Design and Analysis</h4>
                <p className="text-muted-foreground mb-4">The project utilized the following tools and methodologies:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><span className="font-semibold">CAD Modeling:</span> CATIA V5 was used for creating the 3D model of the knee prosthesis.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><span className="font-semibold">Finite Element Analysis (FEA):</span> ANSYS 14.5 was employed to simulate stress, deformation, and strain distributions under static conditions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><span className="font-semibold">Material Selection:</span> Analysis of biomaterials such as TI-6AL-4V, TI-6AL-7NB, and ABS for their suitability in prosthetic applications.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><span className="font-semibold">Boundary Conditions:</span> Load simulations considered static and dynamic forces during walking and running activities.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-cyber">Material Properties</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">The study evaluated various biomaterials:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">TI-6AL-4V:</span> High strength, corrosion resistance, and biocompatibility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">TI-6AL-7NB:</span> Similar properties to TI-6AL-4V with enhanced mechanical performance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">ABS:</span> Lightweight and cost-effective for temporary implants.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Stainless Steel 316L:</span> Limited corrosion resistance but widely used for temporary orthopedic implants.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-cyber">Results</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Stress Distribution:</span> TI-6AL-7NB showed optimal stress distribution and resistance under high loads.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Deformation:</span> Total deformation was minimized using titanium alloys compared to ABS and stainless steel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Durability:</span> Titanium alloys exhibited superior long-term durability and biocompatibility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Maximum von-Mises stress:</span> 250 MPa under realistic loads with comprehensive load analysis.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-cyber">Challenges and Solutions</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Complex Geometry:</span> Accurate modeling of the knee joint's anatomical structure using CATIA.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Material Selection:</span> Extensive testing of biomaterials to ensure biocompatibility and mechanical reliability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Load Analysis:</span> Iterative simulations in ANSYS to refine load distribution and optimize geometry.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-cyber">Technologies Used</CardTitle></CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {["CATIA V5R20", "ANSYS", "FEM", "CAD", "Biomedical Engineering", "Material Analysis"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-cyber/30">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="space-y-2">
                <li><span className="font-semibold">CAD Software:</span> CATIA V5 for 3D modeling.</li>
                <li><span className="font-semibold">FEA Software:</span> ANSYS 14.5 for structural analysis.</li>
                <li><span className="font-semibold">Materials:</span> TI-6AL-4V, TI-6AL-7NB, Stainless Steel 316L, ABS.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-cyber">Future Scope</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Advanced Materials:</span> Exploration of next-generation biomaterials with improved fatigue resistance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Dynamic Analysis:</span> Incorporating real-time gait data to refine stress and deformation simulations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">AI Integration:</span> Using machine learning to predict wear patterns and optimize designs further.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader><CardTitle className="text-cyber">Project Resources</CardTitle></CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber hover:text-primary-foreground" onClick={() => window.open("https://github.com/durbhaananth", "_blank")}>
                  <Github className="h-4 w-4 mr-2" />View Code
                </Button>
                <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber hover:text-primary-foreground" onClick={() => window.open("https://durbhaananth.github.io/project9.html", "_blank")}>
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

export default KneeProsthesisProject;
