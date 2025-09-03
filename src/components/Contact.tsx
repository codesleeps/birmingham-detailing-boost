import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to give your vehicle the premium treatment it deserves? Contact us today
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Detailing Service</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Phone Number" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Vehicle Make & Model" />
                <Textarea 
                  placeholder="Tell us about your vehicle and what services you're interested in..."
                  className="min-h-32"
                />
                <Button variant="premium" size="lg" className="w-full">
                  Request Quote
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 gradient-accent rounded-full" />
                    <span>📍 Birmingham, West Midlands, UK</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 gradient-accent rounded-full" />
                    <span>📞 +44 (0) 121 XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 gradient-accent rounded-full" />
                    <span>✉️ info@palmersdetailing.co.uk</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="gradient-accent bg-clip-text text-transparent font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="gradient-accent bg-clip-text text-transparent font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card gradient-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Special Offer</h3>
                <p className="text-muted-foreground mb-4">
                  Book your first full detail package and save 15%
                </p>
                <Button variant="premium" size="lg">
                  Claim Offer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;