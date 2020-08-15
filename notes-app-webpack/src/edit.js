import {
    initializedEditPage,
    editedMessage
} from "./views"
import {
    updateNote,
    removeNote,
    saveNotes
} from "./notes"


const lastEdited = document.querySelector("#last-edited")
const noteTitle = document.querySelector("#note-title")
const noteBody = document.querySelector("#note-body")
const noteId = location.hash.substring(1)

initializedEditPage(noteId)

noteTitle.addEventListener("input", (e) => {
    const note = updateNote(noteId, {
        title: `(draft) ${e.target.value}`,
    })
    lastEdited.textContent = editedMessage(note.updatedAt)
})

noteBody.addEventListener("input", (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    lastEdited.textContent = editedMessage(note.updatedAt)
})

document.querySelector("#remove-note").addEventListener("click", (e) => {
    removeNote(noteId)
    location.assign("./index.html")
})

document.querySelector("#save-note").addEventListener("click", (e) => {
    const note = updateNote(noteId, Object)
    note.title = note.title.slice(7)
    saveNotes()
    location.assign("./index.html")
})

window.addEventListener("storage", (e) => {
    if (e.key === "notes") {
        initializedEditPage(noteId)
    }
})