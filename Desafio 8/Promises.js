// Promise é uma promessa que ainda não fiz, mas vou fazer algo.
// Facilita com dados assíncronos.
// Retorna tratamentos para eventos de sucesso ou erro

let teste = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (false) {
      resolve("Hello, it's ok!");
    } else {
      reject("Error!");
    }
  }, 3000);
});

teste
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
