
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircle, Star, Zap, Rocket } from 'lucide-react';

const Prijzen = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "€3,95",
      period: "per order",
      range: "0-200 orders/maand",
      description: "Voor ondernemers die net beginnen. Geen verrassingen, alleen groei.",
      icon: Star,
      features: [
        "Inslag van goederen",
        "Opslag (2 maanden gratis)",
        "Verpakking (standaard materiaal)",
        "Verzending NL",
        "Webshopkoppeling",
        "Cut-off tijd: 23:59 (NL), 22:00 (EU)",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Groei",
      price: "€3,45",
      period: "per order",
      range: "200-1000 orders/maand",
      description: "Voor webshops die klaar zijn om te knallen. All-in, geen gedoe.",
      icon: Zap,
      features: [
        "Alles uit Starter pakket",
        "Inclusief verzendkorting",
        "Maandelijkse performance rapportage",
        "Priority email support",
        "Korting op extra services",
        "Dedicated account manager"
      ],
      highlighted: true
    },
    {
      name: "Volgas",
      price: "€2,95",
      period: "per order",
      range: "1000+ orders/maand",
      description: "Voor de echte volgas-ondernemers. Wij zijn jouw groei-partner.",
      icon: Rocket,
      features: [
        "Alles uit Groei pakket",
        "Priority support (24/7)",
        "Extra opslag inbegrepen",
        "Persoonlijk fulfilmentcoach",
        "Custom integraties",
        "Exclusieve features",
        "Directe lijn naar management"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-fulboost-dark text-white">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden pt-16 pb-32 lg:pt-24 lg:pb-40">
        <div className="absolute inset-0 bg-gradient-to-r from-fulboost-dark via-fulboost-darker to-fulboost-dark opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-fulboost-red rounded-full opacity-75 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-fulboost-red rounded-full opacity-75 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Transparante
            </span>
            <br />
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">
              all-in prijzen
            </span>
          </h1>
          <p className="text-fulboost-red font-bold text-lg mb-4">Geen verborgen kosten. Nooit.</p>
          <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
            Wij geloven in eerlijkheid. Wat je ziet is wat je krijgt. Geen verrassingen, 
            geen extra kosten. Alleen duidelijke, all-in tarieven die groeien met jouw business.
          </p>
        </div>
      </AnimatedSection>

      {/* Pricing Grid */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Kies jouw volgas-pakket</h2>
            <p className="text-fulboost-gray text-lg">Van start tot schaal. Wij groeien met je mee.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-fulboost-darker border-fulboost-red shadow-2xl shadow-fulboost-red/20 scale-105' 
                    : 'bg-fulboost-darker border-gray-800 hover:border-fulboost-red/50'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-fulboost-red text-white px-6 py-2 rounded-full text-sm font-bold">
                      Meest gekozen
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-fulboost-red/20 rounded-xl">
                      <plan.icon className="w-8 h-8 text-fulboost-red" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                  <p className="text-fulboost-gray mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-fulboost-red">{plan.price}</span>
                    <span className="text-fulboost-gray"> {plan.period}</span>
                  </div>
                  <p className="text-sm text-fulboost-gray">{plan.range}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-fulboost-red mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 font-bold rounded-full transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white hover:from-fulboost-red-darker hover:to-fulboost-red-dark shadow-lg'
                    : 'border-2 border-fulboost-red bg-transparent text-fulboost-red hover:bg-fulboost-red hover:text-white'
                }`}>
                  Start met {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Custom Solutions */}
      <AnimatedSection className="py-24 px-6 bg-fulboost-darker">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Custom oplossingen nodig?</h2>
          <p className="text-fulboost-gray text-lg mb-8">
            Jouw business is uniek. Jouw fulfilment ook. Laten we praten over een oplossing 
            die perfect past bij jouw groei-ambities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg">
              Praat met een expert
            </button>
            <button className="px-8 py-4 border-2 border-fulboost-red bg-transparent text-fulboost-red font-bold text-lg rounded-full hover:bg-fulboost-red hover:text-white transition-all duration-300">
              Vraag custom offerte
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Fulboost */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Waarom Fulboost?</h2>
            <p className="text-fulboost-gray text-lg">Omdat wij anders durven te zijn.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-fulboost-red mb-4">23:59</div>
              <h3 className="text-xl font-bold mb-2">Cut-off NL</h3>
              <p className="text-fulboost-gray">Uniek in Nederland. Jouw orders gaan vandaag nog de deur uit.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-fulboost-red mb-4">0€</div>
              <h3 className="text-xl font-bold mb-2">Opstartkosten</h3>
              <p className="text-fulboost-gray">Geen drempels. Geen gedoe. Gewoon beginnen.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-fulboost-red mb-4">All-in</div>
              <h3 className="text-xl font-bold mb-2">Transparante tarieven</h3>
              <p className="text-fulboost-gray">Wat je ziet is wat je krijgt. Geen verrassingen.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Prijzen; 