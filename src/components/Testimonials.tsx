import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nishantha Perera",
    location: "Colombo",
    rating: 5,
    text: "The accuracy of the horoscope reading was incredible. The astrologer predicted major changes in my career, and everything happened exactly as foretold. Highly recommend AstroGuide!",
    service: "Personal Horoscope Reading"
  },
  {
    name: "Chamari Silva",
    location: "Kandy",
    rating: 5,
    text: "Found my perfect life partner through their compatibility analysis. The marriage timing was spot on, and we're happily married now. Thank you for your guidance!",
    service: "Love & Marriage Compatibility"
  },
  {
    name: "Rohan Fernando",
    location: "Galle",
    rating: 5,
    text: "The business astrology consultation helped me choose the right time to launch my company. Within a year, we achieved success beyond my expectations.",
    service: "Career & Business Astrology"
  },
  {
    name: "Malika Jayawardena",
    location: "Negombo",
    rating: 5,
    text: "The muhurat timing for our house warming was perfect. The family astrology session gave us valuable insights about our children's future as well.",
    service: "Family Astrology Sessions"
  },
  {
    name: "Pradeep Rathnayake",
    location: "Matara",
    rating: 5,
    text: "Professional, accurate, and truly caring. The astrologer understood my concerns and provided practical guidance that changed my life for the better.",
    service: "Personal Horoscope Reading"
  },
  {
    name: "Sanduni Wickramasinghe",
    location: "Anuradhapura",
    rating: 5,
    text: "The online consultation was convenient and detailed. Received comprehensive written report with predictions. Everything was explained clearly and professionally.",
    service: "Online Consultation"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-md border border-border/50 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Client Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our astrological guidance has transformed the lives of thousands 
            of clients across Sri Lanka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/60 border-border/50 backdrop-blur-sm p-6 group hover:shadow-cosmic hover:scale-105 transition-all duration-300 relative"
            >
              <CardContent className="p-0">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-accent/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <div className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                      {testimonial.service}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-aurora/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-cosmic rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};