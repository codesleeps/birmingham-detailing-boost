import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Exterior Detail",
    price: "From £45",
    description: "Complete exterior wash, clay bar treatment, polish, and protective wax",
    features: ["Hand wash & dry", "Clay bar treatment", "Polish & wax", "Tire shine", "Window cleaning"],
    popular: false
  },
  {
    title: "Interior Detail",
    price: "From £65",
    description: "Deep interior cleaning including seats, carpets, dashboard, and leather treatment",
    features: ["Vacuum & shampoo", "Leather conditioning", "Dashboard treatment", "Window cleaning", "Air freshener"],
    popular: false
  },
  {
    title: "Full Detail Package",
    price: "From £95",
    description: "Complete interior and exterior detailing for the ultimate vehicle transformation",
    features: ["Everything from exterior", "Everything from interior", "Engine bay cleaning", "Headlight restoration", "6-month guarantee"],
    popular: true
  },
  {
    title: "Premium Ceramic Coating",
    price: "From £199",
    description: "Long-lasting protection with professional ceramic coating application",
    features: ["Paint correction", "Ceramic coating", "2-year protection", "Hydrophobic finish", "UV protection"],
    popular: false
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional vehicle detailing services tailored to keep your car looking pristine
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative transition-premium hover:shadow-premium ${
                service.popular ? 'ring-2 ring-accent shadow-glow' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-accent px-4 py-1 rounded-full text-sm font-semibold text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <div className="text-3xl font-bold gradient-accent bg-clip-text text-transparent">
                  {service.price}
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 gradient-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={service.popular ? "premium" : "default"} 
                  className="w-full"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;