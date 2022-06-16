const currency = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ currency: "euro", value: 3.5 });
  }, 2000);
});

const countries = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Ireland", "England", "Scotland"]);
  }, 600);
});

// O all() vai pegar todas as promises e só vai mandar a resposta depois de resolver todas elas.
// Esperar todas as Promises serem resolvidas.
Promise.all([currency, countries]).then((responses) => {
  console.log(responses);
});

// O race() ele vai ignorar todas as promises depois da primeira ser resolvida.
// Quando a primeira promise for resolvida, ignora o resto.
// Ou seja vai pegar o 'countries' que é mais rápido.
Promise.race([currency, countries]).then((responses) => {
    console.log(responses);
  });
