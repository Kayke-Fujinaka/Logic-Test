// Record Collection

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  // Se prop não for tracks e value não for uma string vazia, atualize ou defina aquela prop do álbum como value.
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }
  // Se prop for tracks mas o álbum não tiver uma propriedade tracks, crie um array vazio e adicione o value nesse array.
  else if (prop == "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  }
  // Se prop for tracks e value não for uma string vazia, adicione value ao final do array existente de tracks do álbum.
  else if (prop == "tracks" && value !== "") {
    records[id][prop].push(value);
  }
  // Se value for uma string vazia, remova a propriedade prop recebida do álbum.
  else if (value === "") {
    delete records[id][prop];
  }

  // Retorna o objeto de coleção de discos completo.
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
