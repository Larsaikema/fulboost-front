import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Waarom Fulboost", href: "/waarom" },
    { name: "Diensten", href: "/diensten" },
    { name: "Prijzen", href: "/prijzen" },
    { name: "Cases", href: "/cases" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'auto';
  };

  const openMenu = () => {
    setIsOpen(true);
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-fulboost-dark/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-black text-fulboost-red">FULBOOST</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-fulboost-red ${
                  location.pathname === item.href
                    ? "text-fulboost-red"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/offerte"
              className="px-4 py-2 bg-fulboost-red text-white font-bold rounded-full hover:bg-fulboost-red-dark transition-colors"
            >
              Vraag offerte aan
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={(open) => open ? openMenu() : closeMenu()}>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-300 hover:text-white transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-fulboost-dark border-l border-gray-800">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-800">
                    <div className="text-xl font-black text-fulboost-red">FULBOOST</div>
                    <button 
                      onClick={closeMenu}
                      className="p-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 p-4">
                    <div className="space-y-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={closeMenu}
                          className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                            location.pathname === item.href
                              ? "text-fulboost-red bg-fulboost-red/10"
                              : "text-gray-300 hover:text-white hover:bg-gray-800"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-4 border-t border-gray-800">
                    <Link
                      to="/offerte"
                      onClick={closeMenu}
                      className="block w-full px-4 py-3 bg-fulboost-red text-white font-bold text-center rounded-full hover:bg-fulboost-red-dark transition-colors"
                    >
                      Vraag offerte aan
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 