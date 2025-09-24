import { CardProjects } from "./card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative grid justify-center items-center gap-8 pt-8 pb-12 px-4 md:grid-cols-2 lg:gap-10 max-w-6xl mx-auto "
    >
      <article className="flex flex-col items-center gap-6 md:col-span-2  ">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-second dark:text-white">
          Projetos
        </h2>
      </article>    
      <CardProjects
        title="Conversor de Moedas"
        img="src\assets\projects\conversor-de-moedas.png"
      >
        conversão de valores de real (BRL) para outras moedas, como dólar
        americano (USD) e libra esterlina (GBP). O valor digitado pelo usuário é
        convertido com base em taxas de câmbio em tempo real.
        
        <div className="p-4 md:p-6">
          <a
            className="cursor-pointer py-2 px-6 rounded-lg text-second"
            href="https://conversor-de-moedas-ds8o.onrender.com"
            target="_blank"
          >
            Visualizar deploy
          </a>
          <a
            className="cursor-pointer py-2 px-6 rounded-lg text-second"
            href="https://github.com/paulohenriidev/conversor-de-moedas"
            target="_blank"
          >
            Visualizar repositório
          </a>
        </div>
      </CardProjects>
    </section>
  );
};

export default Projects;
