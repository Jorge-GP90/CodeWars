/*

Cat years, Dog years

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html


*/

const humanYearsCatYearsDogYears = (humanYears) => {
  let result;
  let cat;
  let dog;
  switch (humanYears) {
    case 1:
      if (humanYears === 1) {
        cat = 15;
        dog = 15;
        result = [humanYears, cat, dog];
        console.log(`case1 : ${result}`);
      }

      break;
    case 2:
      if (humanYears === 2) {
        cat = 24;
        dog = 24;
        result = [humanYears, cat, dog];
        console.log(`case2 : ${result}`);
      }
      break;
    default:
      if (humanYears >= 3) {
        cat = 24 + (humanYears - 2) * 4;
        dog = 24 + (humanYears - 2) * 5;
        result = [humanYears, cat, dog];
        console.log(`case3 : ${result}`);
      }
      break;
  }

  return result;
};

console.log(humanYearsCatYearsDogYears(3));

// Second solution

const humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};

// third Solution

const humanYearsCatYearsDogYears = (humanYears) => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];
