// // Common examples
// var seconds = 60;
// var minutes = 60;
// var message = "Секунд в часе: "
// var secondsInHours = seconds * minutes;
// console.log(message + secondsInHours);
// console.log("Length of the message: " + message.length);
// console.log("The 1st symbol of the mesage: " + message[0]);
// console.log("'abc' + 5 = " + "abc" + 5);


// // Strings
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


// // Booleans
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

// // Arrays
// var array = [10, "Строка", true, 5, "Строка2"];
// console.log("array: " + array);
// console.log("array[0]: " + array[0]);
// console.log("array.length: " + array.length);
// console.log("[INFO] ACTION -> array.push(777)");
// // Arrays. Stack
// array.push(777);
// console.log("array: " + array);
// console.log("array.length: " + array.length);
// console.log("[INFO] ACTION -> array.pop()");
// array.pop();    // Returns the last element
// console.log("array: " + array);
// console.log("array.length: " + array.length);
// var p1 = array.pop();
// console.log("p1: " + p1);
// console.log("array: " + array);
// console.log("array.length: " + array.length);
// // Arrays. Queue
// console.log("[INFO] ACTION -> array.shift()");
// array.shift();    // Returns the 1st element
// console.log("array: " + array);
// console.log("array.length: " + array.length);
// console.log("[INFO] ACTION -> array.unshift(15)");
// array.unshift(15);    // Put element to the start
// console.log("array: " + array);
// console.log("array.length: " + array.length);
// // Arrays. Other methods
// console.log("array.indexOf(15): " + array.indexOf(15));
// console.log("array.join('-'): " + array.join('-'));
// console.log("array.join('===='): " + array.join('===='));


// // Objects
// var tool = {
//   "name": "карандаш",
//   "color": "синий",
//   "diameter": 5,
//   "sharpened": true,
//   "array_example": [10, true, "String1", 1.23],
//   "object_example": { "k1": 10, "k2": false, "k3": "StrIngdd", "k4": 1.2345 }
// };   // Key - always string!
// console.log(tool);
// console.log(tool.array_example);
// console.log(tool.object_example);
// console.log(tool["name"]);    // Так можно указывать ключи, в которых есть проблем
// console.log("Object.keys(tool): " + Object.keys(tool));    // Get all keys of the object
// var tools = [
//   { "name": "карандаш", "color": "синий", "diameter": 5, "sharpened": true },
//   { "name": "карандаш", "color": "зелёный", "diameter": 5, "sharpened": true },
//   { "name": "маркер", "color": "зелёный", "diameter": 10, "sharpened": false }
// ]
// console.log(tools);
// console.log(tools[1]);
// console.log(tools[1]["name"]);


// Condition constructions
var firstName = "Евгений";
var maxLength = 16;
if (firstName.length > maxLength) {
  console.log("Ваше имя длинне " + maxLength + " символов");
};

if (firstName.length > maxLength && firstName[0] == "А") {
  console.log("Ваше имя длинне " + maxLength + " символов. Имя начинается на 'А'");
};

if (firstName.length > maxLength) {
  console.log("Ваше имя длинне " + maxLength + " символов");
} else {
  console.log("Ваше имя короче или равно " + maxLength + " символов");
};

if (firstName.length > maxLength) {
  console.log("Ваше имя длинне " + maxLength + " символов");
} else if (firstName.length > 4 && firstName[0] == "Е") {
  console.log("Ваше имя длиннее 4 символов и начинается с 'Е'");
} else if (firstName.length > 10 && firstName[0] == "Д") {
  console.log("Ваше имя длиннее 10 символов и начинается с 'Д'");
} else {
  console.log("Ни одно из предыдущих условий не выполнилось")
};
