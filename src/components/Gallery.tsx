import mercedesBefore from "@/assets/mercedes-before.jpg";
import mercedesAfter from "@/assets/mercedes-after.jpg";
import audiBefore from "@/assets/audi-before.jpg";
import audiAfter from "@/assets/audi-after.jpg";

const Gallery = () => {
  const beforeAfterImages = [
    {
      before: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      description: "BMW Interior Restoration"
    },
    {
      before: mercedesBefore,
      after: mercedesAfter,
      description: "Mercedes Exterior Polish"
    },
    {
      before: audiBefore,
      after: audiAfter,
      description: "Audi Paint Correction"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-accent bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the transformation we achieve with every vehicle we detail
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((item, index) => (
            <div key={index} className="group">
              <div className="gradient-card rounded-xl p-6 shadow-card transition-premium hover:shadow-premium">
                <h3 className="text-xl font-semibold mb-4 text-center">{item.description}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground mb-2">BEFORE</p>
                    <img 
                      src={item.before} 
                      alt={`${item.description} before`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium gradient-accent bg-clip-text text-transparent mb-2">AFTER</p>
                    <img 
                      src={item.after} 
                      alt={`${item.description} after`}
                      className="w-full h-40 object-cover rounded-lg shadow-glow"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see your vehicle transformed?
          </p>
          <div className="inline-flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-accent opacity-80 border-2 border-background" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">4.9/5</div>
              <div className="text-sm text-muted-foreground">500+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;