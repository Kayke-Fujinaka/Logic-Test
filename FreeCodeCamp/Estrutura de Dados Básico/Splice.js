// Splice (start, deleteCount, addElem)

// Removo apartir da segunda posição dois elementos
let array = ["today", "was", "not", "so", "great"];
array.splice(2, 2);

console.log(array);

// Removo apartir da terceira posição dois elementos e adiciono uma string "Mandioca"
let arr = ["I", "am", "feeling", "really", "happy"];
let newArray = arr.splice(3, 2, "Mandioca");

console.log(arr);
