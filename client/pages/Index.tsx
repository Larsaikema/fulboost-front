import AnimatedSection from "../components/AnimatedSection";
import { Zap, Package, Globe, Users, CheckCircle, ArrowRight, Star, Rocket, Shield, Clock } from 'lucide-react';

export default function Index() {
  const usps = [
    {
      icon: Zap,
      title: "Cut-off 23:59 NL",
      description: "Uniek in Nederland. Jouw orders gaan vandaag nog de deur uit."
    },
    {
      icon: Shield,
      title: "Geen verborgen kosten",
      description: "All-in tarieven. Wat je ziet is wat je krijgt. Nooit verrassingen."
    },
    {
      icon: Users,
      title: "Support vanaf order 1",
      description: "Persoonlijke begeleiding. Geen call centers, alleen echte mensen."
    },
    {
      icon: Package,
      title: "Plug & play integraties",
      description: "Shopify, WooCommerce, Magento. Koppelen we in 5 minuten."
    }
  ];

  const services = [
    {
      icon: Package,
      title: "E-commerce Fulfillment",
      description: "Van inslag tot verzending. Wij regelen alles, jij groeit.",
      features: ["Cut-off 23:59", "All-in tarieven", "Real-time tracking"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Globe,
      title: "Cross-border Fulfillment",
      description: "Europa is jouw markt. Wij zijn jouw partner.",
      features: ["15 landen", "Douane expertise", "Lokale carriers"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Zap,
      title: "Software & Integraties",
      description: "Geen IT-gedoe. Alleen volgas technologie.",
      features: ["API integraties", "Dashboard", "24/7 monitoring"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    }
  ];

  const stats = [
    { number: "450%", label: "Gemiddelde groei klanten" },
    { number: "23:59", label: "Cut-off tijd NL" },
    { number: "0€", label: "Opstartkosten" },
    { number: "98%", label: "Klanttevredenheid" }
  ];

  return (
    <div className="min-h-screen bg-fulboost-dark text-white">
      {/* HERO SECTION */}
      <AnimatedSection className="relative overflow-hidden pt-16 pb-32 lg:pt-24 lg:pb-40">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-fulboost-dark via-fulboost-darker to-fulboost-dark opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-fulboost-red rounded-full opacity-75 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-fulboost-red rounded-full opacity-75 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fulboost-red rounded-full opacity-25 blur-3xl"></div>
        
        {/* Background image removed */}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Live badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 backdrop-blur-sm">
              <div className="w-2 h-2 bg-fulboost-red rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-bold text-fulboost-red">Live fulfilment center</span>
            </div>
          </div>
          
          {/* Main headline */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Everything you need
              </span>
              <br />
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">
                to go full throttle
              </span>
            </h1>
            
            <p className="text-fulboost-red font-bold text-base sm:text-lg mb-4">Geen verrassingen. Geen vertraging. Gewoon Fulboost.</p>
            
            <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-fulboost-gray leading-relaxed mb-8 sm:mb-12 px-4">
              Fulboost is er voor ondernemers met lef. Wij zijn de rebellen van de fulfilment die alles geven voor jouw groei. 
              Transparant, razendsnel en altijd all-in. Ben je er klaar voor? Dan gaan we nú volgas.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 sm:mb-16 px-4">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-base sm:text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg hover:shadow-fulboost-red/25 hover:scale-105">
                <span className="flex items-center justify-center">
                  Start nú volgas
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-fulboost-red bg-transparent text-fulboost-red font-bold text-base sm:text-lg rounded-full hover:bg-fulboost-red hover:text-white transition-all duration-300 hover:scale-105">
                Vraag je prijs aan
              </button>
            </div>
            
            {/* Key stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 sm:p-6 bg-fulboost-darker/50 rounded-2xl border border-gray-800/50 backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-fulboost-red mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-fulboost-gray font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* USP SECTION */}
      <AnimatedSection className="relative py-16 sm:py-24 bg-gradient-to-b from-fulboost-darker to-fulboost-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-bold text-fulboost-red">Onze belofte</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-white">Geen gedoe. Geen kleine lettertjes. </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">Gewoon Fulboost.</span>
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-fulboost-gray leading-relaxed px-4">
              All-in tarieven per order. Cut-off tijden: 23:59 NL / 22:00 EU. Support vanaf je eerste order. 
              Webshop integraties zonder gedoe. Geen verborgen kosten. Nooit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-fulboost-darker rounded-2xl border border-gray-800 hover:border-fulboost-red/50 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="p-2 sm:p-3 bg-fulboost-red/20 rounded-xl">
                    <usp.icon className="w-6 h-6 sm:w-8 sm:h-8 text-fulboost-red" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{usp.title}</h3>
                <p className="text-xs sm:text-sm text-fulboost-gray">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* SERVICES SECTION */}
      <AnimatedSection className="relative py-16 sm:py-24 bg-gradient-to-b from-fulboost-dark to-fulboost-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-bold text-fulboost-red">Onze diensten</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-white">Alles wat je nodig hebt om </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">te groeien</span>
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-fulboost-gray leading-relaxed px-4">
              Van start tot schaal. Wij regelen de logistiek, jij focust op groei. 
              Geen gedoe, alleen resultaat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-fulboost-darker rounded-2xl border border-gray-800 hover:border-fulboost-red/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fulboost-dark/80 to-transparent"></div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-fulboost-red/20 rounded-xl mr-3 sm:mr-4">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-fulboost-red" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black">{service.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-fulboost-gray mb-4 sm:mb-6">{service.description}</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-fulboost-red mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* TARGET AUDIENCE */}
      <AnimatedSection className="relative py-16 sm:py-24 bg-gradient-to-b from-fulboost-darker to-fulboost-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-bold text-fulboost-red">Voor wie?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-white">Voor webshops met </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">lef</span>
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-fulboost-gray leading-relaxed mb-8 sm:mb-12 px-4">
              Kleine tot middelgrote e-commercebedrijven die willen knallen. Die geen zin hebben in vage facturen 
              en een partner zoeken die meedenkt. Producten binnen NL & EU, starters én groeiers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
              <div className="text-center p-4 sm:p-6 bg-fulboost-darker rounded-2xl border border-gray-800">
                <div className="text-3xl sm:text-4xl font-black text-fulboost-red mb-3 sm:mb-4">🚀</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Starters</h3>
                <p className="text-sm text-fulboost-gray">Net begonnen? Wij ook. Laten we samen groeien.</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-fulboost-darker rounded-2xl border border-gray-800">
                <div className="text-3xl sm:text-4xl font-black text-fulboost-red mb-3 sm:mb-4">⚡</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Groeiers</h3>
                <p className="text-sm text-fulboost-gray">Klaar om te schalen? Wij zijn er klaar voor.</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-fulboost-darker rounded-2xl border border-gray-800">
                <div className="text-3xl sm:text-4xl font-black text-fulboost-red mb-3 sm:mb-4">🌍</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Internationale</h3>
                <p className="text-sm text-fulboost-gray">Europa veroveren? Wij regelen de logistiek.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* SOCIAL PROOF */}
      <AnimatedSection className="relative py-16 sm:py-24 bg-gradient-to-b from-fulboost-dark to-fulboost-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-bold text-fulboost-red">Wat klanten zeggen</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-white">Echte resultaten van </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">echte ondernemers</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-fulboost-darker p-6 sm:p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-fulboost-red fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-fulboost-gray mb-4 sm:mb-6 italic">
                "Fulboost gaf ons de vrijheid om te groeien zonder gedoe. Eindelijk een partner die met ons meedenkt."
              </p>
              <div className="font-bold text-white text-sm sm:text-base">- TechGear Pro</div>
              <div className="text-xs sm:text-sm text-fulboost-red">900% groei in 6 maanden</div>
            </div>
            
            <div className="bg-fulboost-darker p-6 sm:p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-fulboost-red fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-fulboost-gray mb-4 sm:mb-6 italic">
                "Fulboost begrijpt dat duurzaamheid niet alleen over producten gaat, maar over het hele proces."
              </p>
              <div className="font-bold text-white text-sm sm:text-base">- EcoStyle</div>
              <div className="text-xs sm:text-sm text-fulboost-red">300% groei in 12 maanden</div>
            </div>
            
            <div className="bg-fulboost-darker p-6 sm:p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-fulboost-red fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-fulboost-gray mb-4 sm:mb-6 italic">
                "Fulboost maakte Europa toegankelijk. Ze denken niet in grenzen, maar in mogelijkheden."
              </p>
              <div className="font-bold text-white text-sm sm:text-base">- FitFuel</div>
              <div className="text-xs sm:text-sm text-fulboost-red">1000% groei in 18 maanden</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FINAL CTA */}
      <AnimatedSection className="py-16 sm:py-24 text-center bg-fulboost-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            <span className="text-white">Ben jij klaar om </span>
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">volgas te gaan?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-fulboost-gray mb-6 sm:mb-8">
            Geen verrassingen. Geen vertraging. Gewoon Fulboost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-base sm:text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg hover:shadow-fulboost-red/25 hover:scale-105">
              <span className="flex items-center justify-center">
                Start nú volgas
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-fulboost-red bg-transparent text-fulboost-red font-bold text-base sm:text-lg rounded-full hover:bg-fulboost-red hover:text-white transition-all duration-300 hover:scale-105">
              Vraag je prijs aan
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
