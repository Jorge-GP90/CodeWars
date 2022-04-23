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
      }

      break;
    case 2:
      if (humanYears === 2) {
        cat = 24;
        dog = 24;
        result = [humanYears, cat, dog];
      }
      break;
    case humanYears >= 3:
      if (humanYears >= 3) {
        cat = 24 + (humanYears - 2) * 4;
        dog = 24 + (humanYears - 2) * 5;
        result = [humanYears, cat, dog];
      }
      break;
    default:
      result = undefined;
  }

  return result;
};

console.log(humanYearsCatYearsDogYears(10));
