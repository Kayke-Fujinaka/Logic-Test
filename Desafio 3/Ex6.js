/*

[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
A prefeitura deseja saber: 
    - média do salário da população; 
    - média do número de filhos; 
    - maior salário; 
    - O final da leitura de dados se dará com a entrada de um salário negativo. 

*/

const info = [
  { nome: "Kayke", salary: 1247, children: 1 },
  { nome: "Pedro", salary: 2635, children: 4 },
  { nome: "João", salary: 1865, children: 2 },
  { nome: "Rafael", salary: -22, children: 1 },
  { nome: "Matheus", salary: 4320, children: 0 },
];

const averageAndHighestSalary = (info) => { 
    let highestSalary = 0
    let averageChildren = 0
    let averageSalary = 0

    for (i = 0; i < info.length; i++) {
        const salary = info[i].salary
        const children = info[i].children

        if(salary > highestSalary){
            highestSalary = salary
        }

        if(salary < 0){
            console.log(`A média salarial é ${(averageSalary / i).toFixed(1)}`)
            console.log(`A média de filhos é ${(averageChildren / i).toFixed(1)}`)
            console.log(`Maior salário é R$${highestSalary}`)
            break
        } else {
            averageSalary += salary
            averageChildren += children
        }
    }

}

averageAndHighestSalary(info)
