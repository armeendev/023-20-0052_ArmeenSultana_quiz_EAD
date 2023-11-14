import "./App.css";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Auctions from "./components/Auctions";
import { Discover } from "./components/Discover";
import Navbarr from "./components/Navbarr";

function App() {
  return (
    <div>
      <Navbarr />
      <Welcome />
      <Auctions />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
