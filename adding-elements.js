let arr = []
arr.push(1)
console.log(arr)
const newArr = []
newArr.push('First', 'Second', 'Third')
console.log(newArr)
const values = [true, false]
values.unshift(null)
console.log(values)
const arrays = [[], []]
arrays[1].push(true, true, true)
console.log(arrays)
const devItems = ['html', 'css']
devItems.unshift('git')
devItems.push('javascript')
console.log(devItems)
devItems[devItems.length] = 'Figma'
console.log(devItems)

let stack = ["html", "css", "bem", "js"];

// A) добавь в конец массива значение "react" (используй .push())
stack.push('react')
// B) выведи весь массив в консоль
console.log(stack)
// C) добавь в конец массива значение "redux" (используй способ с [])
stack[stack.length] = 'redux'
// D) выведи весь массив в консоль
console.log(stack)
// E) добавь в начало массива значение "git"
stack.unshift('git')
// F) выведи весь массив в консоль
console.log(stack)
/* 
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux". 
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */
console.log(`сначала мы изучим ${stack[0]}, а в конце изучим ${stack[stack.length - 1]}`)
// H) добавь в конец массива сразу два элемента: "mysql" и "mongodb".
stack.push('mysql', 'mongodb')
// I) выведи в консоль длину массива
console.log(stack)
