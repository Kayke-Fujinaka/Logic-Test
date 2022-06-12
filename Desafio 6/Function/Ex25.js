// Profile Lookup

// Um array contendo vários objetos
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  // Função que tem como parâmetro 'name' e 'prop'
  function lookUpProfile(name, prop) {
    // For que vai percorrer os objetos do Array
    for (let i = 0; i < contacts.length; i++) {
      // Vai verificar se o argumento passado para função existe no objeto
      // Caso não encontre no primeiro objeto, ele vai continuar até encontrar em outros. Ai, se não existir vai retornar que não existe o nome.
      if (contacts[i].firstName === name) {
        // Vai utilizar o método .hasOwnProperty() (verifica se existe uma determinada propriedade e retorna um booleano) com prop como argumento.
        // Se for verdadeiro, o valor de prop é retornado.
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
        } else {
          // Caso o objeto não possua a propriedade enviada
          return "No such property";
        }
      }
    }
    // Se não existir o nome em nenhum objeto vai retornar que não tem o contato
    return "No such contact";
  }
  
  console.log(lookUpProfile("Akira", "number"))
  