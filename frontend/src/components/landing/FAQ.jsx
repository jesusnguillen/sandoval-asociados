import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { faqs } from '@/data/mock';

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Resolvemos
            <span className="text-amber-500"> Tus Dudas</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de fianzas y seguros.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="border-b border-slate-100 last:border-b-0"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 transition-colors group">
                  <div className="flex items-start space-x-4 text-left">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-200 transition-colors">
                      <span className="text-sm font-bold text-amber-700">{index + 1}</span>
                    </div>
                    <span className="text-base font-semibold text-slate-900 group-hover:text-amber-600 transition-colors pr-4">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <div className="pl-12 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-4 rounded-xl bg-slate-900 text-white">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span className="text-sm">
              ¿Tienes más preguntas?{' '}
              <a href="#contacto" className="text-amber-400 font-semibold hover:underline">
                Contáctanos
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
