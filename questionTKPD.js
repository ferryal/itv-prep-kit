/**
 * Time Conversion
 * Change this given input to expected result
 */
const input = ["07:05:45PM", "08:00:00AM", "12:01:00PM", "12:01:00AM"];
// -> expect output
const expectedResult = ["19:05:45", "08:00:00", "12:01:00", "00:01:00"];

/**
 * @function timeConverter
 * @param {ArrayOf<string>} param array of string time
 * @returns {ArrayOf<string>} array of formated time in string value
 */
function timeConverter(param) {
  // return param.map((data, i) => {
  //     console.log(data)
  //     if (data.includes('PM')) {
  //       return
  //     }
  // })
  for (var i = 0; i < param.length; i++) {
    param[i] = new Date(param[i]);
  }
}

console.log("=> EXPECTED RESULT", expectedResult);
console.log("=> YOUR RESULT", timeConverter(input));
