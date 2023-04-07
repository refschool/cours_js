console.log("je suis typescript !");
//implicit type
var helloWorld = "hello world";
helloWorld = "4";
// explicit types
var firstName = 'John';
var age = 30;
var x = ["hello", 13];
//Enums
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["Africa"] = 1] = "Africa";
    Continents[Continents["Asia"] = 2] = "Asia";
    Continents[Continents["Europe"] = 3] = "Europe";
})(Continents || (Continents = {}));
var region = Continents.Africa; // 1
