"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-serif font-bold text-bella-navy">
            Bella <span className="text-bella-terracotta">Casa</span>
          </Link>
          <span className="ml-2 text-bella-slate text-sm">Inspections</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-bella-slate hover:text-bella-navy transition-colors">
            Services
          </a>
          <a href="#inspector" className="text-bella-slate hover:text-bella-navy transition-colors">
            About Us
          </a>
          <a href="#benefits" className="text-bella-slate hover:text-bella-navy transition-colors">
            Benefits
          </a>
          <a href="#contact">
            <Button className="btn-primary">Schedule Inspection</Button>
          </a>
        </div>
        
        <button 
          className="md:hidden text-bella-navy" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-bella-slate hover:text-bella-navy transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#inspector" 
              className="text-bella-slate hover:text-bella-navy transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#benefits" 
              className="text-bella-slate hover:text-bella-navy transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="btn-secondary w-full">Schedule Inspection</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
