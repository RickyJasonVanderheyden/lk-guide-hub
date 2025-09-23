import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Heart, 
  Briefcase, 
  Home, 
  Star, 
  Users, 
  Clock,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Personal Horoscope Reading",
    description: "Comprehensive birth chart analysis with detailed predictions for your future",
    features: ["Birth chart analysis", "Personality insights", "Career guidance", "Health predictions"],
    price: "From LKR 2,500",
    popular: true
  },
  {
    icon: Heart,
    title: "Love & Marriage Compatibility",
    description: "Discover relationship compatibility and find your perfect match through astrology",
    features: ["Partner compatibility", "Marriage timing", "Relationship advice", "Family harmony"],
    price: "From LKR 3,500",
    popular: false
  },
  {
    icon: Briefcase,
    title: "Career & Business Astrology",
    description: "Professional guidance for career decisions and business ventures",
    features: ["Career direction", "Business timing", "Investment advice", "Success periods"],
    price: "From LKR 4,000",
    popular: false
  },
  {
    icon: Home,
    title: "Property & Land Consultation",
    description: "Astrological guidance for property purchases and construction timing",
    features: ["Property selection", "Construction timing", "Vastu consultation", "Land evaluation"],
    price: "From LKR 3,000",
    popular: false
  },
  {
    icon: Calendar,
    title: "Muhurat & Timing",
    description: "Auspicious timing for important life events and ceremonies",
    features: ["Wedding muhurat", "Business opening", "Travel timing", "Religious ceremonies"],
    price: "From LKR 1,500",
    popular: false
  },
  {
    icon: Users,
    title: "Family Astrology Sessions",
    description: "Complete family horoscope analysis and generational insights",
    features: ["Family compatibility", "Child naming", "Education guidance", "Health analysis"],
    price: "From LKR 5,000",
    popular: false
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-md border border-border/50 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
            Professional Astrology Services
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From personal horoscopes to business consultations, discover our comprehensive 
            range of authentic Sri Lankan astrology services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative group transition-all duration-300 hover:scale-105 hover:shadow-cosmic border-border/50 backdrop-blur-sm ${
                service.popular 
                  ? 'bg-gradient-cosmic border-primary/30 shadow-glow' 
                  : 'bg-card/60'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-aurora text-foreground px-4 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${
                    service.popular 
                      ? 'bg-primary-glow/20 text-primary-glow' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
                    <div className="text-accent font-semibold">{service.price}</div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.popular ? "golden" : "mystical"} 
                  className="w-full"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-cosmic rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
              Need a Custom Consultation?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Have specific questions or need a personalized astrology session? 
              Our experienced astrologers are here to guide you.
            </p>
            <Button variant="golden" size="lg">
              <Users className="w-5 h-5 mr-2" />
              Contact Our Astrologers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};