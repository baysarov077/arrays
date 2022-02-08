let characters = ["Рамси Болтон", "Тирион Ланнистер", "Станис Баратеон", "Теон Грейджой", "Эддард Старк", "Дайенерис Таргариен", "Джон Сноу"];

const king = "Король Ночи";
const stupid = "Бран Старк";
characters[0] = king
console.log(characters)
characters[1] = null
console.log(characters)
characters[2] = 'Станис Король'
console.log(characters)
characters[3] = stupid
characters[4] = ['season', '01']
console.log(characters)
characters[5] = `${king} ${stupid}`
console.log(characters)
characters[7] = characters[0]
console.log(characters)
