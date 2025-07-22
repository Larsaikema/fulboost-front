
import AnimatedSection from '../components/AnimatedSection';
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';

const OverOns = () => {
  const kernwaarden = [
    "Transparantie", "Lef", "Eenvoud", "Snelheid", "Groei"
  ];

  const teamMembers = [
    {
      name: "Alex van der Berg",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "De visionair achter Fulboost. Gelooft dat kleine bedrijven de wereld kunnen veranderen."
    },
    {
      name: "Sarah Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Zorgt ervoor dat alles soepel loopt. Van 23:59 cut-off tot perfecte verzending."
    },
    {
      name: "Mark Jansen",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Bouwt de technologie die jouw groei mogelijk maakt. Geen gedoe, alleen volgas."
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
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Over
            </span>
            <br />
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">
              Fulboost
            </span>
          </h1>
          <p className="text-fulboost-red font-bold text-lg mb-4">De rebellen van de fulfilment.</p>
          <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
            Wij zijn de fulfilmentpartner die anders durft te zijn. Gedreven door transparantie, 
            snelheid en een passie voor jouw groei. Dit is ons verhaal.
          </p>
        </div>
      </AnimatedSection>

      {/* Onze Missie */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
                <span className="text-sm font-bold text-fulboost-red">Onze missie</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="text-white">Transparante, eerlijke en </span>
                <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">razendsnelle fulfilment</span>
              </h2>
              <p className="text-xl text-fulboost-gray leading-relaxed mb-6">
                Wij geloven dat kleine bedrijven de krachtigste motor achter innovatie zijn. Maar die motor hapert vaak als fulfilment traag, duur of onduidelijk is. Fulboost is hier om dat te veranderen.
              </p>
              <p className="text-xl text-fulboost-gray leading-relaxed">
                Wij zijn geen fulfilmentcentrum zoals de rest. Wij zijn de partner voor de ondernemers die willen knallen, die klaar zijn om all-in te gaan.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                alt="Business growth"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fulboost-red/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Onze Visie */}
      <AnimatedSection className="py-24 px-6 bg-fulboost-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Global expansion"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fulboost-red/20 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
                <span className="text-sm font-bold text-fulboost-red">Onze visie</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="text-white">De toekomst van </span>
                <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">fulfilment</span>
              </h2>
              <p className="text-xl text-fulboost-gray leading-relaxed mb-6">
                Wij zien een wereld waarin fulfilment geen obstakel is, maar een versneller. Waarin kleine bedrijven net zo snel kunnen groeien als grote bedrijven.
              </p>
              <p className="text-xl text-fulboost-gray leading-relaxed">
                Een wereld waarin transparantie de norm is, snelheid vanzelfsprekend, en groei voor iedereen toegankelijk.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Onze Belofte */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
              <span className="text-sm font-bold text-fulboost-red">Onze belofte</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-white">Wat je kunt verwachten van </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">Fulboost</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
              Geen verborgen kosten. Nooit. All-in tarieven per order. Cut-off tijden: 23:59 NL / 22:00 EU. 
              Support vanaf je eerste order. Webshop integraties zonder gedoe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-fulboost-darker rounded-2xl border border-gray-800">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <Target className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Geen verborgen kosten</h3>
              <p className="text-fulboost-gray text-sm">Wat je ziet is wat je krijgt. Punt.</p>
            </div>
            <div className="text-center p-6 bg-fulboost-darker rounded-2xl border border-gray-800">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <Zap className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cut-off 23:59 NL</h3>
              <p className="text-fulboost-gray text-sm">Uniek in Nederland. Vandaag besteld, morgen verzonden.</p>
            </div>
            <div className="text-center p-6 bg-fulboost-darker rounded-2xl border border-gray-800">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <Users className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Support vanaf order 1</h3>
              <p className="text-fulboost-gray text-sm">Persoonlijke begeleiding, altijd bereikbaar.</p>
            </div>
            <div className="text-center p-6 bg-fulboost-darker rounded-2xl border border-gray-800">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <Award className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Webshop integraties</h3>
              <p className="text-fulboost-gray text-sm">Shopify, WooCommerce, Magento. Koppelen we in 5 minuten.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Kernwaarden */}
      <AnimatedSection className="py-24 px-6 bg-fulboost-darker">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
            <span className="text-sm font-bold text-fulboost-red">Onze kernwaarden</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-8">Wat ons drijft</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {kernwaarden.map((kw, i) => (
              <span key={i} className="px-6 py-2 bg-fulboost-red/20 text-fulboost-red font-bold rounded-full text-lg">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Merkpersoonlijkheid */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
                <span className="text-sm font-bold text-fulboost-red">Merkpersoonlijkheid</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                <span className="text-white">Stoer, eerlijk, </span>
                <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">rebel</span>
              </h2>
              <p className="text-xl text-fulboost-gray leading-relaxed mb-6">
                Fulboost spreekt als een ervaren ondernemer met een 'doenersmentaliteit'. Geen jargon, geen poespas – wél directe taal met een knipoog.
              </p>
              <p className="text-xl text-fulboost-gray leading-relaxed">
                Durft anders te zijn: visueel én in boodschap. Voor ondernemers met lef.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-4c7b0c0b0b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team meeting"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fulboost-red/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Sectie */}
      <AnimatedSection className="py-24 px-6 bg-fulboost-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
              <span className="text-sm font-bold text-fulboost-red">Ons team</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-white">De mensen achter </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">Fulboost</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
              Een team van rebellen, doeners en groei-experts. Samen maken we jouw succes mogelijk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-fulboost-red/20"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-fulboost-red font-bold mb-4">{member.role}</p>
                <p className="text-fulboost-gray">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white">Klaar om te </span>
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">samenwerken?</span>
          </h2>
          <p className="text-xl text-fulboost-gray mb-8">
            Laten we praten over hoe Fulboost jouw groei kan versnellen. 
            Geen verrassingen, alleen resultaat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg">
              Start nú volgas
            </button>
            <button className="px-8 py-4 border-2 border-fulboost-red bg-transparent text-fulboost-red font-bold text-lg rounded-full hover:bg-fulboost-red hover:text-white transition-all duration-300">
              Vraag je prijs aan
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default OverOns; 