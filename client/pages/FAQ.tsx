
import AnimatedSection from '../components/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { HelpCircle, Zap, Package, Globe, Calculator } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      category: "Algemeen",
      icon: HelpCircle,
      questions: [
        {
          question: "Wat maakt Fulboost anders dan andere fulfilmentpartners?",
          answer: "Wij zijn de rebellen van de fulfilment. Geen verborgen kosten, cut-off tot 23:59 (uniek in Nederland), en een team dat echt met je meedenkt. Wij geloven in transparantie, snelheid en groei. Geen gedoe, alleen resultaat."
        },
        {
          question: "Hoe snel kan ik beginnen met Fulboost?",
          answer: "Binnen 24 uur heb je een persoonlijke offerte. Na akkoord ben je binnen een week live. Geen opstartkosten, geen gedoe. Gewoon beginnen met groeien."
        },
        {
          question: "Zijn er verborgen kosten?",
          answer: "Nee. Punt. Wat je ziet is wat je krijgt. Geen verrassingen, geen extra kosten. Alleen duidelijke, all-in tarieven die groeien met jouw business."
        }
      ]
    },
    {
      category: "Prijzen & Betaling",
      icon: Calculator,
      questions: [
        {
          question: "Hoe werken jullie prijzen?",
          answer: "Simpel: één prijs per order. Alles inbegrepen. Inslag, opslag, verpakking, verzending. Geen verrassingen, alleen groei. Onze tarieven schalen automatisch met jouw volume."
        },
        {
          question: "Zijn er opstartkosten?",
          answer: "Nee. 0€ opstartkosten. Wij geloven dat groei geen drempels moet hebben. Gewoon beginnen en groeien."
        },
        {
          question: "Hoe vaak factureren jullie?",
          answer: "Maandelijks, achteraf. Geen voorschotten, geen gedoe. Je betaalt alleen voor wat je gebruikt."
        }
      ]
    },
    {
      category: "Fulfilment & Verzending",
      icon: Package,
      questions: [
        {
          question: "Wat is jullie cut-off tijd?",
          answer: "23:59 voor Nederland. 22:00 voor EU. Uniek in Nederland. Jouw orders gaan vandaag nog de deur uit."
        },
        {
          question: "Welke verzendmethoden bieden jullie?",
          answer: "Alles wat je nodig hebt: PostNL, DHL, UPS, en lokale carriers in heel Europa. Wij kiezen de beste optie voor jouw producten en klanten."
        },
        {
          question: "Hoe snel verwerken jullie orders?",
          answer: "Binnen 2 uur na ontvangst van je order. Sneller bestaat niet. Wij begrijpen dat snelheid cruciaal is voor jouw klanten."
        }
      ]
    },
    {
      category: "Integraties & Software",
      icon: Zap,
      questions: [
        {
          question: "Met welke webshops kunnen jullie koppelen?",
          answer: "Shopify, WooCommerce, Magento, Lightspeed, en nog veel meer. Koppelen we in 5 minuten. Geen IT-gedoe, alleen volgas."
        },
        {
          question: "Heb ik toegang tot een dashboard?",
          answer: "Ja. Real-time inzicht in voorraad, orders, en kosten. Altijd weten waar je aan toe bent. Transparantie is onze belofte."
        },
        {
          question: "Kunnen jullie custom integraties maken?",
          answer: "Ja. Jouw business is uniek. Jouw integratie ook. Wij bouwen wat je nodig hebt om te groeien."
        }
      ]
    },
    {
      category: "Internationaal",
      icon: Globe,
      questions: [
        {
          question: "Verzenden jullie naar het buitenland?",
          answer: "Ja. Heel Europa. Van Amsterdam tot Athene. Wij regelen douane, lokale verzending, en alles wat je nodig hebt om internationaal te groeien."
        },
        {
          question: "Hoe gaan jullie om met douane?",
          answer: "Wij regelen alles. Douane, documenten, lokale carriers. Jij focust op groei, wij regelen de logistiek."
        },
        {
          question: "Zijn er extra kosten voor internationale verzending?",
          answer: "Nee. All-in tarieven gelden ook voor internationale verzending. Geen verrassingen, alleen groei."
        }
      ]
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
              Veelgestelde
            </span>
            <br />
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">
              vragen
            </span>
          </h1>
          <p className="text-fulboost-red font-bold text-lg mb-4">Geen verrassingen. Alleen antwoorden.</p>
          <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
            Alles wat je wilt weten over Fulboost. Direct, eerlijk, en zonder poespas. 
            Kan je het antwoord niet vinden? Neem contact op. Wij zijn er voor je.
          </p>
        </div>
      </AnimatedSection>

      {/* FAQ Categories */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Alles wat je moet weten</h2>
            <p className="text-fulboost-gray text-lg">Van prijzen tot verzending. Van integraties tot internationale groei.</p>
          </div>
          
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-fulboost-darker rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-fulboost-red/20 rounded-xl mr-4">
                    <category.icon className="w-8 h-8 text-fulboost-red" />
                  </div>
                  <h3 className="text-2xl font-black">{category.category}</h3>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-700 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-bold text-lg hover:text-fulboost-red transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-fulboost-gray leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quick Facts */}
      <AnimatedSection className="py-24 px-6 bg-fulboost-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">De cijfers spreken</h2>
            <p className="text-fulboost-gray text-lg">Geen beloftes. Alleen feiten.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-fulboost-red mb-4">23:59</div>
              <h3 className="text-xl font-bold mb-2">Cut-off NL</h3>
              <p className="text-fulboost-gray">Uniek in Nederland</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-fulboost-red mb-4">2 uur</div>
              <h3 className="text-xl font-bold mb-2">Orderverwerking</h3>
              <p className="text-fulboost-gray">Van order tot verzending</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-fulboost-red mb-4">15</div>
              <h3 className="text-xl font-bold mb-2">Landen</h3>
              <p className="text-fulboost-gray">EU-wide verzending</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-fulboost-red mb-4">0€</div>
              <h3 className="text-xl font-bold mb-2">Opstartkosten</h3>
              <p className="text-fulboost-gray">Gewoon beginnen</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Still Have Questions */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Nog vragen?</h2>
          <p className="text-fulboost-gray text-lg mb-8">
            Kan je het antwoord niet vinden? Geen probleem. Wij zijn er voor je. 
            Direct contact, geen wachtrijen, alleen antwoorden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg">
              Neem contact op
            </button>
            <button className="px-8 py-4 border-2 border-fulboost-red bg-transparent text-fulboost-red font-bold text-lg rounded-full hover:bg-fulboost-red hover:text-white transition-all duration-300">
              Vraag offerte aan
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default FAQ; 