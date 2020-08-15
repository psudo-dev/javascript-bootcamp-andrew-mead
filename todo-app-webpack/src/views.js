import {
    getTodos,
    toggleTodo,
    saveTodos,
    removeTodo,
    loadTodos
} from "./todos"

import {
    getFilters
} from "./filters"


// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todos = loadTodos()
    const {
        searchText,
        hideCompleted
    } = getFilters()
    const todoEl = document.querySelector("#todos")
    const filteredTodos = todos.filter((todo) => {
        const searchMatch = todo.text.toLowerCase().includes(searchText.toLowerCase())
        const hideMatch = !hideCompleted || !todo.completed
        return searchMatch && hideMatch
    })
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

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
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
        renderTodos()
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
        renderTodos()
    })
    return todoEl
}



// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
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


// Make sure to set up the exports
export {
    renderTodos,
    generateSummaryDOM,
    generateTodoDOM
}