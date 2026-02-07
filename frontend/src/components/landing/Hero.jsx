import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Award, ChevronDown } from 'lucide-react';
import { companyInfo } from '@/data/mock';

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Shield, text: 'Respaldo Institucional' },
    { icon: Clock, text: 'Emisión en 24 hrs' },
    { icon: Award, text: 'CNSF Autorizados' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Accent Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-slate-700/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-sm text-white/80 font-medium">Autorizados por la CNSF</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Fianzas y Seguros con
              <span className="block text-amber-400 mt-2">Respaldo Real</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {companyInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                onClick={(e) => scrollToSection(e, '#contacto')}
                className="h-14 px-8 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-base group"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={(e) => scrollToSection(e, '#servicios')}
                className="h-14 px-8 border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-base backdrop-blur-sm"
              >
                Ver Servicios
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-white/70">
                  <feature.icon className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Tu Mejor Garantía</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Protegemos tu patrimonio y garantizamos el cumplimiento de tus obligaciones contractuales.
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{i}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-slate-400">+8,500 clientes satisfechos</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-white shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Tiempo de Respuesta</p>
                    <p className="text-sm font-bold text-slate-900">24 Horas</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-white shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Satisfacción</p>
                    <p className="text-sm font-bold text-slate-900">99.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={(e) => scrollToSection(e, '#servicios')}
          className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
