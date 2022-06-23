async function opa(){
    const result = await fetch('https://api.github.com/users/Kayke-Fujinaka')
    console.log(result)
}

opa()