import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-detailing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Premium Vehicle
          <span className="block gradient-accent bg-clip-text text-transparent">
            Detailing Services
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Transform your vehicle with our professional detailing services in Birmingham. 
          Excellence in every detail, satisfaction guaranteed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="premium" size="lg" className="text-lg px-8 py-4">
            Book Your Detail
          </Button>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            View Services
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent">500+</div>
            <div className="text-white/80">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent">5 Years</div>
            <div className="text-white/80">Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-accent bg-clip-text text-transparent">100%</div>
            <div className="text-white/80">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;