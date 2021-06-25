// function linkAja(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
//       if (element % 3 === 0 && element % 7 === 0) {
//         console.log("Link Aja Bro");
//       } else if (element % 7 === 0) {
//         console.log("Aja");
//       } else if (element % 3 === 0) {
//         console.log("Link");
//       } else {
//         console.log(element);
//       }
//     }
//   }

// function linkAja(array) {
//     let value = [];

//     array.forEach(num => {
//         if(num % 3 == 0 && num % 7 == 0) value.push("Link Aja");
//         else if(num % 7 == 0) value.push("Aja");
//         else if(num % 3 == 0) value.push("Link");
//         else value.push(num);
//     });

//     return value.join("\n");
// };
  const input = [23, 2, 45, 98, 27, 4, 28, 8, 30, 70, 16, 15, 21, 14, 42];
  console.log(linkAja(input));

    // result
    // 23
    // 2
    // Link
    // Aja
    // Link
    // 4
    // Aja
    // 8
    // Link
    // Aja
    // 16
    // Link
    // Link Aja Bro
    // Aja
    // Link Aja Bro