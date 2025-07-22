import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { title: "Bedrijf", links: [{ text: "Over Ons", href: "/over-ons" }, { text: "Cases", href: "/cases" }, { text: "Contact", href: "/contact" }] },
    { title: "Diensten", links: [{ text: "Fulfillment", href: "/diensten" }, { text: "Prijzen", href: "/prijzen" }, { text: "Integraties", href: "/diensten" }] },
    { title: "Legal", links: [{ text: "Privacybeleid", href: "/privacy" }, { text: "Algemene Voorwaarden", href: "/voorwaarden" }] },
  ];
  const kernwaarden = ["Transparantie", "Lef", "Eenvoud", "Snelheid", "Groei"];
  return (
    <footer className="bg-fulboost-darker text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Slogan */}
        <div className="col-span-1">
          <Link to="/" className="flex items-center mb-4">
            <span className="text-2xl font-black tracking-tight text-white">FULBOOST</span>
            <span className="text-2xl font-black text-fulboost-red">.</span>
          </Link>
          <p className="text-fulboost-red font-bold mb-2">Everything you need to go full throttle.</p>
          <p className="text-fulboost-gray">Jouw groei, onze missie. Geen verrassingen. Geen vertraging. Gewoon Fulboost.</p>
        </div>
        {/* Links */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="font-bold text-white mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-fulboost-gray hover:text-fulboost-red transition-colors">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
          <p className="text-fulboost-gray text-sm">&copy; {new Date().getFullYear()} Fulboost. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {kernwaarden.map((kw, i) => (
              <span key={i} className="px-4 py-1 bg-fulboost-red/20 text-fulboost-red font-bold rounded-full text-xs">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 