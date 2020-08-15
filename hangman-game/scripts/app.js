//! Primitive value: string, number, boolean, null, undefined
// Everything else is an Object

// ! ARRAY !
// myArray --> Array.prototype --> Object.prototype --> null

// ! FUNCTIONS !
// myFunction --> Function.prototype --> Object.prototype --> null

// ! OBJECT !
// myObject --> Objeect.prototype --> null


// ! STRING !
// myString --> String.prototype --> Object.prototype --> null

// ! NUMBER !
// myNumber --> Number.prototype --> Object.prototype --> null

// ! BOOLEAN !
// myBoolean --> Boolean.prototype --> Object.prototype --> null

/*
const product = {
    name: "Influence"
}

const product2 = new Object()
product2.name = "Tatebako"

const product3 = new Object({
    name: "Art of War"
})


console.log(product.name);
console.log(product2.name);
console.log(product3.name);

/  Creating new methods for Object.prototype
Object.prototype.someNewMethod = () => "New method created!"
console.log(product.someNewMethod());


/ hasOwnProperty
console.log(product.hasOwnProperty("phasOwnProperty"))

let personBack = []
let personBack2 = {}
let list = []

class Person {
    constructor(name, age, position) {
        this.name = name
        this.age = age
        this.position = position
    }
    getBio() {
        console.log(`${this.name} is ${this.age} years old`);
            }
}
const getPerson = (list) => {
    personBack = list[0]
}

const getPerson2 = (list) => {
    personBack2 = list[1]
}

const makePerson = (name, age, position) => {
    const person = new Person(name, age, position)
    list.push(person)
}

makePerson("Renato", 35, "Unemployed")
makePerson("Andrew", 30, "Teacher")
makePerson("Tadeu", 49, "Carpinteiro")
makePerson("Henrique", 35, "Web Dev")
makePerson("Adriano", 50, "Motorista")

getPerson(list)
getPerson2(list)
console.log(personBack.getBio());
console.log(personBack2.getBio());
console.log(list);

const saveList = (list) => {
    const listJSON = JSON.stringify(list)
    localStorage.setItem("list", listJSON)
}

saveList(list)

const getList = () => {
    const listJSON = localStorage.getItem("list")
    list = JSON.parse(listJSON)
    getPerson(list)
    getPerson2(list)
    console.log(personBack.getBio());
    console.log(personBack2.getBio());
    return list
}

list = getList()

console.log(list);
*/

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done


const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")
let game1 


window.addEventListener("keydown", function (e) {
    const guess = e.key
    game1.makingGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ""
    guessesEl.textContent = game1.statusMessage
    const word = game1.puzzle.split("")
    word.forEach(letter => {
        const span = document.createElement("span")
        span.textContent = letter
        puzzleEl.appendChild(span)
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()

// getPuzzle("2").then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(`error: ${error}`)
// })

// getLocation().then((data) => {
//     city = data.city
//     region = data.region
//     return getCountry(data.country)
// }).then((country) => {
//     console.log(`Country: ${country.name}`)
//     console.log(`You are currently in the city of ${region}, ${city} State, ${country.name}`);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

// getCurrentCountry().then((location) => {
//     console.log(`You are currently in the city of ${location.city}, ${location.region} State, ${location.country}`)
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })