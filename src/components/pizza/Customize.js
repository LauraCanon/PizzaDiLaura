import "./customize.css";
import { useState } from "react";
import Lottie from "lottie-react";
import loading from "./loading.json";
import ingredients from "../../static/ingredients";
import ClientForm from "../form/ClientForm";

function Customize() {
  const [ings, setIngs] = useState([]);

  const handleChange = (e, price) => {
    console.log(e.target.value);
    if (e.target.checked) {
      const temp = [...ings];
      temp.push({
        ingredient: e.target.value,
        price: price,
      });
      console.log(temp);
      setIngs(temp);
    } else {
      //If there's an ingredient checked I need to filter it out
      const temp = [...ings];
      const index = temp.findIndex(
        (element) => element.ingredient === e.target.value
      );
      temp.splice(index, 1);
      setIngs(temp);
    }
  };

  return (
    <div className="customize-container">
      <div className="create-order">
        <h2>Customize your Pizza</h2>
        <p>Choose your favorite ingredients for your ideal Pizza!</p>
        {ingredients.map((ingredient) => (
          <div className="ingredients-div">
            <h3 className="ing-title">Select your {ingredient.category}</h3>
            {ingredient.products.map((ing) => (
              <div className="input-container">
                <input
                  type="checkbox"
                  value={ing.name}
                  className="input-box"
                  onChange={(e) => handleChange(e, ing.price)}
                />{" "}
                <p className="ing-name">{ing.name}</p>
                <p className="price">$ {ing.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="form-div">
        {ings.length === 0 && (
          <>
            <Lottie
              autoPlay={true}
              loop={true}
              animationData={loading}
              style={{ width: "100%", margin: "auto" }}
            />
          </>
        )}
        {ings.length !== 0 && <ClientForm ings={ings} />}
      </div>
    </div>
  );
}

export default Customize;
