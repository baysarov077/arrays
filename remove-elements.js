let characters = ["Тирион Ланнистер", "Станис Баратеон", "Теон Грейджой", "Эддард Старк", "Дайенерис Таргариен", "Джон Сноу"];
let firstElement = characters[0]
console.log(firstElement)
let lastElement = characters[characters.length - 1]
console.log(lastElement)
characters.shift()
console.log(characters)
characters.push(firstElement)
console.log(characters)
characters.unshift('Король ночи')
console.log(characters)
delete(characters[5])
console.log(characters)
characters.unshift(lastElement)
console.log(characters)