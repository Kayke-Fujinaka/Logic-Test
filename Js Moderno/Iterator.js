// for ... of

// Iterator = Elemento que consigo iterar
// Iterable = Elementos que conseguimos iterar

let txt = "Monkey D. Luffy"
let it = txt[Symbol.iterator]()

for(letter of txt){
    console.log(letter)
    if(letter === ".") break
}