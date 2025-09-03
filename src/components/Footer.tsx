const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-accent bg-clip-text text-transparent mb-4">
              Palmers Vehicle Detailing
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional vehicle detailing services in Birmingham, West Midlands. 
              Transform your vehicle with our expert care and attention to detail.
            </p>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">4.9/5</div>
              <div className="text-sm text-muted-foreground">500+ Reviews</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-primary hover:text-primary-glow transition-colors font-medium"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📍 Birmingham, West Midlands</p>
              <p>📞 +44 (0) 121 XXX XXXX</p>
              <p>✉️ info@palmersdetailing.co.uk</p>
              <div className="pt-2">
                <p className="font-medium text-foreground">Mon-Fri: 8AM-6PM</p>
                <p>Sat: 9AM-4PM • Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Palmers Vehicle Detailing. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;