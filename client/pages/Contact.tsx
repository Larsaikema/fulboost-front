"use client";

import AnimatedSection from '../components/AnimatedSection';
import { Mail, Phone, MapPin, Clock, MessageSquare, Zap } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Naam moet minimaal 2 karakters bevatten'),
  email: z.string().email('Voer een geldig e-mailadres in'),
  company: z.string().min(2, 'Bedrijfsnaam moet minimaal 2 karakters bevatten'),
  message: z.string().min(10, 'Bericht moet minimaal 10 karakters bevatten'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    toast.success('Bericht verzonden! We nemen binnen 24 uur contact met je op.');
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@fulboost.nl",
      description: "Voor alle vragen en support"
    },
    {
      icon: Phone,
      title: "Telefoon",
      value: "+31 (0)85 303 1234",
      description: "Direct contact tijdens kantooruren"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Jagerserf 32, Ermelo",
      description: "Ons fulfilment center"
    },
    {
      icon: Clock,
      title: "Openingstijden",
      value: "Ma-Vr: 08:00-18:00",
      description: "Support beschikbaar tot 23:59"
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
              Klaar om te
            </span>
            <br />
            <span className="bg-gradient-to-r from-fulboost-red to-fulboost-red-dark bg-clip-text text-transparent">
              praten?
            </span>
          </h1>
          <p className="text-fulboost-red font-bold text-lg mb-4">Wij ook. Laten we volgas gaan.</p>
          <p className="max-w-3xl mx-auto text-xl text-fulboost-gray leading-relaxed">
            Geen wachtrijen, geen gedoe. Direct contact met mensen die begrijpen wat je nodig hebt. 
            Jouw groei is onze missie. Laten we praten.
          </p>
        </div>
      </AnimatedSection>

      {/* Contact Info */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Direct contact</h2>
            <p className="text-fulboost-gray text-lg">Wij zijn er voor je. Altijd.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-fulboost-darker rounded-2xl border border-gray-800 hover:border-fulboost-red/50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-fulboost-red/20 rounded-xl">
                    <info.icon className="w-8 h-8 text-fulboost-red" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-fulboost-red font-bold mb-2">{info.value}</p>
                <p className="text-fulboost-gray text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection className="py-24 px-6 bg-fulboost-darker">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Stuur ons een bericht</h2>
            <p className="text-fulboost-gray text-lg">Vertel ons wat je nodig hebt. Wij regelen de rest.</p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                  Naam *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-fulboost-dark border border-gray-700 rounded-lg focus:border-fulboost-red focus:outline-none text-white"
                  placeholder="Jouw naam"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
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
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-bold mb-2">
                Bedrijfsnaam *
              </label>
              <input
                {...register('company')}
                type="text"
                id="company"
                className="w-full px-4 py-3 bg-fulboost-dark border border-gray-700 rounded-lg focus:border-fulboost-red focus:outline-none text-white"
                placeholder="Jouw bedrijf"
              />
              {errors.company && (
                <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Bericht *
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-fulboost-dark border border-gray-700 rounded-lg focus:border-fulboost-red focus:outline-none text-white resize-none"
                placeholder="Vertel ons wat je nodig hebt..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-fulboost-red-dark to-fulboost-red text-white font-bold text-lg rounded-full hover:from-fulboost-red-darker hover:to-fulboost-red-dark transition-all duration-300 shadow-lg"
              >
                Verstuur bericht
              </button>
            </div>
          </form>
        </div>
      </AnimatedSection>

      {/* Why Contact Us */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Waarom Fulboost?</h2>
            <p className="text-fulboost-gray text-lg">Omdat wij anders durven te zijn.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <Zap className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Snelle reactie</h3>
              <p className="text-fulboost-gray">Binnen 24 uur antwoord. Geen wachtrijen, alleen actie.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <MessageSquare className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Direct contact</h3>
              <p className="text-fulboost-gray">Geen call centers. Echte mensen die jouw business begrijpen.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-fulboost-red/20 rounded-xl">
                  <Clock className="w-8 h-8 text-fulboost-red" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Support tot 23:59</h3>
              <p className="text-fulboost-gray">Jouw business stopt niet. Onze support ook niet.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact; 