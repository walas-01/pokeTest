const listaPokemones = document.querySelector("#lista-pokemones")
const URL = "https://pokeapi.co/api/v2/pokemon/"

for (let i= 1; i <= 151 ;i++){
    fetch(URL + i)
        .then((response)=>response.json())
        .then(data => mostrarPokemones(data))
}

function mostrarPokemones(poke){

    let tipos = poke.types.map(x => `<p class="tipo ${x.type.name}">${x.type.name}</p>` );
    tipos = tipos.join('') //* une elementos de un array en un string

    let pokeId = poke.id.toString() //* pasar a string
    if(pokeId.length === 1){
        pokeId = "00" + pokeId
    }else if(pokeId.length === 2){
        pokeId = "0" + pokeId
    }


    const div = document.createElement("div")
    div.classList.add("pokemon")
    div.innerHTML = `
        <div class="pokemon-img">
            <img src="${poke.sprites.front_default}" alt="${poke.name}">
        </div>

        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h1 class="pokemon-nombre">${poke.name}</h1>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
        </div>`

        listaPokemones.append(div)
}

