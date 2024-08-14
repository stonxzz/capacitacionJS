// Ejercicio 1: Consultar una API pública
// Objetivo: Realiza una solicitud GET a la API pública de JSONPlaceholder para obtener una lista de publicaciones.
// Instrucciones:
// Utiliza fetch para hacer una solicitud GET a https://jsonplaceholder.typicode.com/posts.
// Muestra las primeras 5 publicaciones en la consola.

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    posts.slice(0, 5).forEach(post => {
      console.log(`Título: ${post.title}`);
      console.log(`Contenido: ${post.body}`);
    });
  })
  .catch(error => console.error('Error:', error));

