import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  BookOpen, 
  GraduationCap,
  ArrowLeft,
  Star,
  Users,
  Globe
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import drCharithImage from "@/assets/dr-charith-mudalige.jpg";

const qualifications = [
  { degree: "BA in Anthropology", institution: "University of Sri Jayawardenepura (USJ)" },
  { degree: "Dip in Counselling", institution: "Mental Health Foundation" },
  { degree: "Dip in Psychotherapist", institution: "Mental Health Foundation" },
  { degree: "PGD in Archaeology", institution: "University of Kelaniya (UOK)" },
  { degree: "MBA in Travel and Tourism Management", institution: "London Metropolitan University (UK)" },
  { degree: "PhD in Cultural Tourism", institution: "University of Sri Jayawardenepura (USJ)" },
  { degree: "PhD in Astrology", institution: "University of Delhi (India)" }
];

const achievements = [
  {
    icon: Award,
    title: "Dual PhD Holder",
    description: "PhDs in both Astrology and Cultural Tourism from prestigious universities"
  },
  {
    icon: BookOpen,
    title: "Research Expert",
    description: "Conducted numerous research studies on astrology and spiritual power"
  },
  {
    icon: Globe,
    title: "International Education",
    description: "MBA from London Metropolitan University and PhD from University of Delhi"
  },
  {
    icon: Users,
    title: "Trusted Advisor",
    description: "Helping thousands of clients with authentic astrological guidance"
  }
];

export const Astrologer = () => {
  return (
    <div className="min-h-screen">
      {/* Star Field Background */}
      <div className="star-field" />
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-hero">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <div className="mb-8">
              <Button variant="outline" size="sm" asChild>
                <a href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </a>
              </Button>
            </div>

            {/* Main Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-cosmic">
                  <img 
                    src={drCharithImage} 
                    alt="Dr. Charith Mudalige - Professional Astrologer"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-cosmic/10" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-glow">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-accent animate-pulse" />
                    <div>
                      <div className="text-sm font-semibold">Dual PhD</div>
                      <div className="text-xs text-muted-foreground">Expert Astrologer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-md border border-border/50 rounded-full px-4 py-2 mb-4">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-muted-foreground">Your Astrological Guide</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
                    Dr. Charith Mudalige
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-6">
                    A distinguished academic and expert astrologer with extensive international qualifications 
                    and deep expertise in Sri Lankan astrological traditions.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    <Award className="w-4 h-4 mr-1" />
                    PhD in Astrology
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    PhD in Cultural Tourism
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    <Globe className="w-4 h-4 mr-1" />
                    International MBA
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-gradient-subtle">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* About Text */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    Academic Excellence & Spiritual Wisdom
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Dr. Charith Mudalige brings together an impressive academic background with extensive 
                    expertise in astrology and spiritual guidance. His journey began with a degree in 
                    Anthropology from the University of Sri Jayawardenepura, followed by a postgraduate 
                    diploma in Archaeology from the University of Kelaniya.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    His international perspective was further enhanced through an MBA in Travel and Tourism 
                    Management from London Metropolitan University. Dr. Mudalige's dedication to both 
                    academic and spiritual pursuits led him to achieve two PhDs - one in Astrology from 
                    the University of Delhi and another in Cultural Tourism from the University of Sri Jayawardenepura.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Beyond his formal education, Dr. Mudalige has conducted numerous research studies on 
                    astrology and spiritual power, making him a trusted expert who bridges ancient wisdom 
                    with modern understanding.
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Achievements</h3>
                {achievements.map((achievement, index) => (
                  <Card 
                    key={index} 
                    className="bg-card/60 border-border/50 backdrop-blur-sm p-6 group hover:shadow-cosmic transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors">
                          <achievement.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                          <p className="text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-20 px-6 bg-background/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
                Academic Qualifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A comprehensive educational journey spanning multiple disciplines and prestigious institutions 
                across Sri Lanka, India, and the United Kingdom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualifications.map((qualification, index) => (
                <Card 
                  key={index} 
                  className="bg-card/60 border-border/50 backdrop-blur-sm p-6 group hover:shadow-glow transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 text-accent rounded-lg">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2 text-foreground">
                          {qualification.degree}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {qualification.institution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-gradient-cosmic">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready for Your Consultation?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the wisdom and expertise of Dr. Charith Mudalige. 
              Book your personalized astrology consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="/#contact">
                  <Star className="w-5 h-5 mr-2" />
                  Book Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#services">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Services
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Astrologer;