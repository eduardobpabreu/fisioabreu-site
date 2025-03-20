import Image from "next/image";
import Link from 'next/link';

export default function FisioterapiaPage() {
  return (
    <div>
      {/* Menu */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="FisioAbreu Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link 
            href="/#especialidades"
            className="text-[#017761] hover:text-[#017761]/80 transition-colors"
          >
            Voltar para Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <Image
          src="/images/IMG_9867.jpg"
          alt="Fisioterapia - FisioAbreu"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fisioterapia
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Tratamentos especializados para lesões, dores crônicas e reabilitação.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="section bg-white pt-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p>
                Com mais de 60 anos de experiência em fisioterapia, nossa clínica em Porto Alegre oferece 
                tratamentos personalizados para restaurar movimentos, aliviar dores e promover a saúde integral. 
                Nossa equipe especializada utiliza técnicas modernas e comprovadas para cada necessidade, 
                desde reabilitação pós-operatória até tratamentos preventivos. Venha conhecer o cuidado e a 
                excelência que fizeram de nós uma referência em fisioterapia na região!
              </p>
              <p>
                Aceitamos os seguintes convênios: Amil, Assefaz, Bradesco Saúde, Cabergs, Cassi, GEAP, 
                Life Saúde, Mediservice, MedSênior, Petrobras, Postal Saúde, Saúde Pas e Saúde Moinhos. 
                Caso não possua nenhum destes planos, favor entrar em contato para consultar os valores.
              </p>
              <Link 
                href="http://linktr.ee/FisioAbreu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary bg-[#4DB749] text-white hover:bg-[#4DB749]/90 inline-flex items-center gap-2"
              >
                Agendar Consulta
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/IMG_9867.jpg"
                alt="Fisioterapia FisioAbreu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos */}
      <section className="section bg-neutral-50 pt-16">
        <div className="container">
          <h2 className="section-title text-[#017761] mb-12">Nossos Tratamentos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ortopedia e Traumatologia */}
            <div className="card p-0 overflow-hidden">
              <div className="p-6 h-24">
                <h3 className="text-xl font-semibold text-[#017761]">Ortopedia e Traumatologia</h3>
              </div>
              <div className="relative h-48">
                <Image
                  src="/images/especialidades/fisio1.png"
                  alt="Ortopedia e Traumatologia"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Reumatologia */}
            <div className="card p-0 overflow-hidden">
              <div className="p-6 h-24">
                <h3 className="text-xl font-semibold text-[#017761]">Reumatologia</h3>
              </div>
              <div className="relative h-48">
                <Image
                  src="/images/especialidades/fisio2.png"
                  alt="Reumatologia"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Neurologia */}
            <div className="card p-0 overflow-hidden">
              <div className="p-6 h-24">
                <h3 className="text-xl font-semibold text-[#017761]">Neurologia</h3>
              </div>
              <div className="relative h-48">
                <Image
                  src="/images/especialidades/fisio3.png"
                  alt="Neurologia"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Medicina Esportiva */}
            <div className="card p-0 overflow-hidden">
              <div className="p-6 h-24">
                <h3 className="text-xl font-semibold text-[#017761]">Medicina Esportiva</h3>
              </div>
              <div className="relative h-48">
                <Image
                  src="/images/especialidades/fisio4.png"
                  alt="Medicina Esportiva"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#017761] text-white pt-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Agende sua Consulta</h2>
            <p className="text-lg mb-8 text-white">
              Entre em contato conosco para agendar sua avaliação e dar o primeiro passo 
              em direção à sua recuperação.
            </p>
            <Link 
              href="http://linktr.ee/FisioAbreu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary bg-white text-[#017761] hover:bg-white/90"
            >
              Agendar agora
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
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