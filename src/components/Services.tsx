import { 
  ClipboardCheck, 
  HomeIcon, 
  ArrowDownToLine, 
  ShieldAlert, 
  Link, 
  FileCheck
} from "lucide-react";
import { ServiceItem } from "../assets/types";

const Services = () => {
  const serviceItems: ServiceItem[] = [
    {
      title: "Roof covering",
      description: "Comprehensive assessment of materials, age, and installation quality",
      icon: "HomeIcon"
    },
    {
      title: "Roof deck attachment",
      description: "Detailed evaluation of how securely the roof is fastened to the structure",
      icon: "ArrowDownToLine"
    },
    {
      title: "Roof-to-wall connection",
      description: "Analysis of how your roof attaches to the walls for maximum stability",
      icon: "Link"
    },
    {
      title: "Secondary water barrier",
      description: "Identification of extra protection measures under your roof",
      icon: "ShieldAlert"
    },
    {
      title: "Opening protection",
      description: "Examination of windows, doors, and their impact resistance capabilities",
      icon: "ClipboardCheck"
    },
    {
      title: "Building code compliance",
      description: "Complete assessment of construction standards and compliance",
      icon: "FileCheck"
    }
  ];

  // Function to render the correct icon based on the icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "HomeIcon":
        return <HomeIcon className="h-6 w-6" />;
      case "ArrowDownToLine":
        return <ArrowDownToLine className="h-6 w-6" />;
      case "Link":
        return <Link className="h-6 w-6" />;
      case "ShieldAlert":
        return <ShieldAlert className="h-6 w-6" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="h-6 w-6" />;
      case "FileCheck":
        return <FileCheck className="h-6 w-6" />;
      default:
        return <ClipboardCheck className="h-6 w-6" />;
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">Our Wind Mitigation Inspection Process</h2>
          <p className="text-bella-slate text-lg">
            Wind mitigation inspection is a detailed assessment of your home&apos;s wind-resistant 
            features. The inspection takes roughly an hour and identifies specific construction 
            aspects that help reduce losses in the event of a windstorm.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-bella-sand/30 p-6 rounded-lg border border-bella-sand hover:shadow-md transition-shadow"
            >
              <div className="text-bella-terracotta mb-4">
                {renderIcon(item.icon)}
              </div>
              <h3 className="text-xl font-serif font-bold text-bella-navy mb-2">
                {item.title}
              </h3>
              <p className="text-bella-slate">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
