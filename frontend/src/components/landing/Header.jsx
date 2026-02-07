import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-slate-900' : 'bg-white'
            }`}>
              <span className={`text-xl font-bold ${
                isScrolled ? 'text-white' : 'text-slate-900'
              }`}>S</span>
            </div>
            <div className="hidden sm:block">
              <span className={`text-lg font-semibold tracking-tight transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                SANDOVAL
              </span>
              <span className={`text-lg font-light tracking-tight transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-white/80'
              }`}>
                {' & ASOCIADOS'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{companyInfo.phone}</span>
            </a>
            <Button
              onClick={(e) => scrollToSection(e, '#contacto')}
              className={`px-6 transition-all ${
                isScrolled
                  ? 'bg-amber-500 hover:bg-amber-600 text-white'
                  : 'bg-white hover:bg-white/90 text-slate-900'
              }`}
            >
              Cotizar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block text-slate-700 font-medium py-2 hover:text-amber-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center space-x-3 text-slate-700"
            >
              <Phone className="w-5 h-5" />
              <span>{companyInfo.phone}</span>
            </a>
            <Button
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white"
            >
              Cotizar Ahora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
