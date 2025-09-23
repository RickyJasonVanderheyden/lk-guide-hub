import { Button } from "@/components/ui/button";
import { 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube,
  Sparkles,
  Heart
} from "lucide-react";

const services = [
  "Personal Horoscope Reading",
  "Love & Marriage Compatibility", 
  "Career & Business Astrology",
  "Property & Land Consultation",
  "Muhurat & Timing",
  "Family Astrology Sessions"
];

const quickLinks = [
  "About Us",
  "Our Services", 
  "Testimonials",
  "Contact Us",
  "Blog",
  "FAQ"
];

const resources = [
  "Astrology Guide",
  "Zodiac Signs",
  "Daily Horoscope",
  "Birth Chart Calculator",
  "Compatibility Test",
  "Astrological Calendar"
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-cosmic border-t border-primary/20 text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary-glow/20 rounded-lg">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">AstroGuide</h3>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Sri Lanka's premier astrology platform, providing authentic 
              astrological guidance for over 25 years. Discover your cosmic 
              path with our experienced astrologers.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">+94 77 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">info@atroguide.lk</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">123 Temple Road, Colombo 07</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <Button variant="mystical" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="mystical" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="mystical" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Connected with the Cosmos</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get weekly horoscopes, astrological insights, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="golden" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © 2024 AstroGuide.lk. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent animate-pulse" />
              <span>in Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};