
import { CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Inspector = () => {
  return (
    <section id="inspector" className="section-padding bg-bella-navy text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <h2 className="heading-lg text-white mb-4">Meet Your Inspector</h2>
            <h3 className="text-xl font-medium mb-6">Al Spitale, Licensed Home Inspector</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-bella-terracotta mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">License: LHI# 11384</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-bella-terracotta mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">LSUCCC/OSFM # U02908</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail size={20} className="text-bella-terracotta mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">alspitale172@gmail.com</p>
                </div>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-bella-terracotta pl-4 italic mb-8">
              "My mission is to help Louisiana homeowners save money on their insurance premiums 
              through thorough and accurate wind mitigation inspections. I take pride in delivering 
              detailed reports that maximize your potential savings."
            </blockquote>
            
            <div className="space-y-4">
              <h4 className="font-medium">Serving Greater New Orleans area</h4>
              <a href="#contact">
                <Button className="btn-secondary inline-flex items-center">
                  <Phone size={16} className="mr-2" /> Schedule With Al Today
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:order-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-bella-terracotta/20 rounded-full absolute -bottom-4 -right-4"></div>
              <img 
                src="/lovable-uploads/3ccedcb6-254b-4d8b-ba65-c9dba2d41af2.png" 
                alt="Al Spitale, Licensed Home Inspector" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full relative z-10 border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspector;
