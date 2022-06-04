/*

[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
Porém, os dois nomes devem estar em dois objetos separados. 
Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

*/

const listPeople = [
    {
        name: "Kayke",
        age: 17
    },
    {
        name: "Álvaro",
        age: 34
    }
]

console.log(listPeople[0].name !== listPeople[1].name)