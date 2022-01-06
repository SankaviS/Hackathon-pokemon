const poke_container = document.getElementById("poke_container");
const pokenum = 50;

const getpokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json()
    createPokemonCard(pokemon)
}
const fetchpokemon = async () => {
    for (let i = 1; i <= pokenum; i++) {
        await getpokemon(i);
    }
}
function createPokemonCard(pokemon) {
    const pokemonE1 = document.createElement("div")
    pokemonE1.classList.add("pokemon");
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokeInnerHTML = `
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png">
    </div >
        <div class="info">
        <span class="number">#00${pokemon.id}</span>
        </div>
        <div>
        <h3 class ="name">${name}</h3>
        <h6 class = "moves">Weight: <span>${pokemon.weight}</span></h6> <br>
        <h6 class = "moves">Abilities: <span>${pokemon.abilities[0].ability.name}</span></h6><br>
        <h6 class = "moves">Moves: <span>${pokemon.moves[0].move.name}</span></h6>
        </div>`;
    pokemonE1.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonE1);

}
fetchpokemon();