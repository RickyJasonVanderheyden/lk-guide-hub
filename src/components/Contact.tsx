import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Send,
  Sparkles,
  MessageCircle
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Consultation",
    description: "Speak directly with our astrologers",
    value: "+94 77 758 1811",
    action: "Call Now"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick consultation via WhatsApp",
    value: "+94 76 387 8229",
    action: "Chat Now"
  },
  {
    icon: Mail,
    title: "Email Consultation",
    description: "Detailed written reports via email",
    value: "Charithmudalige@sjp.ac.lk",
    action: "Email Us"
  }
];

const workingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "12:00 PM - 4:00 PM" },
  { day: "Public Holidays", hours: "Closed" }
];

export const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-md border border-border/50 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
            Start Your Cosmic Journey
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discover what the stars have in store for you? Reach out to our 
            experienced astrologers and begin your journey of cosmic discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/60 border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Star className="w-6 h-6 text-accent" />
                  Book Your Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input placeholder="Enter your full name" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input placeholder="+94 77 XXX XXXX" className="bg-background/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input placeholder="your@email.com" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date of Birth *</label>
                    <Input type="date" className="bg-background/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Time of Birth</label>
                    <Input type="time" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Place of Birth *</label>
                    <Input placeholder="City, Sri Lanka" className="bg-background/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Required *</label>
                  <select className="w-full p-3 bg-background/50 border border-input rounded-md">
                    <option>Personal Horoscope Reading</option>
                    <option>Love & Marriage Compatibility</option>
                    <option>Career & Business Astrology</option>
                    <option>Property & Land Consultation</option>
                    <option>Muhurat & Timing</option>
                    <option>Family Astrology Sessions</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Questions/Concerns</label>
                  <Textarea 
                    placeholder="Tell us about your specific questions or areas of concern..." 
                    className="bg-background/50 min-h-32"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cosmic" size="lg" className="flex-1">
                    <Send className="w-5 h-5 mr-2" />
                    Send Consultation Request
                  </Button>
                  <Button variant="mystical" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Direct
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-card/60 border-border/50 backdrop-blur-sm p-4 hover:shadow-cosmic transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg">
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{method.title}</div>
                        <div className="text-sm text-muted-foreground mb-1">{method.description}</div>
                        <div className="text-accent font-medium">{method.value}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Working Hours */}
            <Card className="bg-card/60 border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-sm text-muted-foreground">{schedule.day}</span>
                    <span className="text-sm font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-card/60 border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Vishwakalawa Road<br />
                  Piliyandala<br />
                  Sri Lanka
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Map
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-cosmic border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Urgent Consultation?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  For urgent matters, call our 24/7 helpline
                </p>
                <Button variant="golden" size="sm" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  +94 77 999 8888
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};