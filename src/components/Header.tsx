import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Menu, 
  X, 
  Phone,
  Calendar,
  Sparkles
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-cosmic rounded-lg">
              <Star className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AstroGuide</h1>
              <p className="text-xs text-muted-foreground">Sri Lankan Astrology</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-accent">
              <Phone className="w-4 h-4 mr-2" />
              +94 77 758 1811
            </Button>
            <Button variant="cosmic" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Book Reading
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-card/60 border border-border/50"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-card/60 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 px-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full text-accent justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  +94 77 758 1811
                </Button>
                <Button variant="cosmic" size="sm" className="w-full">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Book Your Reading
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};