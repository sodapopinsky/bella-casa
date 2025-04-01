
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-bella-sand to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/70 px-3 py-1 rounded-full text-bella-navy border border-bella-navy/20">
              <ShieldCheck size={16} className="text-bella-terracotta" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            
            <h1 className="heading-xl">
              Save Money on Your Home Insurance with Wind Mitigation Inspection
            </h1>
            
            <p className="text-lg text-bella-slate">
              Louisiana homeowners can save thousands on insurance premiums through our 
              professional wind mitigation surveys. Our detailed assessments identify 
              all eligible discounts for your property.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button className="btn-primary w-full sm:w-auto">Schedule Inspection</Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="w-full sm:w-auto border-bella-navy text-bella-navy hover:bg-bella-navy hover:text-white">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2940&auto=format&fit=crop"
              alt="House inspection" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
