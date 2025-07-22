
import AnimatedSection from "../components/AnimatedSection";
import { Zap, Shield, Users, CheckCircle, ArrowRight, Star, Target, Rocket, TrendingUp, Globe, Clock, Award } from 'lucide-react';

export default function Waarom() {
  const philosophy = [
    {
      icon: Shield,
      title: "Transparantie",
      description: "Geen verborgen kosten, geen verrassingen. Wat je ziet is wat je krijgt. Punt.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Snelheid",
      description: "Cut-off 23:59 NL. Uniek in Nederland. Jouw orders gaan vandaag nog de deur uit.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Jouw groei is onze missie. Wij denken met je mee, niet voor je.",
      color: "from-red-600 to-red-700"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Razendsnelle levering",
      description: "Voor 23:59 besteld, morgen in huis. Verhoog je conversie met de snelste levertijden van Nederland.",
      benefit: "23:59 cut-off"
    },
    {
      icon: TrendingUp,
      title: "Schaalbare oplossingen",
      description: "Van 10 naar 10.000 orders per maand? Geen probleem. Ons systeem groeit moeiteloos met je mee.",
      benefit: "0-1000+ orders"
    },
    {
      icon: Globe,
      title: "Naadloze integraties",
      description: "Shopify, WooCommerce, Magento. Koppelen we in 5 minuten. Geen IT-gedoe, alleen volgas.",
      benefit: "5 min setup"
    },
    {
      icon: Users,
      title: "Persoonlijke support",
      description: "Geen call centers. Echte mensen die jouw business begrijpen. Support vanaf je eerste order.",
      benefit: "Direct contact"
    },
    {
      icon: Target,
      title: "All-in tarieven",
      description: "Één prijs per order. Alles inbegrepen. Geen verrassingen, alleen groei.",
      benefit: "Geen extra kosten"
    },
    {
      icon: Award,
      title: "Proven track record",
      description: "450% gemiddelde groei bij onze klanten. Echte resultaten van echte ondernemers.",
      benefit: "450% groei"
    }
  ];

  const comparison = [
    {
      feature: "Prijsmodel",
      fulboost: "All-in per order",
      traditional: "Complex, verborgen kosten",
      fulboostIcon: "✅",
      traditionalIcon: "❌"
    },
    {
      feature: "Contractduur",
      fulboost: "Maandelijks opzegbaar",
      traditional: "Lange-termijn contracten",
      fulboostIcon: "✅",
      traditionalIcon: "❌"
    },
    {
      feature: "Cut-off tijd",
      fulboost: "23:59 NL (uniek)",
      traditional: "17:00-18:00",
      fulboostIcon: "✅",
      traditionalIcon: "❌"
    },
    {
      feature: "Opstartkosten",
      fulboost: "0€",
      traditional: "€500-2000",
      fulboostIcon: "✅",
      traditionalIcon: "❌"
    },
    {
      feature: "Software",
      fulboost: "Modern, real-time dashboard",
      traditional: "Verouderde systemen",
      fulboostIcon: "✅",
      traditionalIcon: "❌"
    },
    {
      feature: "Support",
      fulboost: "Persoonlijke fulfilmentcoach",
      traditional: "Anonieme klantenservice",
      fulboostIcon: "✅",
      traditionalIcon: "❌"
    }
  ];

  return (
    <div className="min-h-screen bg-fulboost-dark text-white">
      {/* HERO SECTION */}
      <AnimatedSection className="relative overflow-hidden pt-16 pb-32 lg:pt-24 lg:pb-40">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-fulboost-dark via-fulboost-darker to-fulboost-dark opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-fulboost-red rounded-full opacity-75 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-fulboost-red rounded-full opacity-75 blur-3xl animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
            <span className="text-sm font-bold text-fulboost-red">Waarom Fulboost?</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Gebouwd voor
            </span>
            <br />
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">
              groei
            </span>
          </h1>
          
          <p className="text-fulboost-red font-bold text-lg mb-4">Omdat wij anders durven te zijn.</p>
          
          <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
            Wij zijn niet zomaar een fulfilment-partner. Wij zijn de rebellen die de regels durven te breken. 
            Gedreven door transparantie, snelheid en een passie voor jouw groei. Ben je er klaar voor?
          </p>
        </div>
      </AnimatedSection>

      {/* ONZE FILOSOFIE */}
      <AnimatedSection className="relative py-24 bg-gradient-to-b from-fulboost-darker to-fulboost-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
              <span className="text-sm font-bold text-fulboost-red">Onze filosofie</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-white">Drie pijlers die </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">het verschil maken</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
              Dit is waarom wij anders zijn. Dit is waarom wij werken. Dit is Fulboost.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((pillar, index) => (
              <div key={index} className="text-center p-8 bg-fulboost-darker rounded-2xl border border-gray-800 hover:border-fulboost-red/50 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-fulboost-red/20 to-fulboost-red-dark/20 rounded-2xl">
                    <pillar.icon className="w-10 h-10 text-fulboost-red" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{pillar.title}</h3>
                <p className="text-fulboost-gray leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* VOORDELEN */}
      <AnimatedSection className="relative py-24 bg-gradient-to-b from-fulboost-dark to-fulboost-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
              <span className="text-sm font-bold text-fulboost-red">De Fulboost voordelen</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-white">Waarom kiezen voor </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">Fulboost?</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
              Geen beloftes. Alleen resultaten. Dit is wat je krijgt als je kiest voor de rebellen van de fulfilment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-fulboost-darker p-8 rounded-2xl border border-gray-800 hover:border-fulboost-red/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-fulboost-red/20 rounded-xl mr-4">
                    <advantage.icon className="w-8 h-8 text-fulboost-red" />
                  </div>
                  <div className="bg-fulboost-red/20 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-fulboost-red">{advantage.benefit}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-fulboost-gray leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* VERGELIJKINGSTABEL */}
      <AnimatedSection className="relative py-24 bg-gradient-to-b from-fulboost-darker to-fulboost-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
              <span className="text-sm font-bold text-fulboost-red">De vergelijking</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-white">Fulboost vs. </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">Traditioneel</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
              Zie het verschil. Voel het verschil. Kies het verschil.
            </p>
          </div>
          
          <div className="bg-fulboost-darker rounded-2xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="p-6 text-left font-bold text-white">Feature</th>
                    <th className="p-6 text-center font-bold text-fulboost-red">Fulboost</th>
                    <th className="p-6 text-center font-bold text-fulboost-gray">Traditioneel</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-gray-800 last:border-b-0">
                      <td className="p-6 font-bold text-white">{row.feature}</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl">{row.fulboostIcon}</span>
                          <span className="text-white">{row.fulboost}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl">{row.traditionalIcon}</span>
                          <span className="text-fulboost-gray">{row.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* SOCIAL PROOF */}
      <AnimatedSection className="relative py-24 bg-gradient-to-b from-fulboost-dark to-fulboost-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 border border-fulboost-red/30 rounded-full bg-fulboost-red/10 mb-8">
              <span className="text-sm font-bold text-fulboost-red">Wat klanten zeggen</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-white">Echte resultaten van </span>
              <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">echte ondernemers</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-fulboost-darker p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-fulboost-red fill-current" />
                ))}
              </div>
              <p className="text-fulboost-gray mb-6 italic text-lg">
                "Fulboost is de enige fulfilmentpartner die echt met ons meedenkt. Ze begrijpen wat groei betekent en maken het mogelijk."
              </p>
              <div className="font-bold text-white">- Sarah van TechGear Pro</div>
              <div className="text-sm text-fulboost-red">900% groei in 6 maanden</div>
            </div>
            
            <div className="bg-fulboost-darker p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-fulboost-red fill-current" />
                ))}
              </div>
              <p className="text-fulboost-gray mb-6 italic text-lg">
                "Eindelijk een partner die transparant is over kosten. Geen verrassingen, alleen groei. Fulboost is anders."
              </p>
              <div className="font-bold text-white">- Mark van EcoStyle</div>
              <div className="text-sm text-fulboost-red">300% groei in 12 maanden</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FINAL CTA */}
      <AnimatedSection className="py-24 text-center bg-fulboost-darker">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white">Klaar om te </span>
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">groeien?</span>
          </h2>
          <p className="text-xl text-fulboost-gray mb-8">
            Ontdek wat Fulboost voor jouw webshop kan betekenen. Geen verrassingen, alleen resultaat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg hover:shadow-fulboost-red/25 hover:scale-105">
              <span className="flex items-center">
                Vraag direct een offerte aan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 border-2 border-fulboost-red bg-transparent text-fulboost-red font-bold text-lg rounded-full hover:bg-fulboost-red hover:text-white transition-all duration-300 hover:scale-105">
              Praat met een expert
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
} 