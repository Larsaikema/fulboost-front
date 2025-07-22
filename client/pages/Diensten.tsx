
import AnimatedSection from '../components/AnimatedSection';
import { Package, Globe, Zap, Truck, Users, Shield, Clock, TrendingUp } from 'lucide-react';

const Diensten = () => {
  const services = [
    {
      icon: Package,
      title: "E-commerce Fulfillment",
      description: "Van inslag tot verzending. Wij regelen alles, jij groeit. Geen gedoe, alleen resultaat.",
      features: ["Cut-off 23:59 NL", "All-in tarieven", "Real-time tracking", "Webshop integraties"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Globe,
      title: "Cross-border Fulfillment",
      description: "Europa is jouw markt. Wij zijn jouw partner. Van douane tot lokale verzending.",
      features: ["15 landen", "Douane expertise", "Lokale carriers", "EU-wide netwerk"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Zap,
      title: "Software & Integraties",
      description: "Geen IT-gedoe. Alleen volgas technologie. Koppel je webshop in 5 minuten.",
      features: ["API integraties", "Real-time dashboard", "24/7 monitoring", "Automatisering"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      icon: Truck,
      title: "Retourlogistiek",
      description: "Retourzendingen zijn geen probleem. Wij regelen het professioneel en efficiënt.",
      features: ["Retourverwerking", "Kwaliteitscontrole", "Herverpakking", "Voorraadbeheer"],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-fulboost-dark text-white">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden pt-16 pb-32 lg:pt-24 lg:pb-40">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-fulboost-dark via-fulboost-darker to-fulboost-dark opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-fulboost-red rounded-full opacity-75 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-fulboost-red rounded-full opacity-75 blur-3xl"></div>
        
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Fulfillment services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Onze
            </span>
            <br />
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">
              Diensten
            </span>
          </h1>
          <p className="text-fulboost-red font-bold text-lg mb-4">Alles wat je nodig hebt om te groeien.</p>
          <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
            Van start tot schaal. Wij regelen de logistiek, jij focust op groei. 
            Geen gedoe, alleen resultaat. Dit is wat Fulboost voor jou doet.
          </p>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
              <span className="text-sm font-bold text-fulboost-red">Wat we doen</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-white">Vier diensten, </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">één missie</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
              Jouw groei. Dat is wat we doen. Met deze vier diensten maken we het mogelijk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-fulboost-darker rounded-2xl border border-gray-800 hover:border-fulboost-red/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fulboost-dark/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-fulboost-red/20 rounded-xl">
                      <service.icon className="w-8 h-8 text-fulboost-red" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
                  <p className="text-fulboost-gray mb-6 text-lg leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-fulboost-red rounded-full mr-3"></div>
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Fulboost */}
      <AnimatedSection className="py-24 px-6 bg-fulboost-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
              <span className="text-sm font-bold text-fulboost-red">Waarom Fulboost?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-white">Het verschil dat </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">telt</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
              Dit is waarom ondernemers kiezen voor Fulboost. Dit is waarom wij anders zijn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-fulboost-dark rounded-2xl border border-gray-800">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <Clock className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">23:59 Cut-off</h3>
              <p className="text-fulboost-gray text-sm">Uniek in Nederland. Vandaag besteld, morgen verzonden.</p>
            </div>
            <div className="text-center p-6 bg-fulboost-dark rounded-2xl border border-gray-800">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <Shield className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">All-in Tarieven</h3>
              <p className="text-fulboost-gray text-sm">Geen verborgen kosten. Wat je ziet is wat je krijgt.</p>
            </div>
            <div className="text-center p-6 bg-fulboost-dark rounded-2xl border border-gray-800">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <Users className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Persoonlijke Support</h3>
              <p className="text-fulboost-gray text-sm">Geen call centers. Echte mensen die jouw business begrijpen.</p>
            </div>
            <div className="text-center p-6 bg-fulboost-dark rounded-2xl border border-gray-800">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
              <p className="text-fulboost-gray text-sm">450% gemiddelde groei bij onze klanten.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white">Klaar om te </span>
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">starten?</span>
          </h2>
          <p className="text-xl text-fulboost-gray mb-8">
            Laten we praten over welke diensten het beste passen bij jouw groei. 
            Geen verrassingen, alleen resultaat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg">
              Vraag een offerte aan
            </button>
            <button className="px-8 py-4 border-2 border-fulboost-red bg-transparent text-fulboost-red font-bold text-lg rounded-full hover:bg-fulboost-red hover:text-white transition-all duration-300">
              Praat met een expert
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Diensten; 