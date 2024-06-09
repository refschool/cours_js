/*var tab = { nom: 'huynh', prenom: 'yvon' };
(function ($) {
    console.log($.nom)
})(tab)*/
"use strict";
var Contagens;
function test(Contagens) {
    Contagens[Contagens["UM"] = 0] = "UM";
    Contagens[Contagens["DOIS"] = 1] = "DOIS";
    Contagens[Contagens["TRES"] = 2] = "TRES";
}
test(Contagens || (Contagens = {}));
var o = {}
//o[o["UM"] = 0] = "UM";
//console.log(o["UM"] = 0)
o["UM"] = 1
console.log(o['dos'] = 2)
console.log(t = 12)
