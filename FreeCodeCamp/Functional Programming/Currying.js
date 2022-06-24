const add = x => y => z => x + y + z

const call = add(10)(20)(30);
console.log(call)