function isFibo(input) {
    return (
      isPerfectSqrt(5 * input * input + 4) || isPerfectSqrt(5 * input * input - 4)
    );
  }
  function isPerfectSqrt(x) {
    let num = parseInt(Math.sqrt(x));
    return num * num === x;
  }
  console.log(isFibo(8)); // true
  console.log(isFibo(7)); // false
  console.log(isFibo(1)); // false
  