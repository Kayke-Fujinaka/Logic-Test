const test = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

// ----> startsWith() <----

console.log(`
----- startsWith() -----
`);
// Vai verificar se começa com 'c' apartir da posição inicial ou 0 (false)
console.log(test.startsWith("c"));
// Vai verificar se começa com 'b' apartir da posição 2 (true)
console.log(test.startsWith("b", 2));

// ----> endsWith() <----

console.log(`
----- endsWith() -----
`);
// Vai verificar se termina com 'z' (false)
console.log(test.endsWith("y"));
// Vai verificar se termina com 'x' até a posição 47 dos caracteres (true)
console.log(test.endsWith("x", 47));

// ----> includes() <----

console.log(`
----- includes() -----
`);
// Vai verificar se existe a string '1' na variável (false)
console.log(test.includes("1"));
// Vai verificar se existe a string 'g' na variável (true)
console.log(test.includes("g"));

// ----> repeat() <----

console.log(`
----- repeat() -----
`);
console.log("Oi... ".repeat(10));
