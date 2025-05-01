
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="sticky top-0 w-full bg-white/90 backdrop-blur-sm z-40 border-b border-border">
      <div className="harvest-container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-harvest-green" />
          <span className="text-xl font-montserrat font-bold text-harvest-green">HarvestConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-medium text-gray-600 hover:text-harvest-green transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Authentication Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-harvest-green text-harvest-green hover:bg-harvest-green hover:text-white">
            <Link to="/login">Log In</Link>
          </Button>
          <Button className="bg-harvest-green hover:bg-harvest-green-light text-white">
            <Link to="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col space-y-6 mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-600 hover:text-harvest-green transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-4 pt-4">
                <Button variant="outline" className="border-harvest-green text-harvest-green hover:bg-harvest-green hover:text-white w-full">
                  <Link to="/login" className="w-full">Log In</Link>
                </Button>
                <Button className="bg-harvest-green hover:bg-harvest-green-light text-white w-full">
                  <Link to="/register" className="w-full">Register</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
