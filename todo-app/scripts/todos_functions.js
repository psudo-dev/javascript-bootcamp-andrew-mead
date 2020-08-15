"use strict"

// Fetch existing todos to localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem("todos")
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
    // if (todosJSON !== null) {
    //     return JSON.parse(todosJSON)
    // } else {
    //     return []
    // }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

// Remove todos by ID
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector("#todos")
    const filteredTodos = todos.filter((todo) => {
        const searchMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideMatch = !filters.hideCompleted || !todo.completed
        return searchMatch && hideMatch
    })
    // sortTodos(filteredTodos)
    todoEl.innerHTML = ""
    const incompleteTodos = todos.filter((todo) => !todo.completed)
    todoEl.appendChild((generateSummaryDOM(incompleteTodos)))
    if (filteredTodos.length > 0) {
        filteredTodos.forEach(function (todo) {
            todoEl.appendChild((generateTodoDOM(todo)))
        })
    } else {
        const emptyMessage = document.createElement("p")
        emptyMessage.classList.add("empty-message")
        emptyMessage.textContent = "No todos to show"
        todoEl.appendChild(emptyMessage)
    }
}


// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement("label")
    const containerEl = document.createElement("div")
    const checkbox = document.createElement("input")
    const todoText = document.createElement("span")
    const button = document.createElement("button")
    // setup todo checkbox
    checkbox.setAttribute("type", "checkbox")
    containerEl.appendChild(checkbox)
    checkbox.checked = todo.completed
    checkbox.addEventListener("change", (e) => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    // setup the todo text
    // strikethrough for done todos
    if (!todo.completed) {
        todoText.textContent = `${todo.text} `
    } else if (todo.completed) {
        const strike = document.createElement("s")
        strike.textContent = `${todo.text} `
        todoText.appendChild(strike)
    }
    containerEl.appendChild(todoText)
    // setup container
    todoEl.classList.add("list-item")
    containerEl.classList.add("list-item__container")
    todoEl.appendChild(containerEl)
    // setup remove button
    button.textContent = "remove"
    button.classList.add("button", "button--text")
    todoEl.appendChild(button)
    button.addEventListener("click", (e) => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement("h2")
    summary.classList.add("list-title")
    if (incompleteTodos.length === 0) {
        summary.textContent = `You don't have any todo left!`
    } else if (incompleteTodos.length === 1) {
        summary.textContent = `You still have ${incompleteTodos.length} todo left!`
    } else {
        summary.textContent = `You still have ${incompleteTodos.length} todos left!`
    }
    return summary
}

// Sort todos, incomplete first
const sortTodos = (filteredTodos) => {
    filteredTodos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}