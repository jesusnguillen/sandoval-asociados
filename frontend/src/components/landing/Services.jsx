import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileCheck, 
  Shield, 
  Receipt, 
  Scale, 
  Building2, 
  BadgeCheck,
  ArrowRight,
  Check
} from 'lucide-react';
import { services } from '@/data/mock';

const iconMap = {
  FileCheck,
  Shield,
  Receipt,
  Scale,
  Building2,
  BadgeCheck,
};

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Soluciones en Fianzas
            <span className="text-amber-500"> y Seguros</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de productos financieros respaldados por las principales 
            afianzadoras y aseguradoras de México.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            const isHovered = hoveredId === service.id;

            return (
              <Card
                key={service.id}
                className={`group relative overflow-hidden border-0 shadow-sm transition-all duration-300 cursor-pointer ${
                  isHovered ? 'shadow-xl -translate-y-1' : 'hover:shadow-lg'
                }`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    isHovered ? 'bg-amber-500' : 'bg-slate-100'
                  }`}>
                    <IconComponent className={`w-7 h-7 transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-slate-700'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-500">
                        <Check className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors group/btn"
                  >
                    Solicitar Información
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </CardContent>

                {/* Hover Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-amber-500 transition-transform duration-300 origin-left ${
                  isHovered ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            ¿No encuentras lo que buscas? Contáctanos y te asesoramos.
          </p>
          <Button
            onClick={scrollToContact}
            className="h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white font-medium"
          >
            Hablar con un Asesor
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
