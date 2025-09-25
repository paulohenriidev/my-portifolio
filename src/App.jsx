import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
  return (
    <div className="scroll-smooth font-inter min-h-screen text-amber-50 bgAll ">
      <Header />
      <Main title={"Olá! Me chamo"}  subtitle={"Paulo Henrique"}>
        Transformo ideias em realidade digital. Como desenvolvedor Fullstack,
        crio soluções que conectam pessoas, fortalecem negócios e deixam uma
        marca no universo online.
      </Main>
    </div>
  );
}

export default App;
