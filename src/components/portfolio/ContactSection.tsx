import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    const emailBody = `
Hello Ananth,

You have received a new message from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Best regards,
${name}
    `.trim();
    
    const mailtoLink = `mailto:durbhaananth@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact Form')}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "durbhaananth@gmail.com",
      href: "mailto:durbhaananth@gmail.com",
      color: "electric"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(302) 730-6150",
      href: "tel:+13027306150",
      color: "neon"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kansas City, MO",
      href: "#",
      color: "cyber"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/durbhaananth/",
      color: "electric"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/durbhaananth",
      color: "neon"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss robotics innovation? Whether you're looking for a skilled engineer 
            or want to collaborate on cutting-edge projects, I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-electric">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently open to new opportunities in robotics engineering, 
                automation systems, and AI/ML applications. Let's build the future together.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="glass-card p-6 hover-card animate-slide-in-left group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a href={contact.href} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${contact.color} to-${contact.color}-dark/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={`h-6 w-6 text-${contact.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4 text-neon">Connect Online</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className={`border-${social.color} text-${social.color} hover:bg-${social.color} hover:text-primary-foreground hover:scale-110 transition-all duration-300`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="glass-card p-6 border-electric/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-electric rounded-full pulse-glow" />
                <div>
                  <p className="font-semibold text-electric">Available for New Opportunities</p>
                  <p className="text-sm text-muted-foreground">Open to full-time positions and consulting projects</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Ananth Durbha. Crafted with precision and passion for robotics innovation.
          </p>
        </div>
      </div>
    </section>
  );
};