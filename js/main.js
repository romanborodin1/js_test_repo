// // Common examples
// var seconds = 60;
// var minutes = 60;
// var message = "Секунд в часе: "
// var secondsInHours = seconds * minutes;
// console.log(message + secondsInHours);
// console.log("Length of the message: " + message.length);
// console.log("The 1st symbol of the mesage: " + message[0]);
// console.log("'abc' + 5 = " + "abc" + 5);

// // String
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message.slice(1));
// console.log(message.slice(1, 3));
// var newStr = message.slice(4, 7);
// console.log(newStr);
// var string = "эТЯ стРОка сРазНЫм РЕГистРом симВОЛоВ";
// var firstChar = string[0].toUpperCase();
// var newString = firstChar + string.slice(1).toLowerCase();
// console.log(newString);

// // Boolean
// var p = true;
// var q = false;
// var a = 10;
// var b = 5;
// console.log("p = " + p);
// console.log("q = " + q);
// console.log("a = " + a);
// console.log("b = " + b);
// console.log("!q = " + !q);
// console.log("p || q = " + (p || q));
// console.log("p && q = " + (p && q));
// console.log("a > b -> " + (a > b));
// console.log("a < b -> " + (a < b));
// console.log("a >= b -> " + (a >= b));
// console.log("a <= b -> " + (a <= b));
// console.log("a === b -> " + (a === b));    // Сравнить 2 числа
// console.log("a === 10 -> " + (a === 10));
// console.log("a == '10' -> " + (a == '10'));    // Сравнить число и строку, которая переводится в число
// console.log("a !== b -> " + (a !== b));

// Arrays
var array = [10, "Строка", true, 5, "Строка2"];
console.log("array: " + array);
console.log("array[0]: " + array[0]);
console.log("array.length: " + array.length);
console.log("[INFO] ACTION -> array.push(777)");
// Arrays. Stack
array.push(777);
console.log("array: " + array);
console.log("array.length: " + array.length);
console.log("[INFO] ACTION -> array.pop()");
array.pop();    // Returns the last element
console.log("array: " + array);
console.log("array.length: " + array.length);
var p1 = array.pop();
console.log("p1: " + p1);
console.log("array: " + array);
console.log("array.length: " + array.length);
// Arrays. Queue
console.log("[INFO] ACTION -> array.shift()");
array.shift();    // Returns the 1st element
console.log("array: " + array);
console.log("array.length: " + array.length);
console.log("[INFO] ACTION -> array.unshift(15)");
array.unshift(15);    // Put element to the start
console.log("array: " + array);
console.log("array.length: " + array.length);
// Arrays. Other methods
console.log("array.indexOf(15): " + array.indexOf(15));
console.log("array.join('-'): " + array.join('-'));
console.log("array.join('===='): " + array.join('===='));
