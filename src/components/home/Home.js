import "./home.css";
import Lottie from "lottie-react";
import pizza from "./pizza.json";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/customize");
  };
  return (
    <div className="home-container">
      <h2 className="home-title">
        Select your ingredients, create your pizza and enjoy!
      </h2>
      <Lottie
        autoPlay={true}
        loop={true}
        animationData={pizza}
        style={{ width: "80%", margin: "auto" }}
      />
      <button className="home-button" onClick={handleClick}>
        Customize
      </button>
    </div>
  );
}

export default Home;
