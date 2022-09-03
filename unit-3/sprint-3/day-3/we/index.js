
// class Car{
//     constructor(b){
//         this.car = "Tata"
//         this.model = b
//     }
// }

// class NewCar extends Car{
//     constructor(b,seat){
//         super(b)
//         this.size = seat
//     }

// }

// let objCar = new NewCar("etios","5-Seater")
// console.log(objCar)



/* Encapsulation
*/

//   class ClassWithPrivateField {
//     #privateField;

//     constructor() {
//       this.#privateField = 42;
//     }
//   }

//   class SubClass extends ClassWithPrivateField {
//     #subPrivateField;

//     constructor() {
//       super();
//       this.#subPrivateField = 23;
//     }
//   }

//   let x = new SubClass();
//   console.log('x:', x.subPrivateField);



/* Abstraction */
// class Employee
// {
// constructor() {
//     // console.log("name")
// // if(this.constructor == Employee){
// // throw new Error(" Object of Abstract Class cannot be created");
// // }
// }
// display(){
// throw new Error("Abstract Method has implemention");
// }
// }
// class Manager extends Employee
// {
// display(){
// // super.display();
// console.log("I am a Manager");
// }
// }
// // var emp = new Employee();
// var mang=new Manager();
// mang.display();

/* Polymorphism */

// class Vehicle {
//     run() {
//     console.log( " Vehicle is running " );
//     }
//     }
//     class Car extends Vehicle {
//     run() {
//     console.log( " Car is running " );
//     }
//     }
//     class Truck extends Vehicle {
//     run() {
//     console.log( " Truck is running " );
//     }
//     }
//     var v1 = new Vehicle();
//     var v2 = new Car();
//     var v3 = new Truck();
//     console.log( v1 );
//     v1.run();
//     console.log( v2 );
//     v2.run();
//     console.log( v3 );
//     v3.run();
    