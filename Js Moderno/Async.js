async function getPosts() {
  const response = await fetch("https://willianjusten.com.br/search.json");
  const data = await response.json();

  return data.map((post) => {
    console.log(post.title);
  });
}

getPosts();

/* 

Básico
- async/await funciona obrigatoriamente no protocolo Promises
- async é uma palavra chave usada no início de uma função
- await é usado para avisar que deve esperar o resultado de uma Promises
- await só pode ser usado para uma função com async

Vantagens
- O código fica mais simplificado
- Mais fácil de debugar por ter menos callback
- A conversão de uma Promises para async/await é fácil
- O código fica com menos encadeamentos

*/
