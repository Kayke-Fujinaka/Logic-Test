// [ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

const info = [
    {
        name: "João",
        nacionality: "brasileiro"
    },
    {
        name: "João",
        nacionality: "mexicano"
    },
    {
        name: "João",
        nacionality: "brasileiro"
    },
    {
        name: "João",
        nacionality: "japones"
    }
]
for (let i = 0; i < info.length; i++) {
    const test = info[i].nacionality == "brasileiro" ? "Ele é Brasileiro" : "Não é brasileiro"
    console.log(test)
}
