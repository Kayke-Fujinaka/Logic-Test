// Para objetos não relacionados, é melhor usar mixins.
// Um mixin permite outros objetos para utilizar uma coleção de funções.
let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// O glideMixin recebe qualquer objeto e da a ele o método fly.
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("ZOOOOOOOOOOOOOOOOOOOM, wooosh!");
  };
};

// Aqui bird e boat são passados para glideMixin, o que em seguida atribui a função glide para cada objeto.
glideMixin(bird);
glideMixin(boat);

// O console irá mostrar a string ZOOOOOOOOOOOOOOOOOOOM, woosh!
boat.glide();
