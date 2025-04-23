import Image from 'next/image'
import { MdOutlineHandshake, MdStarOutline, MdOutlineComputer } from "react-icons/md";
import { TbClipboardData } from "react-icons/tb";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-32 py-16 bg-gray-50 h-[700px] bg-[url('/banner-mobile.png')] lg:bg-[url('/banner.png')] bg-cover lg:bg-center">
        <div className="max-w-3xl 2xl:max-w-4xl">
          <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold font-Playfair text-green-700 mb-4">
            Transforme sua saúde com <br className='hidden lg:block'/> uma alimentação inteligente.
          </h1>
          <p className="mb-6 text-lg text-gray-700 max-w-xl">
            Descubra como uma nutrição personalizada pode melhorar sua energia,
            disposição e bem-estar. Agende sua consulta agora e dê o primeiro
            passo para a sua melhor versão!
          </p>
          <a
            href="#agendamento"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
          >
            Agendar Consulta
          </a>
        </div>

      </section>

      {/* Benefícios */}
      <section className="py-16 px-6 lg:px-32 text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold font-Playfair mb-20 text-green-700">Por que me escolher?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-8">
          <Benefit icon={<TbClipboardData color='#15803d' size={64}/>} title="Plano Alimentar Personalizado" />
          <Benefit icon={<MdOutlineHandshake color='#15803d' size={64}/>} title="Acompanhamento Humanizado" />
          <Benefit icon={<MdStarOutline color='#15803d' size={64}/>} title="Resultados Reais e Duradouros" />
          <Benefit icon={<MdOutlineComputer color='#15803d' size={64}/>} title="Consultas Online e Presenciais" />
        </div>
      </section>

      {/* Sobre a Nutricionista */}
      <section className="py-16 px-6 lg:px-32 bg-gray-50 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src="/about-img.jpg"
            alt="Sobre a nutricionista"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 mt-8 md:mt-0 md:pr-32 text-justify">
          <h3 className="text-2xl lg:text-3xl font-semibold font-Playfair mb-4">Prazer, sou Julia Vitória</h3>
          <p className="text-gray-700">
            Com experiência na área clínica, ajudo pacientes a conquistarem mais saúde, energia e autoestima sem dietas restritivas ou fórmulas milagrosas — apenas com ciência, empatia e um plano alimentar que respeita sua individualidade.
          </p>
          <p className="text-gray-700">
          Acredito que comer bem é um ato de autocuidado, e meu papel é caminhar com você rumo a uma relação mais leve e equilibrada com a comida.
          </p>
          <p className="text-gray-700">
          Se você busca orientação séria, personalizada e com resultados reais, será um prazer te acompanhar nessa jornada.
          </p>
          <a
            href="#agendamento"
            className="bg-green-600 text-white px-6 py-3 w-full lg:w-3/5 2xl:w-4/12 flex items-center justify-center rounded-md hover:bg-green-700"
          >
            Agendar Consulta
          </a>
        </div>
      </section>

      <section className="py-12 mb-10 px-6">
        <div className="container mx-auto flex flex-col items-center gap-10 ">
          <span className="text-3xl lg:text-4xl font-bold font-Playfair text-center text-green-700 my-10">Depoimentos de Clientes Satisfeitos</span>
          <div className=" flex flex-row flex-wrap gap-4">
            <article
              className="flex flex-col items-center gap-2 bg-green-700/10 w-full lg:w-[calc(100%/3-16px)] px-8 py-10 rounded-xl">
              <h2 className="text-lg italic text-center text-gray-600 ">"Depois de 10 Anos de Serviços, Aos 10 Anos de
                Serviços"
              </h2>
              <p className="text-lg font-bold mt-4">Maria Silva</p>
              <p className="text-sm">Vendedora</p>
            </article>
            <article
              className="flex flex-col items-center gap-2 bg-green-700/10 w-full lg:w-[calc(100%/3-16px)] px-8 py-10 rounded-xl">
              <h2 className="text-lg italic text-center text-gray-600 ">"Depois de 10 Anos de Serviços, Aos 10 Anos de
                Serviços"
              </h2>
              <p className="text-lg font-bold mt-4">Maria Silva</p>
              <p className="text-sm">Vendedora</p>
            </article>
            <article
              className="flex flex-col items-center gap-2 bg-green-700/10 w-full lg:w-[calc(100%/3-16px)] px-8 py-10 rounded-xl">
              <h2 className="text-lg italic text-center text-gray-600 ">"Depois de 10 Anos de Serviços, Aos 10 Anos de
                Serviços"
              </h2>
              <p className="text-lg font-bold mt-4">Maria Silva</p>
              <p className="text-sm">Vendedora</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="agendamento" className="py-16 px-6 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto(a) para transformar sua alimentação?
        </h2>
        <p className="mb-6">
          Agende agora sua primeira consulta com preço especial de boas-vindas!
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5581988700071&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
          target="_blank"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100"
        >
          Quero Agendar Agora
        </a>
      </section>

      {/* Rodapé */}
      <footer className="py-6 px-6 bg-gray-800 text-gray-200 text-center">
        <p>&copy; {new Date().getFullYear()} Julia vitória. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

function Benefit({ icon, title }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-4xl mb-2">{icon}</div>
      <h4 className="font-semibold text-green-700">{title}</h4>
    </div>
  )
}
