function printName(obj) {
    console.log("This person is called ".concat(obj.name, " and he is ").concat(obj.age, " years old"));
}
var person1 = { name: 'Andressa Urach', age: 35 };
printName(person1);
var person2 = { name: 'Bananilson Farofa', age: 20 };
printName(person2);
