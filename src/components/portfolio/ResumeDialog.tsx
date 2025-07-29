import { useState } from "react";
import { Send, Download, Mail, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface ResumeDialogProps {
  children: React.ReactNode;
}

export const ResumeDialog = ({ children }: ResumeDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email with form data
    const subject = encodeURIComponent(`Resume Request from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Hi Ananth,\n\nI would like to request your resume.\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    
    window.open(`mailto:durbhaananth@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Get My <span className="gradient-text">Resume</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          {/* Quick Actions */}
          <div className="flex justify-center">
            <Button 
              variant="outline"
              onClick={() => window.open('mailto:durbhaananth@gmail.com', '_blank')}
              className="border-neon text-neon hover:bg-neon hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Me Directly
            </Button>
          </div>

          {/* Contact Info Card */}
          <Card className="glass-card p-4">
            <h4 className="font-semibold mb-3 text-center text-electric">Direct Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-electric" />
                <span>durbhaananth@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-neon" />
                <span>(302) 730-6150</span>
              </div>
            </div>
          </Card>

          {/* Resume Request Message */}
          <Card className="glass-card p-4">
            <div className="text-center">
              <h4 className="font-semibold mb-2 text-electric">Get Updated Resume</h4>
              <p className="text-sm text-muted-foreground mb-4">
                For the most current version of my resume, please email me directly and I'll send it to you promptly.
              </p>
              <Button 
                variant="outline"
                onClick={() => window.open('mailto:durbhaananth@gmail.com?subject=Resume Request', '_blank')}
                className="border-electric text-electric hover:bg-electric hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email for Resume
              </Button>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};