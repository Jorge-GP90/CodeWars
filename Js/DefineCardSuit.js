/*

Define a card suit

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/

function defineSuit(card) {
  const value = [...card];
  const diamonds = "♦";
  const clubs = "♣";
  const hearts = "♥";
  const spades = "♠";
  if (value.find((d) => d === diamonds)) return "diamonds";
  if (value.find((c) => c === clubs)) return "clubs";
  if (value.find((h) => h === hearts)) return "hearts";
  if (value.find((s) => s === spades)) return "spades";
}

console.log(defineSuit("Q♠"));

// Second solution

function defineSuit2(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  };
  return s[card.charAt(card.length - 1)];
}

// third solution
function defineSuit3(card) {
  return {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  }[card.substr(-1)];
}

// fouth solution
function defineSuit4(card) {
  if (card.includes("♥")) return "hearts";
  if (card.includes("♦")) return "diamonds";
  if (card.includes("♣")) return "clubs";
  if (card.includes("♠")) return "spades";
}
