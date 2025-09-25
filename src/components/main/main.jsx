import Skills from "../card/skills";
import Projects from "../card/projects";
import About from "../card/about";

const Main = ({ title, subtitle, children }) => {
  return (
    <main>
      <section
        id="hero"
        className="relative grid justify-center items-center gap-8 pt-30 pb-12 md:grid-cols-2 md:py-50 lg:gap-10"
      >
        <div className="opacity: 1; transform: none;">
          <aside className="flex items-center justify-center order-first md:order-last">
            <img
              className="w-42 h-48 sm:w-50 sm:h-54 md:w-58 md:h-64 lg:w-66 lg:h-72 rounded-[2rem] md:rounded-[2.5rem] object-cover shadow-[0_0_40px_hsl(var(--accent)/0.35)]"
              src="src/assets/portifolio/photo.jpeg"
              loading="lazy"
              alt="Foto do Paulo Henrique, Desenvolvedor FullStack"
            />
          </aside>
        </div>

        <div className="opacity: 1; transform: none;">
          <article className="flex flex-col gap-8 w-140 items-center justify-center">
            <h1 className=" text-center lg:text-6xl text-5xl md:text-5xl sm:text-4xl font-extrabold">
              {title} <br />
              <strong className="text-textPrimary">{subtitle}</strong>
            </h1>
            <p className="text-center text-gray-500">{children}</p>
          </article>
        </div>
      </section>
      <Skills />
      <Projects />
      <About />
    </main>
  );
};

export default Main;
