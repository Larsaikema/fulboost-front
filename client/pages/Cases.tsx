
import AnimatedSection from '../components/AnimatedSection';
import { TrendingUp, Package, Users, Zap } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      company: "TechGear Pro",
      title: "Van 50 naar 500 orders per dag",
      description: "TechGear Pro verkocht gaming-accessoires maar worstelde met fulfilment. Na de switch naar Fulboost groeiden ze van 50 naar 500 orders per dag in 6 maanden. Hun cut-off tijd van 23:59 maakte het verschil.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
      stats: {
        growth: "900%",
        timeframe: "6 maanden",
        orders: "500/dag"
      },
      tags: ["Gaming", "Tech", "High-volume"],
      quote: "Fulboost gaf ons de vrijheid om te groeien zonder gedoe. Eindelijk een partner die met ons meedenkt."
    },
    {
      company: "EcoStyle",
      title: "Duurzame mode, duurzame groei",
      description: "EcoStyle verkocht duurzame kleding maar hun fulfilment was allesbehalve groen. Fulboost implementeerde een volledig duurzaam fulfilment proces. Resultaat: 300% groei en 100% klanttevredenheid.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: {
        growth: "300%",
        timeframe: "12 maanden",
        orders: "200/dag"
      },
      tags: ["Fashion", "Duurzaam", "EU-wide"],
      quote: "Fulboost begrijpt dat duurzaamheid niet alleen over producten gaat, maar over het hele proces."
    },
    {
      company: "FitFuel",
      title: "Van lokale webshop naar Europese marktleider",
      description: "FitFuel verkocht sportvoeding en wilde uitbreiden naar Europa. Fulboost regelde alles: van douane tot lokale verzending. Ze groeiden van 100 naar 1000 orders per dag en zijn nu actief in 15 landen.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      stats: {
        growth: "1000%",
        timeframe: "18 maanden",
        orders: "1000/dag"
      },
      tags: ["Sport", "Voeding", "Cross-border"],
      quote: "Fulboost maakte Europa toegankelijk. Ze denken niet in grenzen, maar in mogelijkheden."
    }
  ];

  return (
    <div className="min-h-screen bg-fulboost-dark text-white">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden pt-16 pb-32 lg:pt-24 lg:pb-40">
        <div className="absolute inset-0 bg-gradient-to-r from-fulboost-dark via-fulboost-darker to-fulboost-dark opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-fulboost-red rounded-full opacity-75 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-fulboost-red rounded-full opacity-75 blur-3xl"></div>
        
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
            alt="Business success"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Succesverhalen van
            </span>
            <br />
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">
              echte volgas-ondernemers
            </span>
          </h1>
          <p className="text-fulboost-red font-bold text-lg mb-4">Geen beloftes. Alleen resultaten.</p>
          <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
            Dit zijn de ondernemers die durfden te geloven in hun groei. Die kozen voor Fulboost 
            en nooit meer terugkeken. Hun verhalen bewijzen: volgas werkt.
          </p>
        </div>
      </AnimatedSection>

      {/* Cases Grid */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Van start tot schaal</h2>
            <p className="text-fulboost-gray text-lg">Echte resultaten van echte ondernemers.</p>
          </div>
          
          <div className="space-y-24">
            {cases.map((caseItem, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.company}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fulboost-red/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="mb-6">
                    <h3 className="text-3xl font-black mb-2">{caseItem.company}</h3>
                    <h4 className="text-xl text-fulboost-red font-bold mb-4">{caseItem.title}</h4>
                    <p className="text-fulboost-gray text-lg leading-relaxed mb-6">
                      {caseItem.description}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-fulboost-darker rounded-xl">
                      <div className="text-2xl font-black text-fulboost-red mb-1">{caseItem.stats.growth}</div>
                      <div className="text-sm text-fulboost-gray">Groei</div>
                    </div>
                    <div className="text-center p-4 bg-fulboost-darker rounded-xl">
                      <div className="text-2xl font-black text-fulboost-red mb-1">{caseItem.stats.timeframe}</div>
                      <div className="text-sm text-fulboost-gray">Tijd</div>
                    </div>
                    <div className="text-center p-4 bg-fulboost-darker rounded-xl">
                      <div className="text-2xl font-black text-fulboost-red mb-1">{caseItem.stats.orders}</div>
                      <div className="text-sm text-fulboost-gray">Orders</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseItem.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-fulboost-red/20 text-fulboost-red font-bold rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="border-l-4 border-fulboost-red pl-6 italic text-fulboost-gray">
                    "{caseItem.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Results Overview */}
      <AnimatedSection className="py-24 px-6 bg-fulboost-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">De cijfers spreken</h2>
            <p className="text-fulboost-gray text-lg">Gemiddelde resultaten van onze klanten.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-fulboost-red mb-4">450%</div>
              <h3 className="text-xl font-bold mb-2">Gemiddelde groei</h3>
              <p className="text-fulboost-gray">In het eerste jaar</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-fulboost-red mb-4">23:59</div>
              <h3 className="text-xl font-bold mb-2">Cut-off tijd</h3>
              <p className="text-fulboost-gray">Uniek in Nederland</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-fulboost-red mb-4">98%</div>
              <h3 className="text-xl font-bold mb-2">Klanttevredenheid</h3>
              <p className="text-fulboost-gray">Gemeten over 12 maanden</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-fulboost-red mb-4">15</div>
              <h3 className="text-xl font-bold mb-2">Landen</h3>
              <p className="text-fulboost-gray">EU-wide verzending</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Jouw succesverhaal begint hier</h2>
          <p className="text-fulboost-gray text-lg mb-8">
            Klaar om jouw groei te versnellen? Laten we praten over hoe Fulboost jouw volgende 
            succesverhaal kan worden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg">
              Start jouw groei
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

export default Cases; 