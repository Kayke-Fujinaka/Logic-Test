// Uma expressão de função imediatamente invocada (IIFE) é frequentemente utilizada para agrupar funcionalidades relacionadas para um único objeto ou módulo.
// Note que você possui uma expressão de função imediatamente invocada (IIFE) que retorna um objeto funModule.
// Esse objeto retornado contém todos os comportamentos de mixin como propriedades do objeto.
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();

// Original
let isCuteMixin = function (obj) {
  obj.isCute = function () {
    return true;
  };
};
let singMixin = function (obj) {
  obj.sing = function () {
    console.log("Singing to an awesome tune");
  };
};
