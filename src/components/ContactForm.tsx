"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using Next.js API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Inspection Request Received",
          description: `Thanks ${formData.name}! We'll contact you shortly to confirm your inspection.`,
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Request Failed",
        description: "There was a problem submitting your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="heading-lg mb-6">Schedule Your Inspection</h2>
              <p className="text-bella-slate mb-8">
                Ready to start saving on your home insurance? Schedule your wind mitigation 
                inspection today and take the first step toward significant premium reductions.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-bella-navy rounded-full p-2 mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-bella-navy">Phone</h3>
                    <p className="text-bella-slate">(504) 810-9282</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bella-navy rounded-full p-2 mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-bella-navy">Email</h3>
                    <p className="text-bella-slate">alspitale172@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bella-navy rounded-full p-2 mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-bella-navy">Service Area</h3>
                    <p className="text-bella-slate">Greater New Orleans area</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-bella-sand/50 p-5 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-bella-terracotta mr-2" />
                  <h3 className="text-lg font-medium text-bella-navy">Availability</h3>
                </div>
                <p className="mt-2 text-bella-slate">
                  We offer flexible scheduling Monday through Saturday, 8am - 5pm.
                </p>
              </div>
            </div>
            
            <div className="bg-bella-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold text-bella-navy mb-4">Request an Inspection</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-bella-slate mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-bella-slate mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-bella-slate mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-bella-slate mb-1">
                      Property Address
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-bella-slate mb-1">
                      Additional Information
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="btn-secondary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Schedule Inspection"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;