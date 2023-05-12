/**
 * @author Wing
 * @date 2023/5/12 11:30
 * @ 类继承
 */
// 超类
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} move ${distanceInMeters}`)
    }
}
// 派生类
class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters: number = 5) {
        console.log("Slithering....", this.name)
        super.move(distanceInMeters)
    }
}
// 派生类
class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters: number = 10) {
        console.log("Galloping...")
        super.move(distanceInMeters);
    }
}

let snake = new Snake("jun")
let horse = new Horse("bai")
snake.move(10)
horse.move(20)


class Octopus1 {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}

class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

let os = new Octopus("wen")
console.log("I wanna back with ",os.name)


// 存取器
class Student {
    private _name: string;
    get name(): string {
        return this._name
    }
    set name(newName:string) {
        if (newName.length > 3) {
            this._name = newName
        } else {
            console.log("name length less 3")
        }
    }
}


// 抽象类
abstract class Department {
    constructor(public name: string) {}

    printName(): void {
        console.log("abstract class Department name: " + this.name);
    }
    abstract printMeeting(): void; // 必须在派生类中实现。
}

class Account extends Department {
    constructor() {
        super("Account");
    }
    printMeeting() {
        console.log("The Accounting Department ...")
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new Account(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在


// 在泛型约束中使用类型参数
function getProperty(obj: T, key: K) {
    return obj[key]
}
let x = { a: 1, b: 2, c: 3, d: 4};

getProperty(x, "a")
getProperty(x, "m")