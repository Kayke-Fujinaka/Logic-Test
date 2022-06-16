// Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
  switch (val) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
    case "c":
    case "d":
    case "e":
      console.log("LETRA");
      break;
    case 1:
    case 2:
    case 3:
      console.log("NÚMERO");
      break;
    default:
      console.log("Não encontrado");
      break;
  }
}

caseInSwitch(1);
