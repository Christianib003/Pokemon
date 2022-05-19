import pokemonCounter from "./pokemonCounter.js";

describe('Pokemon counter', () => {
  test('Count number of pokemon in display', () => {
    const pokemonDivs = document.createElement('div')
    pokemonDivs.innerHTML = `
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    `;
    const pokemonCount = pokemonDivs.childElementCount; 
    const element = document.createElement('p')

    expect(pokemonCounter(pokemonCount, element)).toBe(`Pokemon ${pokemonCount}`);
  });
});