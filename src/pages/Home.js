import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Heroes from "../components/Heroes";

const Home = () => {
  return(
    <div className="home">
      <Navigation />
      <Logo />
      <Heroes />
    </div>
  );
};

export default Home;
