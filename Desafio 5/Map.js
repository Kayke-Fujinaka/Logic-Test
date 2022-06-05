// Ex 1
// Quem for vip (true) vai para o setor Black e quem não for vip vai para o setor Green

const list = [
  { name: "Penélope", vip: true },
  { name: "Pedro", vip: true },
  { name: "Paulo", vip: false },
  { name: "Plínio", vip: true },
];

const newList = list.map((value) => {
  const newList = {
    name: value.name,
    vip: value.vip,
    sector: value.vip ? "Black" : "Green",
  };
  return newList;
});

console.log(newList);

// Ex 2
// Quem tirou menos de 7 é reprovado e quem tirou mais de 7 é aprovado

const school = [
  { name: "Penélope", note: 8 },
  { name: "Pedro", note: 5 },
  { name: "Paulo", note: 6 },
  { name: "Plínio", note: 10 },
];

const approve = school.map(values => {
    const approve = {
        name: values.name,
        testGrade: values.note >= 7 ? "Aprovado" : "Reprovado"
    }
    return approve
})

console.log(approve)