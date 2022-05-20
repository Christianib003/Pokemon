const fetchPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=6&limit=6');
  const results = await response.json();
  return results.results;
};

export default fetchPokemon;