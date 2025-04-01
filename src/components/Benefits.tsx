
import { DollarSign, Shield, Award } from "lucide-react";
import { BenefitItem } from "../assets/types";

const Benefits = () => {
  const benefits: BenefitItem[] = [
    {
      title: "Save Money",
      description: "Louisiana homeowners can save up to $1,000 or more annually on insurance premiums.",
      icon: "DollarSign"
    },
    {
      title: "State Mandated",
      description: "Since January 2009, wind mitigation credits are mandated by the Louisiana Department of Insurance.",
      icon: "Shield"
    },
    {
      title: "Professional Service",
      description: "Licensed and certified inspector with extensive experience in wind mitigation surveys.",
      icon: "Award"
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "DollarSign":
        return <DollarSign className="h-8 w-8" />;
      case "Shield":
        return <Shield className="h-8 w-8" />;
      case "Award":
        return <Award className="h-8 w-8" />;
      default:
        return <Award className="h-8 w-8" />;
    }
  };

  return (
    <section id="benefits" className="section-padding bg-bella-sand/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">Why Choose Wind Mitigation Inspection?</h2>
          <p className="text-bella-slate text-lg">
            We help you identify all eligible discounts that can significantly reduce 
            your insurance premiums while ensuring your home is better prepared for severe weather.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bella-navy text-white mb-6">
                {renderIcon(benefit.icon)}
              </div>
              <h3 className="text-xl font-serif font-bold text-bella-navy mb-3">
                {benefit.title}
              </h3>
              <p className="text-bella-slate">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
