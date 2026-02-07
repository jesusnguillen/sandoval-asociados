import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';
import { companyInfo, bondTypeOptions } from '@/data/mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    bondType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, bondType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Solicitud enviada correctamente', {
      description: 'Un asesor se pondrá en contacto contigo pronto.'
    });
    
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      bondType: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone}`,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MapPin,
      label: 'Dirección',
      value: 'CDMX, México',
      href: '#',
      color: 'bg-amber-100 text-amber-600'
    }
  ];

  const benefits = [
    { icon: Clock, text: 'Respuesta en menos de 24 horas' },
    { icon: Shield, text: 'Sin compromiso de contratación' },
    { icon: CheckCircle, text: 'Asesoría personalizada gratuita' },
  ];

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Solicita Tu
            <span className="text-amber-500"> Cotización Hoy</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Completa el formulario y un asesor especializado te contactará 
            para brindarte la mejor solución.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=Hola, me interesa obtener información sobre sus servicios de fianzas.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full p-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contactar por WhatsApp</span>
            </a>

            {/* Benefits */}
            <div className="space-y-4 pt-6">
              <h4 className="font-semibold text-slate-900">Al contactarnos recibirás:</h4>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-slate-600">
                  <benefit.icon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-xl bg-slate-50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">
                        Nombre Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        required
                        className="h-12 bg-white border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-slate-700">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nombre de tu empresa"
                        className="h-12 bg-white border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Correo Electrónico *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                        className="h-12 bg-white border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Teléfono *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+52 55 1234 5678"
                        required
                        className="h-12 bg-white border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="bondType" className="text-sm font-medium text-slate-700">
                      Tipo de Fianza *
                    </label>
                    <Select value={formData.bondType} onValueChange={handleSelectChange} required>
                      <SelectTrigger className="h-12 bg-white border-slate-200 focus:border-amber-500 focus:ring-amber-500">
                        <SelectValue placeholder="Selecciona el tipo de fianza" />
                      </SelectTrigger>
                      <SelectContent>
                        {bondTypeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos más sobre tu proyecto o necesidades..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-base"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Enviando...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Enviar Solicitud</span>
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    Al enviar este formulario, aceptas nuestra{' '}
                    <a href="#" className="text-amber-600 hover:underline">Política de Privacidad</a>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
