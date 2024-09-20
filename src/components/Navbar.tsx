import '../styles/navbar.css';
import logo from '../assets/logo.svg'; // Importe a logo

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-base px-lg">
      <div className="logo">
        <img src={logo} alt="Logo da empresa" className="logo-img" /> {/* Adicione a logo no lugar de "LogoMarca" */}
      </div>
      <nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#solutions">Soluções</a></li>
    <li><a href="#testimonials">Depoimentos</a></li>
    <li><a href="#pricing">Preços</a></li>
    <li><a href="#contact">Contato</a></li>
  </ul>
</nav>
      <div className="flex gap-1">
        <a className="btn" href="#">Login</a>
        <a className="btn" href="#">Cadastre-se</a>
      </div>
    </header>
  );
};

export default Navbar;


