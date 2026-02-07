import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Shield
} from 'lucide-react';
import { companyInfo } from '@/data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    servicios: [
      { label: 'Fianzas Administrativas', href: '#servicios' },
      { label: 'Fianzas de Fidelidad', href: '#servicios' },
      { label: 'Fianzas Fiscales', href: '#servicios' },
      { label: 'Fianzas Judiciales', href: '#servicios' },
      { label: 'Seguros Empresariales', href: '#servicios' },
    ],
    empresa: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Testimonios', href: '#testimonios' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { label: 'Aviso de Privacidad', href: '#' },
      { label: 'Términos y Condiciones', href: '#' },
      { label: 'Política de Cookies', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                <span className="text-xl font-bold text-slate-900">S</span>
              </div>
              <div>
                <span className="text-xl font-semibold tracking-tight">SANDOVAL</span>
                <span className="text-xl font-light tracking-tight text-slate-400"> & ASOCIADOS</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              {companyInfo.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center space-x-3 text-slate-400 hover:text-amber-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>{companyInfo.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center space-x-3 text-slate-400 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-amber-500" />
              <span>Autorizado por CNSF</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <span>Agente de Seguros y Fianzas</span>
            <span className="hidden sm:inline">|</span>
            <span>Cobertura Nacional en México</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} {companyInfo.name}. Todos los derechos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
