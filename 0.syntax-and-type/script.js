// The most basic syntax:

var msg = "Hello World"
console.log(msg)

// TypeScript and Object Orientation
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!")
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
