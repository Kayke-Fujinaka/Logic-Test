/*

[ ] Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, a pessoa deve ser maior de idade e brasileira para ser aprovada.

*/

const info = [
  { nome: "Kayke", idade: "17", nacionalidade: "brasileiro" },
  { nome: "Pedro", idade: "25", nacionalidade: "brasileira" },
  { nome: "João", idade: "18", nacionalidade: "mexicano" },
  { nome: "Rafael", idade: "22", nacionalidade: "brasileiro" },
  { nome: "Matheus", idade: "20", nacionalidade: "boliviano" },
];

for (i = 0; i < info.length; i++) {
    if(info[i].idade >= 18 && info[i].nacionalidade === "brasileiro" || info[i].nacionalidade === "brasileira") {
        console.log(`${info[i].nome} foi aprovado`)
    } else {
        console.log(`${info[i].nome} foi reprovado`)
    }
}