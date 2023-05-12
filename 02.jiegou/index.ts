/**
 * @author Wing
 * @date 2023/5/11 15:51
 * @desc
 */

// 解构对象，同名的属性，后面的会覆盖前面属性的值。
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich", };
console.log(search)


// 接口的静态类型部分和实例类型部分。
interface ClockConstructor {
    new (hour: number, minute: number);
}

interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
    constructor(hour: number, minute: number) { }
    tick() {
        console.log("DigitalClock")
    }
}

class AnalogClock implements ClockInterface {
    constructor(hour: number, minute: number) {}
    tick() {
        console.log("AnalogClock")
    }
}

let digital = createClock(DigitalClock, 6, 18)
let analog = createClock(AnalogClock, 1, 23)

// 接口继承
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square> {}

square.color = "red"
square.sideLength = 18



// 接口继承类
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() {}
}

//  需要继承Control，否则直接继承接口会报错
class Test implements SelectableControl {
    select() { }
}