var seconds = 60;
var minutes = 60;
var message = "Секунд в часе: "
var secondsInHours = seconds * minutes;

console.log(message + secondsInHours);
console.log("Length of the message: " + message.length);
console.log("The 1st symbol of the mesage: " + message[0]);
console.log("'abc' + 5 = " + "abc" + 5);

// String methods
console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.slice(1));
console.log(message.slice(1, 3));
var newStr = message.slice(4, 7);
console.log(newStr);

// Examples
var string = "эТЯ СТроКА сРазНЫм РЕГистРом симВОЛоВ";
var firstChar = string[0].toUpperCase();
var newString = firstChar + string.slice(1).toLowerCase();
console.log(newString);