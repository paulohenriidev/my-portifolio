import {Card} from "./card";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative grid justify-center items-center text-justify tracking-normal gap-8 pt-8 pb-12 px-4 md:grid-cols-2 lg:gap-10 max-w-6xl mx-auto"
    >
      <article className="flex flex-col items-center gap-6 md:col-span-2">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-second dark:text-white">
          Hard Skills
        </h2>
      </article>

      <Card title="Front-End">
        Desenvolvimento de interfaces responsivas e acessíveis utilizando{" "}
        <strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
        <strong>JavaScript (ES6+)</strong>. Experiência com frameworks modernos
        como <strong>React</strong>, <strong>Vite</strong> e bibliotecas de
        estilização como <strong>Styled-Components</strong>,{" "}
        <strong>Tailwind</strong>, <strong>Bootstrap</strong> e{" "}
        <strong>SASS</strong>. Foco em performance, acessibilidade e usabilidade
        (UI/UX).
      </Card>

      <Card title="Back-End">
        Conhecimento em <strong>Node.js</strong>, <strong>Express</strong> e
        bancos de dados como <strong>MongoDB</strong> e{" "}
        <strong>PostgreSQL</strong>. Desenvolvimento de APIs RESTful,
        autenticação, integração com front-end e boas práticas de segurança e
        estruturação de projetos.
      </Card>
    </section>
  );
};

export default Skills;
