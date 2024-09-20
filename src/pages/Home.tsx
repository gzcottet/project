import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Solutions from '../components/Solutions';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/solutions.css';


const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Solutions />
    </>
  );
};

export default App;
