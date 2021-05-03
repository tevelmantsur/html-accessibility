function Ingredients({ ingredientsList }) {
  return (
    <ul>
      {ingredientsList.map((ingredient) => (
        <li tabIndex="0" key={ingredient}>
          {ingredient}
        </li>
      ))}
    </ul>
  );
}

export default Ingredients;
