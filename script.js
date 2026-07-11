const buscador = document.querySelector("#buscador");
const buscar = document.querySelector("#buscar");
const resultado = document.querySelector("#resultado");

async function buscarPokemon() {

    const li = document.createElement("li");
    const nombre = document.createElement("p");
    const id = document.createElement("p");
    const movimiento = document.createElement("p");

    let pokemon = `https://pokeapi.co/api/v2/pokemon/${buscador.value}`

    const respuesta = await fetch(pokemon);

    const datos = await respuesta.json();

    nombre.textContent = datos.name;

    id.textContent = datos.id;

    movimiento.textContent = datos.moves[0].move.name;

    li.appendChild(nombre);

    li.appendChild(id);

    li.appendChild(movimiento);

    resultado.textContent = "";

    resultado.appendChild(li);

    buscador.value = "";

};

buscar.addEventListener("click", buscarPokemon);