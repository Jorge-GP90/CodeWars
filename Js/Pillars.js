/*

Pillars

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

*/

const pillars = (num_pill, dist, width) => {
  if (num_pill < 1) {
    return "insert a valid number of pillars";
  }
  if (num_pill === 1) {
    return 0;
  }
  let init_d = num_pill - 1;
  const dist_cm = dist * 100;
  console.log(dist_cm);
  let w = width;
  const total_w = width * init_d;
  console.log(total_w);
  const res_w = total_w - w;
  let res = dist_cm * init_d + res_w;
  return res;
};

console.log(pillars(2, 20, 25));

// Second solution
function pillars2(num_pill, dist, width) {
  // your code here
  return num_pill > 1
    ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width
    : 0;
}

// third solution
const pillars3 = (n, d, w) =>
  Math.max(0, n - 1) * (d * 100) + Math.max(0, n - 2) * w;
