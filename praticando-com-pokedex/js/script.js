var numeroPokemons = document.querySelector("input[type=number]");

numeroPokemons.addEventListener('keyup',(quantidade)=>{
    Pokemons(quantidade);
})

function Pokemons(quantidade){
    quantidade = parseInt(quantidade);
    quantidade = 0;
    quantidade = numeroPokemons.value;

    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        var pokemon = [];

        allpokemon.results.map((val)=>{

            fetch(val.url)
                .then(response => response.json())
                .then(dadosPokemon => {
                
                    //dadosPokemon.sprites.front_default
                    //back_default
                    //dadosPokemon.weight
                    //dadosPokemon.height

                    pokemon.push({
                        nome: dadosPokemon.name,
                        imagem: dadosPokemon.sprites.front_default,
                        altura: dadosPokemon.height,
                        peso: dadosPokemon.weight
                    });
                    
                    if(pokemon.length == quantidade){

                        var todosPokemons = document.querySelector('.todos-os-pokemons');

                        todosPokemons.innerHTML = "";

                        pokemon.map((val)=>{

                            todosPokemons.innerHTML += `

                            <div class="pokemon">
                                <img class="pokemon-img" src=`+val.imagem+` alt=`+val.nome+`>
                                <h1 class="pokemon-nome">`+val.nome+`</h1>
                                <div class="dados-pokemon">
                                    <p class="altura-pokemon">Altura: `+val.altura/10+`m</p>
                                    <p class="peso-pokemon">Peso: `+val.peso/10+`kg</p>
                                </div>
                            </div>
                        
                            `;

                        })
            
                    }
                })            
        })
    })
}



