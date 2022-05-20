const pokemonCounter = (pokemonCount, element) => {
  const newText = `Pokemon ${pokemonCount}`;
  element.innerText = newText;
  element.style.fontWeight = 'bold';
  return newText;
};

export default pokemonCounter;