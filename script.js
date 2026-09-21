const boton = document.getElementById('btnBuscar');
const ano = document.getElementById('anoPelicula');
const director = document.getElementById('directorPelicula');
boton.addEventListener('click',async function(evento) {
    const input = document.getElementById('inputTitulo');
    const respuesta =  await fetch(`https://omdbapi.com/?t=${input.value}&apikey=a38147e8`);
    const datos = await respuesta.json();
    ano.textContent = datos["Year"];
    director.textContent = datos["Director"];
})
