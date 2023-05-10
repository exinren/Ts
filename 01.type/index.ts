/**
 * @author Wing
 * @date 2023/5/10 20:58
 * @desc
 */

let list: number[] = [1,2,3]
console.log(list)

// 元组
let x: [string, number];
x = ['hello', 10]
// x = [10, 'test'] //  'string' is not assignable to type 'number'.
console.log(x)

// 枚举
enum Color {Red , Green = 2, Blue}
let colorName: number = Color.Red
console.log(colorName)

//  any类型
let list1:any[] = [1, true, "test"]
list1[1] = 100; // OK
console.log(list1)