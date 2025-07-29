import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const StereoVisionProject = () => {
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
            <div className="text-8xl mb-6">👁️</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Multi-Resolution <span className="gradient-text">Stereo Analysis</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Enhanced stereo vision with region and feature-based matching
            </p>
            <div className="flex gap-4 justify-center">
              <Badge className="bg-cyber/10 text-cyber border-cyber/30">
                Computer Vision
              </Badge>
              <Badge variant="outline">September 2023</Badge>
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
              <CardTitle className="text-cyber">About the Multi-Resolution Stereo Analysis Project</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Motivation:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    This project aimed to implement a multi-resolution stereo analysis system leveraging region and 
                    feature-based matching to enhance depth perception and disparity calculations for stereo image pairs. 
                    The focus was on achieving accurate disparity maps by integrating advanced algorithms with customizable 
                    user options.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Techniques Used */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-cyber">Techniques Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Region-Based Analysis</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">User-defined template and matching window sizes (square or rectangular).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Matching performed along the x-direction using metrics such as:</span>
                    </li>
                    <li className="ml-6 space-y-1">
                      <div className="text-muted-foreground">• Sum of Absolute Differences (SAD)</div>
                      <div className="text-muted-foreground">• Sum of Squared Differences (SSD)</div>
                      <div className="text-muted-foreground">• Normalized Cross-Correlation (NCC)</div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Feature-Based Analysis</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Harris corner detector for feature extraction and matching.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Matching scores included SAD, SSD, and NCC for flexibility.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Validity Check and Gap Filling</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Disparity validation through left-to-right and right-to-left matching.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Gaps filled using adaptive neighborhood averaging with options for larger window sizes for robust interpolation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-cyber">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Successfully generated accurate disparity maps for stereo pairs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Incorporated region-based analysis at the top resolution and feature-based matching at lower resolutions for optimal results.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-cyber">Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Enhanced depth perception for 5 different stereo pairs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Validated multi-resolution analysis with disparity maps across varying levels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Minimized disparity errors and improved stereo image alignment accuracy.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Technologies Used */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-cyber">Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Computer Vision", "Stereo Vision", "Harris Corner Detection", "SAD/SSD/NCC", "Disparity Mapping", "Image Processing"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-cyber/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Future Scope */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-cyber">Future Scope</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Enhanced Features:</span> Integration with deep learning-based matching methods.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Faster Algorithms:</span> Real-time disparity calculations using parallel processing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground"><span className="font-semibold">Applications:</span> Deployment in autonomous systems and 3D reconstruction tasks.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Project Links */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-cyber">Project Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="border-cyber text-cyber hover:bg-cyber hover:text-primary-foreground"
                  onClick={() => window.open("https://github.com/durbhaananth", "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  variant="outline" 
                  className="border-cyber text-cyber hover:bg-cyber hover:text-primary-foreground"
                  onClick={() => window.open("https://durbhaananth.github.io/project4.html", "_blank")}
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

export default StereoVisionProject;