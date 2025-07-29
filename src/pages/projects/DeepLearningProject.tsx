import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const DeepLearningProject = () => {
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
            <div className="text-8xl mb-6">🔍</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Deep Learning for <span className="gradient-text">Image Classification</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Image Classification and Semantic Segmentation using CNNs
            </p>
            <div className="flex gap-4 justify-center">
              <Badge className="bg-cyber/10 text-cyber border-cyber/30">AI/ML</Badge>
              <Badge variant="outline">March 2023</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-cyber">About the Project</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Deep learning has revolutionized image processing, enabling advanced classification and segmentation capabilities. 
                This project aimed to leverage CNNs for CIFAR100 image classification and semantic segmentation using FCN models.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card mb-8">
            <CardHeader><CardTitle className="text-cyber">Technical Approach</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Part 1: Image Classification with VGG16</h4>
                  <p className="text-muted-foreground">Model: Pre-trained VGG16 with the final layer modified for CIFAR100 classification. Training: 10 epochs, SGD optimizer with learning rate scheduling, cross-entropy loss. Results: Achieved ~85% accuracy.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Part 2: Custom CNN</h4>
                  <p className="text-muted-foreground">Architecture: Three convolutional layers, ReLU activations, max-pooling, and fully connected layers. Training: 30 epochs, SGD optimizer, cross-entropy loss. Results: Achieved ~78% accuracy.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Part 3: Semantic Segmentation</h4>
                  <p className="text-muted-foreground">Model: Pre-trained FCN-ResNet101 for semantic segmentation. Process: Generated class-based segmentation maps using real-world images. Results: High visual clarity in segmentation outputs.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader><CardTitle className="text-cyber">Project Resources</CardTitle></CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber hover:text-primary-foreground" onClick={() => window.open("https://github.com/durbhaananth", "_blank")}>
                  <Github className="h-4 w-4 mr-2" />View Code
                </Button>
                <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber hover:text-primary-foreground" onClick={() => window.open("https://durbhaananth.github.io/project6.html", "_blank")}>
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

export default DeepLearningProject;