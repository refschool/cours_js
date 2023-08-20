//https://stackoverflow.com/questions/69731112/how-typescript-implements-enumerations
"use strict";
var Contagens;
var t = 12;
(function (Contagens) {
    console.log(t)
    Contagens[Contagens["UM"] = 0] = "UM";
    Contagens[Contagens["DOIS"] = 1] = "DOIS";
    Contagens[Contagens["TRES"] = 2] = "TRES";
})(Contagens || (Contagens = {}));