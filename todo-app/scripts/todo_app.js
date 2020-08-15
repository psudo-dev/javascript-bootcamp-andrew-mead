"use strict"

const todos = getSavedTodos()


const filters = {
    searchText: "",
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector("#todo-form").addEventListener("submit", (e) => {
    e.preventDefault()
    const textInput = e.target[todo-input].value.trim()
    if (textInput.length > 0) {
        todos.unshift({
            id: uuidv4(),
            text: textInput,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.todoInput.value = ""
    }
})

document.querySelector("#checkbox").addEventListener("change", (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

document.querySelector("#search-todo").addEventListener("input", (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})