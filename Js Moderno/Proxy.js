// PROXY

// Ele é uma forma de definir comportamentos iferentes para métodos dentro de um obj

let obj = {
  name: "Willian",
  age: 17,
};

let proxy = new Proxy(obj, {
  get(target, name) {
    console.log("Alguém está pedindo o nome!");
    return target[name];
  },

  set(target, name, value) {
    console.log("Alguém está mudando o nome!");
    return (target[name] = value);
  },
});

// Nome antes de ser alterado
console.log(proxy.name);

// Nome sendo alterado
console.log((proxy.name = "Jonas"));

// Nome depois de ser alterado
console.log(proxy.name);
