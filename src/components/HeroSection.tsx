import '../styles/heroSection.css';
import '../styles/solutions.css'; // Para o componente Solutions
import RectangleOne from '../assets/images/RectangleOne.png';
import RectangleTwo from '../assets/images/RectangleTwo.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Imagens dos Retângulos nos cantos superiores */}
      <img src={RectangleOne} alt="Rectangle One" className="rectangle-one" />
      <img src={RectangleTwo} alt="Rectangle Two" className="rectangle-two" />

      <div className="hero-content text-center">
        <h1>Seja bem-vindo ao juntai</h1>
        <p>Caronas para o dia a dia do seu jeito para facilitar a vida</p>
        <div className="btn-wrapper flex gap-1 justify-center">
          <a href="#" className="btn">Conheça a nossa empresa</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
