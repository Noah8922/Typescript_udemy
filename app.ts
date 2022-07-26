/* Core Type - number, string, boolen */
function add(n1: number, n2: number, showResult: boolean, resultPhrase : string) {
  const result = n1 + n2
  if (showResult) {
    console.log(resultPhrase + result ); // Result is : 7.8
    //console.log(resultPhrase + n1 + n2); // Result is : 52.8
  } else {
    return n1 + n2;
  }
}

// const number1 = 5;
let number1 = 5
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is : '

add(number1, number2, printResult, resultPhrase);
