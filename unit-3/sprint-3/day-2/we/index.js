


// class Person{
//     constructor(n) {
//         this.name= n,
//         this.print= function(){
//             console.log(this.name);
//         }
//     }
// }





// // let p1 = new Person("akshay") 

// console.log(p1)

class Stack{
    constructor(){
        this.length = 0;
        this.index = [];
        // return this.index;
    }

    push(el){
        this.index[this.length] = el;
        this.length++;
    }
    pop(){
        this.index.pop();
        this.length--;
    }

    peek(){
        return this.index[this.length-1];
    }

    print(){
        console.log(this.index);
    }

    printReverse(){
        let r = this.index.reverse()
        console.log(r)
    }

    size(){
        return this.length
    }

}

let s1 = new Stack()
s1.push(1)
s1.push(2)
s1.push(3)



console.log(s1)
s1.print()
s1.printReverse()
s1.pop()
s1.print()
console.log(s1.peek())
console.log(s1.size())

// s1.push(1)
// s1.push(2)
// s1.push(10)
// console.log(s1);

// s1.pop();
// console.log(s1);

// class Mobile{
//     constructor(b,bt){
//         this.brand = b;
//         this.calling = true;
//         this.battery = bt;
//     }
// }

// let m1 = new Mobile("iPhone",500);
// console.log(m1);

// class SmartPhone extends Mobile{
//     constructor(b,bt,c,s){
//         super(b,bt);
//         this.camera = c;
//         this.screeSize = s;
//     }
// }

// let m2 = new SmartPhone("iPhone", 500, "20px", "6inch")
// console.log(m2);