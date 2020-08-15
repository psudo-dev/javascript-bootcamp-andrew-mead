class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split("")
        this.remainingGuesses = remainingGuesses
        this.guessedLetter = []
        this.status = "Playing"
    }
    get puzzle() {
        let word = ""
        this.word.forEach((letter) => {
            if (this.guessedLetter.includes(letter) || letter === " ") {
                word += letter
            } else {
                word += "*"
            }
        })
        return word
    }
    makingGuess(guess) {
        if (typeof guess !== "string" || guess.length !== 1) {
            throw Error("Use a single letter for your guess")
        } else {
            guess = guess.toLowerCase()
            const isUnique = !this.guessedLetter.includes(guess)
            const badGuess = !this.word.includes(guess)
            if (isUnique) {
                this.guessedLetter.push(guess)
                if (badGuess && this.remainingGuesses > 0) {
                    this.remainingGuesses--
                }
            } else {
                throw Error(`"${guess}" has already been used before`)
            }
            this.whatStatus()
        }
    }
    whatStatus() {
        const guessWord = game1.puzzle
        const initialWord = this.word.join("")
        if (this.remainingGuesses === 0) {
            this.status = "Failed"
        } else if (guessWord === initialWord) {
            this.status = "Finished"
        } else {
            this.status = "Playing"
        }
    }
    get statusMessage() {
        if (this.status === "Playing") {
            const guessesLeftFunc = () => this.remainingGuesses > 1 ? `You have ${this.remainingGuesses} guesses left` : `You have ${this.remainingGuesses} guess left`
            return guessesLeftFunc()
        } else if (this.status === "Failed") {
            return `You've failed, the word was ${this.word.join("")}`
        } else {
            return `You've won! Congrats!`
        }
    }
}


// Hangman.prototype.calculateStatus1 = function () {
//     let finished = true
//     this.word.forEach((letter) => {
//         if (this.guessedLetter.includes(letter)) {} else {
//             finished = false
//         }
//     })
//     if (this.remainingGuesses === 0) {
//         this.status = "Failed"
//     } else if (finished) {
//         this.status = "Finished"
//     } else {
//         this.status = "Playing"
//     }
// }

// Hangman.prototype.calculateStatus2 = function () {
//     const unguessedLetters = this.word.filter((letter) => !this.guessedLetter.includes(letter))
//     if (this.remainingGuesses === 0) {
//         this.status = "Failed"
//     } else if (unguessedLetters.length === 0) {
//         this.status = "Finished"
//     } else {
//         this.status = "Playing"
//     }
// }

// Hangman.prototype.calculateStatus3 = function () {
//     const finished = this.word.every((letter) => this.guessedLetter.includes(letter))
//     if (this.remainingGuesses === 0) {
//         this.status = "Failed"
//     } else if (finished) {
//         this.stats = "Finished"
//     } else {
//         this.stats = "Playing"
//     }
// }