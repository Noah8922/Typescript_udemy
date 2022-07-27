type Combinable = number | string
type ResultType = 'as-number' | 'as-text'

function combine(
  input1: Combinable,
  input2: Combinable,
  convertResult: ResultType
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    convertResult === "as-number"
  ) {
    const result = +input1 + +input2;
    return result;
  } else {
    const result = input1.toString() + input2.toString();
    return result;
  }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineName = combine("Max", "Anna", "as-text");
console.log(combineName);
