/*


Decibel Scale


The following formula is called the Decibel Scale:

Decibel Scale Formula
 
B = 10log_10((I/10^-12))

The Decibel Scale is used to determine the loudness of a sound, measured in dB:

β is the result we want, defined in dB;
We multiply the result of the logarithmic operation by 10, otherwise it'll be called "Bel Scale";
We provide I, the intensity of the sound wave we need to find the loudness of, which is, for the purposes of this Kata, measured in 2D space and, hence, in Watts per square meter;
Finally, we divide the intensity by the threshold of human hearing, also measured in Watts per square meter. This is the softest possible sound a human ear can hear;
Since the threshold of human hearing involves an extremely small, long number, we need to utilize a logarithmic operation that will provide us the result in a convenient way.
Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.

Results are automatically rounded to the nearest integer by the test cases.



*/

function dBScale(intensity) {
  return 10 * Math.log10(intensity / 1e-12);
}

console.log(dBScale(10));

// Second Solution

const dBScale2 = (intensity) => 10 * (12 + Math.log10(intensity));

// third solution

const dBScale3 = (i) => 10 * Math.log10(i / Math.pow(10, -12));

// fourth solution

const dBScale4 = (intensity) => 10 * Math.log10(intensity) + 120;
