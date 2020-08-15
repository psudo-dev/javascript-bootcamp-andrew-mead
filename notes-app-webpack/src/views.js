import moment from "moment"
import {
    getFilters
} from "./filters";
import {
    sortNotes,
    saveNotes,
    removeNote,
    getNotes
} from "./notes"

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {

    const noteEl = document.createElement("div");
    const linkEl = document.createElement("a")
    const textEl = document.createElement("p")
    const statusEl = document.createElement("p")
    const button = document.createElement("button")
    // setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = "(draft) ";
    }
    textEl.classList.add("list-item__title")
    linkEl.appendChild(textEl)
    // Setup the link
    linkEl.setAttribute("href", `./edit.html#${note.id}`)
    noteEl.classList.add("list-item")
    // Setup the status message
    statusEl.textContent = editedMessage(note.updatedAt)
    statusEl.classList.add("list-item__subtitle")
    linkEl.appendChild(statusEl)
    //  setup the remove note button
    button.textContent = "remove"
    button.classList.add("button--text", "button")
    noteEl.appendChild(linkEl)
    noteEl.appendChild(button)
    button.addEventListener("click", (e) => {
        removeNote(note.id)
        saveNotes()
        renderNotes()
    })
    return noteEl
}

// Render application notes
const renderNotes = () => {
    const notesEle = document.querySelector("#notes")
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
    notesEle.innerHTML = "";
    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesEle.appendChild(noteEl);
        });
    } else {
        const emptyMessage = document.createElement("p")
        emptyMessage.textContent = "No notes to show"
        emptyMessage.classList.add("empty-message")
        notesEle.appendChild(emptyMessage)
    }
};

const initializedEditPage = (noteId) => {
    const lastEdited = document.querySelector("#last-edited")
    const noteTitle = document.querySelector("#note-title")
    const noteBody = document.querySelector("#note-body")
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)
    if (!note) {
        location.assign("./index.html")
    }
    lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
    if (note.title.includes("(draft)")) {
        noteTitle.value = note.title.slice(7)
    } else {
        noteTitle.value = note.title
    }
    noteBody.value = note.body
}


// Generate timestamp 
const editedMessage = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

export {
    generateNoteDOM,
    renderNotes,
    editedMessage,
    initializedEditPage
}