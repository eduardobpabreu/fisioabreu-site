'use client';

import Image from "next/image";
import Link from 'next/link';
import { ImageCarousel } from '@/components/ImageCarousel';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div>
      <ScrollToTop />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-[60vh] flex items-center pt-20 md:pt-0">
        <Image
          src="/images/IMG_9867.jpg"
          alt="FisioAbreu - Clínica de Fisioterapia"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="container relative z-10 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
            Excelência em fisioterapia e cuidados com a sua saúde
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl text-white/90">
            Tratamento personalizado com profissionais altamente qualificados para sua recuperação.
          </p>
          <Link href="http://linktr.ee/FisioAbreu" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agendar consulta
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section bg-white pt-28 md:pt-20">
        <div className="container">
          <h2 className="section-title text-[#017761]">Sobre Nós</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p>
                A FisioAbreu é uma clínica especializada em Fisioterapia, RPG, Nutrição e Massoterapia, 
                localizada em Porto Alegre. Nossa equipe é formada por profissionais altamente qualificados 
                e comprometidos com o bem-estar dos nossos pacientes.
              </p>
              <p>
                Oferecemos tratamentos personalizados, utilizando técnicas modernas e eficazes para 
                promover a recuperação e a qualidade de vida dos nossos pacientes.
              </p>
              <p>
                Nossa missão é proporcionar um atendimento humanizado e de excelência, 
                garantindo os melhores resultados para cada caso específico.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
                src="/images/IMG_9867.jpg"
                alt="Clínica FisioAbreu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="especialidades" className="section bg-[#017761] pt-28 md:pt-20">
        <div className="container">
          <h2 className="section-title text-white">Especialidades</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Fisioterapia */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#017761]">Fisioterapia</h3>
              <p className="text-[#017761] mb-6">
                Tratamentos especializados para lesões, dores crônicas e reabilitação.
              </p>
              <Link href="/especialidades/fisioterapia" className="w-full bg-[#017761] text-white px-4 py-2 rounded-lg hover:bg-[#017761]/90 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Pilates */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#017761]">Pilates</h3>
              <p className="text-[#017761] mb-6">
                Fortalecimento muscular, flexibilidade e equilíbrio corporal.
              </p>
              <Link href="/especialidades/pilates" className="w-full bg-[#017761] text-white px-4 py-2 rounded-lg hover:bg-[#017761]/90 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* RPG */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#017761]">RPG</h3>
              <p className="text-[#017761] mb-6">
                Reeducação Postural Global para correção de postura e alinhamento corporal.
              </p>
              <Link href="/especialidades/rpg" className="w-full bg-[#017761] text-white px-4 py-2 rounded-lg hover:bg-[#017761]/90 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Nutrição */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-[#017761]">Nutrição</h3>
              <p className="text-[#017761] mb-6">
                Acompanhamento nutricional personalizado para melhorar sua saúde e bem-estar.
              </p>
              <Link href="/especialidades/nutricao" className="w-full bg-[#017761] text-white px-4 py-2 rounded-lg hover:bg-[#017761]/90 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Convênios Section */}
      <section id="convenios" className="section bg-white pt-28 md:pt-20">
        <div className="container">
          <h2 className="section-title text-[#017761]">Convênios</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {/* Os logos dos convênios serão inseridos aqui */}
            {[...Array(13)].map((_, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24 transition-all duration-300 hover:scale-105 hover:border-[#4DB749] hover:border hover:shadow-md"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={`/images/convenios/logo-${index + 1}.png`}
                    alt={`Convênio ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-white pt-28 md:pt-20">
        <div className="container">
          <h2 className="section-title text-[#017761]">Nossa Clínica</h2>
          <ImageCarousel
            images={[
              {
                src: '/images/IMG_9918.jpg',
                alt: 'Sala de tratamento'
              },
              {
                src: '/images/IMG_9930.jpg',
                alt: 'Equipamentos'
              },
              {
                src: '/images/IMG_9873.jpg',
                alt: 'Clínica FisioAbreu'
              },
              {
                src: '/images/IMG_9867.jpg',
                alt: 'FisioAbreu - Clínica de Fisioterapia'
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="section bg-[#017761] text-white pt-28 md:pt-20 pb-16">
        <div className="container">
          <h2 className="section-title text-white mb-6">Nossas Unidades</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Unidade Castro Alves */}
            <div className="card text-[#017761]">
              <h3 className="text-lg font-montserrat font-bold mb-2">Clínica Castro Alves</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm leading-5">Rua Castro Alves, 142 - Independência</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="text-sm leading-5">(51) 3311-8905</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <span className="text-sm leading-5">(51) 99840-5015</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm leading-5">Segunda a sexta: 08h às 12h e 13h às 19h</span>
                </div>
              </div>
            </div>

            {/* Unidade Santana */}
            <div className="card text-[#017761]">
              <h3 className="text-lg font-montserrat font-bold mb-2">Clínica Santana</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm leading-5">Rua Santana, 657 - Santana</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="text-sm leading-5">(51) 3311-1233</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <span className="text-sm leading-5">(51) 99840-4630</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm leading-5">Segunda a sexta: 08h às 12h e 13h às 18h</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-white text-center mt-8">
            Dúvidas, sugestões ou currículo, favor enviar e-mail para: fisioabreu@fisioabreu.com.br
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#017761] py-12 border-t">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2">
                <Link 
                  href="http://linktr.ee/FisioAbreu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#017761] hover:text-[#017761]/80 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                  Linktree
                </Link>
                <Link 
                  href="https://www.instagram.com/clinicafisioabreu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#017761] hover:text-[#017761]/80 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#017761]">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                  Instagram
                </Link>
                <Link 
                  href="mailto:fisioabreu@fisioabreu.com.br"
                  className="flex items-center gap-2 text-[#017761] hover:text-[#017761]/80 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  fisioabreu@fisioabreu.com.br
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Clínica Castro Alves</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#017761]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Rua Castro Alves, 142
                </div>
                <div className="flex items-center gap-2 text-[#017761]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (51) 3311-8905
                </div>
                <div className="flex items-center gap-2 text-[#017761]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  (51) 99840-5015
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Clínica Santana</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#017761]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Rua Santana, 657
                </div>
                <div className="flex items-center gap-2 text-[#017761]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (51) 3311-1233
                </div>
                <div className="flex items-center gap-2 text-[#017761]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#017761]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  (51) 99840-4630
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-[#017761]">
            <p>© {new Date().getFullYear()} FisioAbreu. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    title: 'Fisioterapia',
    description: 'Tratamentos especializados para reabilitação e prevenção de lesões.',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: 'RPG',
    description: 'Reeducação Postural Global para alinhamento e correção postural.',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
        />
      </svg>
    ),
  },
  {
    title: 'Nutrição',
    description: 'Acompanhamento nutricional personalizado para uma vida mais saudável.',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Massoterapia',
    description: 'Técnicas de massagem terapêutica para relaxamento e bem-estar.',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

const benefits = [
  'Profissionais altamente qualificados',
  'Ambiente acolhedor e moderno',
  'Tratamentos personalizados',
  'Equipamentos de última geração',
  'Localização privilegiada',
  'Horários flexíveis',
];

const images = [
  {
    src: '/images/recepcao.jpg',
    alt: 'Recepção Acolhedora',
  },
  {
    src: '/images/consultorio.jpg',
    alt: 'Consultório Moderno',
  },
  {
    src: '/images/sala-tratamento.jpg',
    alt: 'Sala de Tratamento',
  },
];
