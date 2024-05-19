// Logging

function logger(originalMethod: any, _context: any) {
    function replacementMethod(this: any, ...args: any[]) {
      console.log("start:", originalMethod.name);
      const result = originalMethod.call(this, ...args);
      console.log("end:", originalMethod.name);
      return result;
    }
  
    return replacementMethod;
  }
  
  class User {
    constructor(private name: string, private age: number) {}
  
    @logger
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    @logger
    printAge() {
      console.log(`I am ${this.age} years old`);
    }
  }
  
  const user = new User("Emmanuel", 22);
  user.greet();
  user.printAge();


// Add new property
interface NewPropertyMixin {
    newProperty: string;
}

function AddNewProperty<T extends { new(...args: any[]): {} }>(BaseClass: T) {
    return class extends BaseClass implements NewPropertyMixin {
        newProperty: string = "This is a new property";

        constructor(...args: any[]) {
            super(...args);
        }
    };
}


class MyClass {
    constructor(public x: number) {}
}


const DecoratedMyClass = AddNewProperty(MyClass);


const obj = new DecoratedMyClass(5);
console.log(obj.x);
console.log(obj.newProperty);

