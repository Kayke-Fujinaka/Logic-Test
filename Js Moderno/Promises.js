// Promise é uma promessa que ainda não fiz, mas vou fazer algo.
// Facilita com dados assíncronos.
// Retorna tratamentos para eventos de sucesso ou erro

/* 
  3 Estados

  - Pending = Quando está acontecendo a Promise a fim de ser resolvida
  - Resolved = Quando já aconteceu tudo que precisava e retornou algo
  - Rejected = Caso aconteça algum problema e não tenha se resolvido

*/

let teste = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, it's ok!");
    reject("Error!");
  }, 1);
});

teste
  // O then() é basicamente "Pega essa coisa e faça algo"
  .then((data) => console.log(data))
  // O catch() para caso tenha algum erro no processo
  .catch((err) => console.log(err));
