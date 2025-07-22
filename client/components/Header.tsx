import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const navLinks = [
    { href: "/waarom", text: "Waarom Fulboost" },
    { href: "/diensten", text: "Diensten" },
    { href: "/prijzen", text: "Prijzen" },
    { href: "/cases", text: "Cases" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 px-6 py-6 lg:px-8 bg-fulboost-dark/80 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-black tracking-tight text-white">FULBOOST</span>
          <span className="text-2xl font-black text-fulboost-red">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="text-white hover:text-fulboost-red transition-colors">
              {link.text}
            </Link>
          ))}
          <Link to="/offerte" className="px-6 py-2 bg-fulboost-red text-white font-bold rounded-full hover:bg-fulboost-red-dark transition-all">
            Offerte aanvragen
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-white" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-fulboost-darker border-l-gray-800">
              <nav className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="text-white text-lg hover:text-fulboost-red transition-colors">
                    {link.text}
                  </Link>
                ))}
                <Link to="/offerte" className="px-6 py-3 bg-fulboost-red text-white font-bold rounded-full hover:bg-fulboost-red-dark transition-all text-center">
                  Offerte aanvragen
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 