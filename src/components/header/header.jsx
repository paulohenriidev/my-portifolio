import NavBar from "../navBar/nav";

const Header = () => {
  return (
    <header className=" fixed py- top-0 left-0 w-full z-40 borderTop bgTop -backdrop-blur supports-[backdrop-filter]:bgTop/60 shadow-lg ">
      <a
        className="flex justify-center items-center mt-4 space-x-2 font-bold text-xl"
        href="#"
      >
        <div className="h-8 w-8 rounded-full gradient-circle flex items-center justify-center text-slate-950 text-sm font-bold">
          PH
        </div>
        <p className="hidden sm:inline">Paulo Henrique</p>
      </a>
      <NavBar/>
    
    </header>
  );
};

export default Header;
