import React, { useState, useEffect, useRef } from 'react';
import { stats } from '@/data/mock';

const AnimatedCounter = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    
    hasAnimated.current = true;
    const numericTarget = parseFloat(target.replace(/,/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  const formatNumber = (num) => {
    if (target.includes(',')) {
      return Math.floor(num).toLocaleString();
    }
    if (target.includes('.')) {
      return num.toFixed(1);
    }
    return Math.floor(num);
  };

  return (
    <span>
      {formatNumber(count)}{suffix}
    </span>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="nosotros" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-4">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Números que Respaldan
            <span className="text-amber-400"> Nuestra Experiencia</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Más de dos décadas construyendo relaciones de confianza con empresas 
            y profesionales en toda la República Mexicana.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </span>
              </div>
              <div className="h-1 w-12 bg-amber-500 mx-auto mb-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-3">Cobertura Nacional</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Atendemos clientes en los 32 estados de la República Mexicana con la misma 
              calidad y rapidez de servicio.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-3">Alianzas Estratégicas</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trabajamos con las principales afianzadoras autorizadas por la CNSF para 
              ofrecer las mejores condiciones.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-3">Asesoría Experta</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nuestro equipo de especialistas te guía en cada paso para encontrar la 
              solución ideal para tu caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
