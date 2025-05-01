
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-harvest-green text-white mt-10">
      <div className="harvest-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-montserrat font-bold">HarvestConnect</span>
            </div>
            <p className="text-harvest-green-lighter mt-2 text-sm">
              Connecting farmers directly with retailers for fresher produce and fairer prices.
              Empowering agricultural communities and reducing the supply chain gap.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-harvest-green-lighter hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-harvest-green-lighter hover:text-white transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-harvest-green-lighter hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-harvest-green-lighter hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-harvest-green-lighter hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-harvest-green-lighter hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-harvest-green-lighter hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-harvest-green-lighter hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-harvest-green-lighter" />
                <span className="text-harvest-green-lighter">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-harvest-green-lighter" />
                <span className="text-harvest-green-lighter">contact@harvestconnect.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-harvest-green-lighter mt-1" />
                <span className="text-harvest-green-lighter">
                  123 Farming Lane<br />
                  Harvest Valley, CA 94123
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-harvest-green-light mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-harvest-green-lighter">
            &copy; {currentYear} HarvestConnect. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-harvest-green-lighter hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-harvest-green-lighter hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-harvest-green-lighter hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-harvest-green-lighter hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
