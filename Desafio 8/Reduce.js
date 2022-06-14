const name = "Kayke Fujinaka";
const manga1 = "One Piece";
const manga2 = "Vagabond";

function teste(template, ...values) {
  return template.reduce((acc, part, i) => {
      console.log(i)
    return `${acc}${values[i - 1]}${part}`;
  });
}

const opa = teste`My name is ${name}. I like ${manga1} and ${manga2}!`;
console.log(opa);
