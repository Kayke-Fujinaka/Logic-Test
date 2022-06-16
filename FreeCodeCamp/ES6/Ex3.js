// Object Freeze

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  // Vai congelar a constante e não poderá sofrer alterações
  Object.freeze(MATH_CONSTANTS)

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI)