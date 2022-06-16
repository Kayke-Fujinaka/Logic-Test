// Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  // Array vazio que vai ser armazenados as mensagens após a iteração
  const failureItems = []
  // Iterando cada item do array 'results'
  for (let i = 0; i < arr.length; i++) {
    // Enviando uma lista pegando cada mensagem do arr para o array 'failureItems1
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  // Vai retornar o array
  return failureItems;
}

// Desestruturação para pegar apenas o elemento 'failure' do array
const { failure } = result;
// Vai chamar a função enviando apenas
const failuresList = makeList(failure);
console.log(failuresList);
