'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/#' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Especialidades', href: '/#especialidades' },
  { label: 'Convênios', href: '/#convenios' },
  { label: 'Contato', href: '/#contato' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Se for o link Home, role para o topo
    if (href === '/#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      return;
    }
    
    // Extrair o ID do link
    const id = href.split('#')[1];
    const element = document.getElementById(id);
    
    if (element) {
      // Fecha o menu primeiro
      setIsMenuOpen(false);
      
      // Offset fixo de 80px para desktop e 100px para mobile
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 100 : 80;
      
      // Calcula a posição do elemento em relação ao topo da página
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      
      // Rola até a posição do elemento menos o offset
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      });
    } else {
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <header className="fixed w-full top-0 bg-white z-50 shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/#" 
            className="relative w-40 h-12" 
            onClick={(e) => handleScrollTo(e, '/#')}
          >
            <Image
              src="/images/logo.png"
              alt="FisioAbreu"
              fill
              className="object-contain"
            />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#" className="text-gray-700 hover:text-primary transition-colors" onClick={(e) => handleScrollTo(e, '/#')}>
              Home
            </Link>
            <Link href="/#sobre" className="text-gray-700 hover:text-primary transition-colors" onClick={(e) => handleScrollTo(e, '/#sobre')}>
              Sobre
            </Link>
            <Link href="/#especialidades" className="text-gray-700 hover:text-primary transition-colors" onClick={(e) => handleScrollTo(e, '/#especialidades')}>
              Especialidades
            </Link>
            <Link href="/#convenios" className="text-gray-700 hover:text-primary transition-colors" onClick={(e) => handleScrollTo(e, '/#convenios')}>
              Convênios
            </Link>
            <Link href="/#contato" className="text-gray-700 hover:text-primary transition-colors" onClick={(e) => handleScrollTo(e, '/#contato')}>
              Contato
            </Link>
            <Link
              href="http://linktr.ee/FisioAbreu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Consulta
            </Link>
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-neutral-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <nav className="container py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-600 hover:text-primary transition-colors font-montserrat"
                onClick={(e) => handleScrollTo(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="http://linktr.ee/FisioAbreu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center font-montserrat"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Consulta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 