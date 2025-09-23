import { Button } from "@/components/ui/button";
import { Star, Sparkles, Moon } from "lucide-react";
import heroImage from "@/assets/hero-cosmic.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <Star className="absolute top-20 left-20 w-6 h-6 text-accent animate-pulse" />
        <Sparkles className="absolute top-40 right-32 w-4 h-4 text-primary-glow animate-float" />
        <Moon className="absolute bottom-40 left-16 w-8 h-8 text-accent animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-md border border-border/50 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Sri Lanka's Premier Astrology Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
            Discover Your
            <br />
            <span className="relative">
              Cosmic Path
              <div className="absolute -inset-1 bg-gradient-aurora rounded-lg blur-sm opacity-30 animate-pulse-glow" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Unlock the ancient wisdom of Sri Lankan astrology with personalized horoscope readings, 
            professional consultations, and cosmic guidance for your life's journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="cosmic" size="xl" className="group">
              <Star className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Get Your Horoscope
            </Button>
            
            <Button variant="mystical" size="xl">
              <Sparkles className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>5000+ Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
              <span>25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Authentic Sri Lankan Astrology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};