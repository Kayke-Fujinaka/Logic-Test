function sentensify(str) {
    return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));
