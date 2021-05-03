import { useState, Fragment } from "react";
import BigHeading from "./BigHeading";
import Button from "./Button";
import Ingredients from "./Ingredients";
import SubHeading from "./SubHeading";

function App() {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const ingredients = ["Butter", "Flour", "Eggs", "Sugar"];

  return (
    <div className="App">
      <BigHeading>Cookie Recipe</BigHeading>
      <p tabindex="0">
        In this tutorial, I will teach you how I make my cookies!
      </p>
      <div>
        <Button onClick={() => setShowIngredients(true)}>
          Reveal Ingredients
        </Button>
      </div>
      {showIngredients ? (
        <>
          <SubHeading>Ingredients:</SubHeading>
          <>
            <Ingredients ingredientsList={ingredients}></Ingredients>
          </>
        </>
      ) : null}
      <div>
        <Button onClick={() => setShowPicture(true)}>
          Reveal Final Result
        </Button>
      </div>
      {showPicture ? (
        <>
          <div tabindex="0">Here's a picture of the resulting cookies:</div>
          <div tabindex="0" role="img" aria-label="Cookies in a tray">
            <img
              height="200px"
              src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg"
              alt="Cookies in a tray"
            ></img>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
