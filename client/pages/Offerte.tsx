"use client";

import AnimatedSection from '../components/AnimatedSection';
import { Calculator, Zap, CheckCircle, Rocket } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const quoteSchema = z.object({
  companyName: z.string().min(2, 'Bedrijfsnaam moet minimaal 2 karakters bevatten'),
  contactPerson: z.string().min(2, 'Contactpersoon moet minimaal 2 karakters bevatten'),
  email: z.string().email('Voer een geldig e-mailadres in'),
  website: z.string().optional(),
  monthlyOrders: z.string().min(1, 'Selecteer je maandelijkse orderaantal'),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const Offerte = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema)
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/.netlify/functions/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Offerte aanvraag verzonden! We sturen je binnen 24 uur een persoonlijke offerte.');
        reset();
      } else {
        toast.error(result.error || 'Er is een fout opgetreden. Probeer het later opnieuw.');
      }
    } catch (error) {
      console.error('Quote form error:', error);
      toast.error('Er is een fout opgetreden. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const orderRanges = [
    { value: "0-50", label: "0-50 orders/maand" },
    { value: "50-200", label: "50-200 orders/maand" },
    { value: "200-500", label: "200-500 orders/maand" },
    { value: "500-1000", label: "500-1000 orders/maand" },
    { value: "1000+", label: "1000+ orders/maand" }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Transparante prijzen",
      description: "Geen verborgen kosten. Wat je ziet is wat je krijgt."
    },
    {
      icon: Zap,
      title: "Snelle setup",
      description: "Binnen 24 uur een persoonlijke offerte. Geen gedoe."
    },
    {
      icon: CheckCircle,
      title: "All-in service",
      description: "Van inslag tot verzending. Wij regelen alles."
    },
    {
      icon: Rocket,
      title: "Groeigarantie",
      description: "Onze tarieven schalen met jouw business."
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
              Persoonlijke
            </span>
            <br />
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">
              offerte
            </span>
          </h1>
          <p className="text-fulboost-red font-bold text-lg mb-4">Geen standaard prijzen. Alleen jouw prijs.</p>
          <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
            Jouw business is uniek. Jouw fulfilment ook. Vertel ons wat je nodig hebt en wij maken 
            een offerte die perfect past bij jouw groei-ambities.
          </p>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Waarom een persoonlijke offerte?</h2>
            <p className="text-fulboost-gray text-lg">Omdat wij geloven in maatwerk, niet in standaard oplossingen.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-fulboost-darker rounded-2xl border border-gray-800 hover:border-fulboost-red/50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-fulboost-red/20 rounded-xl">
                    <benefit.icon className="w-8 h-8 text-fulboost-red" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-fulboost-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quote Form */}
      <AnimatedSection className="py-24 px-6 bg-fulboost-darker">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Vraag je offerte aan</h2>
            <p className="text-fulboost-gray text-lg">Vertel ons over jouw business. Wij maken een offerte op maat.</p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-bold mb-2">
                  Bedrijfsnaam *
                </label>
                <input
                  {...register('companyName')}
                  type="text"
                  id="companyName"
                  className="w-full px-4 py-3 bg-fulboost-dark border border-gray-700 rounded-lg focus:border-fulboost-red focus:outline-none text-white"
                  placeholder="Jouw bedrijf"
                />
                {errors.companyName && (
                  <p className="text-red-400 text-sm mt-1">{errors.companyName.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-bold mb-2">
                  Contactpersoon *
                </label>
                <input
                  {...register('contactPerson')}
                  type="text"
                  id="contactPerson"
                  className="w-full px-4 py-3 bg-fulboost-dark border border-gray-700 rounded-lg focus:border-fulboost-red focus:outline-none text-white"
                  placeholder="Jouw naam"
                />
                {errors.contactPerson && (
                  <p className="text-red-400 text-sm mt-1">{errors.contactPerson.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-fulboost-dark border border-gray-700 rounded-lg focus:border-fulboost-red focus:outline-none text-white"
                  placeholder="jouw@email.nl"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-bold mb-2">
                  Website (optioneel)
                </label>
                <input
                  {...register('website')}
                  type="url"
                  id="website"
                  className="w-full px-4 py-3 bg-fulboost-dark border border-gray-700 rounded-lg focus:border-fulboost-red focus:outline-none text-white"
                  placeholder="https://jouwwebsite.nl"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="monthlyOrders" className="block text-sm font-bold mb-2">
                Maandelijkse orders *
              </label>
              <select
                {...register('monthlyOrders')}
                id="monthlyOrders"
                className="w-full px-4 py-3 bg-fulboost-dark border border-gray-700 rounded-lg focus:border-fulboost-red focus:outline-none text-white"
              >
                <option value="">Selecteer je orderaantal</option>
                {orderRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
              {errors.monthlyOrders && (
                <p className="text-red-400 text-sm mt-1">{errors.monthlyOrders.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Extra informatie (optioneel)
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-fulboost-dark border border-gray-700 rounded-lg focus:border-fulboost-red focus:outline-none text-white resize-none"
                placeholder="Vertel ons meer over jouw business, producten, of specifieke wensen..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Versturen...' : 'Vraag offerte aan'}
              </button>
            </div>
          </form>
        </div>
      </AnimatedSection>

      {/* What Happens Next */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Wat gebeurt er daarna?</h2>
            <p className="text-fulboost-gray text-lg">Geen gedoe, alleen actie.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-fulboost-red mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Persoonlijke offerte</h3>
              <p className="text-fulboost-gray">Binnen 24 uur ontvang je een offerte op maat voor jouw business.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-fulboost-red mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Gratis consult</h3>
              <p className="text-fulboost-gray">We bespreken jouw wensen en maken een plan dat past bij jouw groei.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-fulboost-red mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Start volgas</h3>
              <p className="text-fulboost-gray">Geen opstartkosten, geen gedoe. Gewoon beginnen met groeien.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 px-6 bg-fulboost-darker">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Klaar om volgas te gaan?</h2>
          <p className="text-fulboost-gray text-lg mb-8">
            Jouw groei wacht niet. Wij ook niet. Laten we praten over jouw volgende stap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg">
              Start nú volgas
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

export default Offerte; 