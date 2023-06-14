var boat;
(function (boat) {
    boat[boat["motor"] = 2] = "motor";
    boat[boat["proa"] = 1] = "proa";
    boat[boat["popa"] = 1] = "popa";
})(boat || (boat = {}));
var numeroDeMotores = boat.motor;
console.log(numeroDeMotores);
