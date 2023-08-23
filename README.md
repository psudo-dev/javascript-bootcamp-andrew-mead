# README

Projects and Exercises from the course The Modern Javascript Bootcamp by Andrew Mead.

## Table of Contents

- [About](#about)
- [Built Using](#built_using)
- [Projects](#projects)
  - [Notes App](#notes-app)
  - [Todo App](#todo-app)
  - [Hangman Game](#hangman-game)
- [Credits](#credits)
- [Author](#author)
- [License](#license)

## About <a name = "about"></a>

A lot of times I make changes to the course projects and exercises, I try some new things, add something here and there or even extrapolate to something different.

I know that there are several projects alike from Internet courses and tutorials out there so I will only document the tests I've done and the things I've changed.

## Built Using <a name = "built_using"></a>

- HTML
- CSS
- Javascript
- [UUID Generator](https://www.uuidgenerator.net/)
- [Moment JS](https://momentjs.com/)
- [Babel JS](https://babeljs.io/)
- [Webpack JS](https://webpack.js.org/)

## Projects <a name = "projects"></a>

There are different versions of these pages, we made an initial version but later we reorganized it to use with modules, webpack and babel. For more information check each project's folder and/or different branches of this project.

### [Notes App <a name = "notes-app"></a>](./notes-app/) ([demo](https://javascript-bootcamp-andrew-mead.netlify.app/notes-app/))

#### Summary

A simple note taking app that stores data on the browser local storage and it allows note filtering and live editing - if the same note is opened in different windows.

#### Improvements made

- I've played a little bit with the CSS and the color palette
- Added remove button on the front page
  - Otherwise the user would need to edit the note the remove
  - Prevent unnecessary extra step
- Added save button on the edit page
  - We are used to click a button to save, only having the remove button could lead to accidental remove notes
  - If the user leave the editing page the note will save as a draft

### [Todo App <a name = "todo-app"></a>](./todo-app/) ([demo](https://javascript-bootcamp-andrew-mead.netlify.app/todo-app/))

#### Summary

A Todo App that allows you to make lists, search and hide completed tasks. It saves the data on your browser's local storage.

#### Improvements made

- Added strikethough formatting for completed todos
  - Visual hints are always a plus for UI

### [Hangman Game <a name = "hangman-game"></a>](./hangman-game/) ([demo](https://javascript-bootcamp-andrew-mead.netlify.app/hangman-game/))

#### Summary

Hangman guessing game, type the guessing letters on your keyboard!

As an exercise I rewrote this game and put it in a separated [repository](https://github.com/psudo-dev/hangman-game), added instructions, UI, etc. to better ressemble a game. So all the improvements are there. ([demo](https://psudo-hangman-game.netlify.app/))

## Credits <a name = "credits"></a>

- [The Modern Javascript Bootcamp](https://www.udemy.com/course/modern-javascript/)

## Author <a name = "author"></a>

[@psudo-dev](https://github.com/psudo-dev)

## License <a name = "license"></a>

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details
