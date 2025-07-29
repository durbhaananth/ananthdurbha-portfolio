import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const HybridImagesProject = () => {
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
            <div className="text-8xl mb-6">🧠</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Image Filtering and <span className="gradient-text">Hybrid Images</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Exploring the fusion of low and high-frequency components in images
            </p>
            <div className="flex gap-4 justify-center">
              <Badge className="bg-neon/10 text-neon border-neon/30">
                Deep Learning
              </Badge>
              <Badge variant="outline">March 2023</Badge>
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
              <CardTitle className="text-neon">About the Hybrid Images Project</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Motivation:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The Hybrid Images project explores the fusion of low and high-frequency visual information from two 
                    distinct images to create a single hybrid image. This innovative approach allows viewers to perceive 
                    different interpretations of the same image depending on their viewing distance. The project aims to 
                    highlight how human vision processes global structures (low frequency) and local details (high frequency) 
                    seamlessly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Inspiration:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Inspired by the work of Oliva et al. (2006), this project leverages image processing techniques to blend 
                    global and local visual cues, showcasing how distance and frequency manipulation can change image perception 
                    dynamically.
                  </p>
                </div>
              </div>
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
                  <h4 className="font-semibold text-foreground mb-3">Process Flow</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground"><span className="font-semibold">Image Selection and Preprocessing:</span> Carefully selected images with distinct interpretations, aligned for coherent blending.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground"><span className="font-semibold">Frequency Separation:</span> Applied low-pass filtering on the first image for global structures and high-pass filtering on the second image for local details.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground"><span className="font-semibold">Hybrid Image Formation:</span> Combined processed images with optimized frequency cutoffs and blending parameters.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Techniques and Tools</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground"><span className="font-semibold">Programming:</span> Python and OpenCV libraries.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground"><span className="font-semibold">Filtering Methods:</span> Laplacian Pyramid and Gaussian Filtering for frequency separation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground"><span className="font-semibold">Visualization:</span> Frequency domain analysis and alignment techniques.</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                  <span className="text-muted-foreground">Created hybrid images with distinct global and local interpretations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Seamless combination of high and low-frequency components ensuring clarity at varying distances.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Validated human visual multi-scale analysis principles effectively.</span>
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
                  <span className="text-muted-foreground"><span className="font-semibold">Accurate Alignment:</span> Edge detection and alignment algorithms ensured precise blending.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Frequency Balance:</span> Tuned cutoff parameters iteratively and validated results visually.</span>
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
                {["Python", "OpenCV", "NumPy", "Matplotlib", "Gaussian Filtering", "Laplacian Pyramid", "Image Processing"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-neon/30">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="space-y-2">
                <li><span className="font-semibold">Programming:</span> Python.</li>
                <li><span className="font-semibold">Libraries:</span> OpenCV, NumPy, and Matplotlib.</li>
                <li><span className="font-semibold">Algorithms:</span> Frequency filtering using Gaussian and Laplacian filters.</li>
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
                  <span className="text-muted-foreground"><span className="font-semibold">Multi-Image Hybridization:</span> Investigating more than two images with advanced filters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Enhanced Edge Alignment:</span> Further improvements in image blending quality.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Dynamic Adjustments:</span> Real-time blending and adaptive filtering for interactive visualizations.</span>
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
                  onClick={() => window.open("https://durbhaananth.github.io/project5.html", "_blank")}
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

export default HybridImagesProject;