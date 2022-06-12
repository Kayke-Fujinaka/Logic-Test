// Counting Cards

let count = 0;

function cc(card) {
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count += 1;
  } else if (card == 7 || card == 8 || card == 9) {
    count;
  } else {
    count -= 1;
  }

  if (count < 1) {
    `${count} Hold`;
  } else if (count == 0) {
    `${count}`;
  } else {
    `${count} Bet`;
  }
}

cc(2);
cc(3);
cc(7);
cc(5);
cc("A");



