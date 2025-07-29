import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-electric rounded-lg float pulse-glow opacity-30" />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-neon rounded-full float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-cyber rotate-45 float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-tech rounded-lg float pulse-glow opacity-20" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">ANANTH</span>
            <br />
            <span className="text-electric">DURBHA</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Robotics & Controls Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Deploying cutting-edge autonomous systems and AMRs in warehouse automation. 
            Specializing in AI/ML navigation, computer vision, and industrial robotics integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="btn-electric text-lg px-8 py-4">
              View My Work
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-electric text-electric hover:bg-electric hover:text-primary-foreground"
                onClick={() => window.open('https://github.com/durbhaananth', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-electric text-electric hover:bg-electric hover:text-primary-foreground"
                onClick={() => window.open('https://linkedin.com/in/ananth-durbha', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-electric text-electric hover:bg-electric hover:text-primary-foreground"
                onClick={() => window.open('mailto:durbhaananth@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-electric" />
        </div>
      </div>

      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-neon rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyber rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};