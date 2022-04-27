/*


The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params.

*/

function magNumber(info) {
  let totalB;
  let total;
  const [gun, streets] = info;
  const Gun = gun.toString();
  console.log(`gun: ${gun}`);
  console.log(`streets: ${streets}`);

  if (Gun === "PT92") {
    totalB = streets * 3;
    totalB <= 17
      ? (total = 1)
      : (total =
          (totalB / 17) % 1 != 0 ? (totalB / 17).toFixed(0) + 1 : totalB / 17);
    console.log(`case1: ${total}`);
    return total;
  }
  if (Gun === "M4A1") {
    totalB = streets * 3;
    totalB <= 30 ? (total = 1) : (total = (totalB / 30).toFixed(0));
    console.log(`case1: ${total}`);
    return total;
  }
  if (Gun === "M16A2") {
    totalB = streets * 3;
    totalB <= 30 ? (total = 1) : (total = (totalB / 30).toFixed(0));
    console.log(`case1: ${total}`);
    return total;
  }
  if (Gun === "PSG1") {
    totalB = streets * 3;
    totalB <= 5 ? (total = 1) : (total = (totalB / 5).toFixed(0));
    console.log(`case1: ${total}`);
    return total;
  }
}

console.log(magNumber(["PT92", 7]));

// Solution 1

function magNumber2(info) {
  [weapon, streets] = info;
  const weapons = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5,
  };
  if (3 * streets <= weapons[weapon]) return 1;
  else {
    let n = 1;
    while (weapons[weapon] * n < streets * 3) n++;
    return n;
  }
}

console.log(magNumber2(["PT92", 7]));

// Second solution
const magNumber = (info) => {
  const [gun, street] = info;
  let magzines = 0;
  switch (gun) {
    case "PT92":
      magzines = Math.ceil((street * 3) / 17);
      break;
    case "M4A1":
      magzines = Math.ceil((street * 3) / 30);
      break;
    case "M16A2":
      magzines = Math.ceil((street * 3) / 30);
      break;
    case "PSG1":
      magzines = Math.ceil((street * 3) / 5);
      break;
  }
  return magzines;
};

// third solucion

function magNumber(info) {
  const dict = new Map([
    ["PT92", 17],
    ["M4A1", 30],
    ["M16A2", 30],
    ["PSG1", 5],
  ]);
  return Math.ceil((info[1] * 3) / dict.get(info[0]));
}
