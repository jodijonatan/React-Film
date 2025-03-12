import NavigationBar from "./components/NavigationBar";
import "./style/LandingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/SuperHero";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
