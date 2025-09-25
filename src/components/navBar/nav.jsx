const links = [
  { name: "Inicio", href: "#hero" },
  { name: "Hard Skils", href: "#skills" },
  { name: "Projetos", href: "#project" },
  { name: "Certificados", href: "#certificate" },
  { name: "Sobre", href: "#about" },
  { name: "Contatos", href: "#contact" },
];

const Nav = () => {
  return (
    <nav className="flex h-12 mt-2 items-center justify-center ">
      {" "}
      <div className="hidden md:flex justify-between items-center space-x-6">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
