function printName(
    obj:{ name:string, age:number})
    {
        console.log(`This person is called ${obj.name} and he is ${obj.age} years old`);
        
}


let person1 = {name:'Andressa Urach', age:35}
printName(person1)

let person2 ={name: 'Bananilson Farofa', age: 20}
printName(person2)