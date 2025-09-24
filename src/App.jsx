import "./App.css";
import HardSkillsSection from "./components/card/skills";
import Projects from "./components/card/projects";
import About from "./components/card/about";

function App() {
  return (
    <div className="min-h-screen text-amber-50 bgAll">
      <header className="fixed py- top-0 left-0 w-full z-40 borderTop bgTop -backdrop-blur supports-[backdrop-filter]:bgTop/60 shadow-lg ">
        <a
          className="flex justify-center items-center mt-4 space-x-2 font-bold text-xl"
          href="#"
        >
          <div className="h-8 w-8 rounded-full gradient-circle flex items-center justify-center text-slate-950 text-sm font-bold">
            PH
          </div>
          <p className="hidden sm:inline">Paulo Henrique</p>
        </a>
        <nav className="flex h-12 mt-2 items-center justify-center ">
          <div className="hidden md:flex justify-between items-center space-x-6">
            <a
              className="text-sm font-medium transition-colors hover:text-primary story-link"
              href="#hero"
            >
              Início
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-primary story-link"
              href="#skills"
            >
              Hard Skills
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-primary story-link"
              href="#projects"
            >
              Projetos
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-primary story-link"
              href="#"
            >
              Certificados
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-primary story-link"
              href="#"
            >
              Contato
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-primary story-link"
              href="#about"
            >
              Sobre
            </a>
          </div>
        </nav>
      </header>

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
                Olá! Me chamo{" "}
                <strong className=" text-primary">Paulo Henrique</strong>
              </h1>
              <p className="text-center text-gray-500">
                Transformo ideias em realidade digital. Como desenvolvedor
                Fullstack, crio soluções que conectam pessoas, fortalecem
                negócios e deixam uma marca no universo online.
              </p>
            </article>
          </div>
        </section>
        <HardSkillsSection />
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;
