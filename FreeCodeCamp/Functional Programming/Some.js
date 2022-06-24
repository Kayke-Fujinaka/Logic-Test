// O some() verifica se um ou mais elementos passam em um teste

function checkPositive(arr) {
    return arr.some(test => test > 0)
}

const call = checkPositive([1, 2, 3, -4, 5])
console.log(call)