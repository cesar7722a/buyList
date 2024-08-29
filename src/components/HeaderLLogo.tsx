import Logo from "../../public/logo.png";

export function HeaderLogo() {
  return (
    <header className="h-10 py-12 flex items-center">
      <img src={Logo} alt="Logo Imagem" className="md:flex hidden" />
    </header>
  );
}
