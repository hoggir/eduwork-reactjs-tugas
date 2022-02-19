import Home from "./PortfolioContainer/Home/Home"
import About from "./PortfolioContainer/AboutMe/About";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Footer from "./PortfolioContainer/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
