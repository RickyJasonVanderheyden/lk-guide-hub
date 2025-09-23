import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Calendar, 
  Star,
  BookOpen,
  Shield,
  Heart,
  Globe
} from "lucide-react";
import consultationImage from "@/assets/astrologer-consultation.jpg";

const stats = [
  { icon: Users, number: "5000+", label: "Happy Clients", color: "text-accent" },
  { icon: Calendar, number: "25+", label: "Years Experience", color: "text-primary-glow" },
  { icon: Star, number: "4.9", label: "Rating", color: "text-accent" },
  { icon: BookOpen, number: "10000+", label: "Readings Done", color: "text-primary-glow" }
];

const values = [
  {
    icon: Shield,
    title: "Authentic Tradition",
    description: "Rooted in ancient Sri Lankan astrological traditions passed down through generations"
  },
  {
    icon: Heart,
    title: "Compassionate Guidance",
    description: "We provide caring, empathetic support during life's most important decisions"
  },
  {
    icon: Globe,
    title: "Modern Accessibility",
    description: "Traditional wisdom meets modern convenience with online consultations"
  },
  {
    icon: Award,
    title: "Proven Accuracy",
    description: "Thousands of successful predictions and satisfied clients across Sri Lanka"
  }
];

export const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-md border border-border/50 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">About AstroGuide</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
            Sri Lanka's Trusted Astrology Platform
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 25 years, we've been guiding individuals and families through life's 
            journey with authentic Sri Lankan astrology and cosmic wisdom.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ancient Wisdom, Modern Solutions
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At AstroGuide, we bridge the gap between traditional Sri Lankan astrology and 
                contemporary life challenges. Our team of experienced astrologers combines 
                centuries-old wisdom with modern insights to provide accurate, meaningful 
                guidance for your life's most important decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're seeking clarity about relationships, career, health, or spiritual 
                growth, our authentic astrological services are designed to illuminate your path 
                and empower your choices.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="cosmic" size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Our Story
              </Button>
              <Button variant="mystical" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-cosmic group">
              <img 
                src={consultationImage} 
                alt="Professional astrology consultation"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-cosmic/10 group-hover:bg-gradient-cosmic/5 transition-all duration-500" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-glow">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent animate-pulse" />
                <div>
                  <div className="text-sm font-semibold">Trusted Platform</div>
                  <div className="text-xs text-muted-foreground">Since 1998</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/60 border-border/50 backdrop-blur-sm text-center p-6">
              <CardContent className="p-0">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="bg-card/60 border-border/50 backdrop-blur-sm p-6 group hover:shadow-cosmic transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};