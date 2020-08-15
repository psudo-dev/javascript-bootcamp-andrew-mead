// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

import {
    renderTodos
} from "./views"

import {
    setFilters
} from "./filters"

import {
    createTodo,
    saveTodos,
    loadTodos
} from "./todos"

// --

// Add necessary imports

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector("#search-todo").addEventListener("input", (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// Set up checkbox handler
document.querySelector("#checkbox").addEventListener("change", (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// Set up form submission handler
document.querySelector("#todo-form").addEventListener("submit", (e) => {
    e.preventDefault()
    const textInput = e.target.elements.todoInput.value.trim()
    if (textInput.length > 0) {
        createTodo(textInput)
        renderTodos()
        e.target.elements.todoInput.value = ""
    }
})

// Bonus: Add a watcher for local storage
window.addEventListener("storage", (e) => {
    if (e.key === "todos") {
        renderTodos()
    }
})