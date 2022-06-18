function Bird() {
  let weight = 15;

  // Aqui getHatchedEggCount é um método privilegiado, porque ele possui acesso à variável privada hatchedEgg.
  // Isso é possível porque hatchedEgg é declarado no mesmo contexto que getHatchedEggCount.
  // A função sempre possui acesso ao contexto na qual foi criada. Isso é chamado de closure.
  this.getWeight = function () {
    return weight;
  };
}

let ducky = new Bird();
ducky.getWeight();
