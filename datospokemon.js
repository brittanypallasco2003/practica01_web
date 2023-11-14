//Consultar la api
const consultarPokemon =(id, number) =>{
    fetch( `https://pokeapi.co/api/v2/pokemon/${id} `)//es una api para hacer peticiones a apis
    
    .then (response=>{//para trabajar con promesas que devuelve el fetch
        return response.json()
    })

    .then(data=>{
        console.log(data);
        pintarPokemon(data,number)
    })

    .catch(error=>{
        console.log(error)
    })
}


//generar los pokemones de forma random
const btnSeleccionar =() =>{
    let primerPokemon = Math.round(Math.random()*150)    
    let segundoPokemon = Math.round(Math.random()*150)    
    consultarPokemon(primerPokemon,1)
    consultarPokemon(segundoPokemon,2)
} 
//invocar la función
btnSeleccionar()
//obtener la referencia del div donse se va a pintar los pokemons
const lista =document.getElementById("listarpokemon")

//presentar los pokemon
const pintarPokemon =(data,id) =>{
    let item =lista.querySelector(`#pok-${id}`)
    item.getElementsByTagName("img")[0].setAttribute("src",data.sprites.front_default)
    console.log(item.getElementsByTagName("p"))
    item.getElementsByTagName("p")[0].innerHTML=data.name
}