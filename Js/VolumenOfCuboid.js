/*

Volume of a Cuboid

Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.


*/

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    const vol = length * width * height;
    return vol;
  }
}

// Second Solution
const Kata = {
  getVolumeOfCuboid: (length, width, height) => length * width * height,
};

// third Solution

var Kata;

Kata = (function () {
  function Kata() {}

  Kata.getVolumeOfCuboid = function (length, width, height) {
    var l = parseFloat(length);
    var w = parseFloat(width);
    var h = parseFloat(height);

    if (isNaN(l) || isNaN(w) || isNaN(h)) return 0;
    if (l <= 0 || w <= 0 || h <= 0) return 0;

    return l * w * h;
  };

  return Kata;
})();

// fourth solution
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    if (length > 0 && width > 0 && height > 0) {
      /*Check all the values to be positive*/
      let volume = length * width * height; /*Multiply the three dimensions*/
      return volume; /*Return the result*/
    } else {
      console.log(
        "Check out the values, there is a negative or 0."
      ); /*Make them check the values */
    }
  }
}
/*Extra comment: Are all the values in the same units?*/
