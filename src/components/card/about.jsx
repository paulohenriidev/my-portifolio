import { CardAbout } from "./card";
import photoAb from "../../assets/portifolio/about.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative grid justify-center items-center gap-8 pt-8 pb-12 px-4 md:grid-cols-2 lg:gap-10 max-w-5xl mx-auto"
    >
      <article className="flex flex-col items-center gap-6 md:col-span-2">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-second dark:text-white">
          Sobre mim
        </h2>
      </article>

      <CardAbout img={photoAb}>
      </CardAbout>
        <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex text-center justify">
          {" "}
          Olá, sou o Paulo, tenho 23 anos e sou desenvolvedor front-end. Tenho
          experiência em criar interfaces responsivas e acessíveis, utilizando
          as mais recentes tecnologias web. Comecei minha jornada no
          desenvolvimento web em setembro de 2024, e desde então venho
          aprimorando minhas habilidades em JavaScript, React e outras
          tecnologias modernas. Meu diferencial é a capacidade de ter um codigo
          limpo e organizado, sempre buscando a melhor solução para cada
          desafio. Sou apaixonado por criar experiências de usuário envolventes
          e funcionais, sempre buscando aprender e me atualizar nas melhores
          práticas do mercado. Estou sempre em busca de novos desafios e
          oportunidades para crescer profissionalmente. Acredito que a
          colaboração e o trabalho em equipe são fundamentais para o sucesso de
          qualquer projeto, e estou aberto a novas ideias e abordagens.
        </div>
    </section>
  );
};
export default About;
