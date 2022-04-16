

function PegarPokemon(){
    
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
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

                    dadosPokemon.types.forEach((t,v) => {
                        
                        dadosPokemon.slot.map((val)=>{

                            pokemon.push({
                                nome: dadosPokemon.name,
                                imagem: dadosPokemon.sprites.front_default,
                                altura: dadosPokemon.height,
                                peso: dadosPokemon.weight,
                                tipo_1: val[t].name
                                
                            });


                            console.log(val.slot)
                        })
                    
                        

                    });
                    
                    

                    

                    if(pokemon.length == 10){

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

                                        <p class="tipo-pokemon">Tipo: `+val.tipo_1+`, `+val.tipo_2+`</p>

                                    </div>
                                </div>
                            
                                `;

                        })
                    }
                })            
        })
    })
}

PegarPokemon();


