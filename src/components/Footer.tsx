const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bella-navy text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Bella Casa Inspections</h3>
            <p className="text-gray-300 mb-4">
              Professional wind mitigation inspections serving the Greater New Orleans and Northshore areas.
              Help Louisiana homeowners save on insurance premiums through detailed assessments.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#inspector" className="text-gray-300 hover:text-white transition-colors">
                  Meet Al Spitale
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Schedule Inspection
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Phone: (504) 810-9282</li>
              <li>Email: alspitale172@gmail.com</li>
              <li>Service Area: Greater New Orleans & Northshore</li>
              <li>License: LHI# 11384</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Bella Casa Inspections. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
