// Define an interface for the product
interface Product {
    operation(): void;
}

// Define concrete products
class ConcreteProduct1 implements Product {
    operation(): void {
        console.log('ConcreteProduct1 operation');
    }
}

class ConcreteProduct2 implements Product {
    operation(): void {
        console.log('ConcreteProduct2 operation');
    }
}

// Define the factory interface
interface Creator {
    factoryMethod(): Product;
}

// Concrete factories
class ConcreteCreator1 implements Creator {
    factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 implements Creator {
    factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

// Client code
function clientCode(creator: Creator) {
    const product = creator.factoryMethod();
    product.operation();
}

// Usage
console.log("Client: Testing ConcreteCreator1...");
clientCode(new ConcreteCreator1());

console.log("");

console.log("Client: Testing ConcreteCreator2...");
clientCode(new ConcreteCreator2());
