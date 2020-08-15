"use strict"

const lastEdited = document.querySelector("#last-edited")
const noteTitle = document.querySelector("#note-title")
const noteBody = document.querySelector("#note-body")
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)
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

noteTitle.addEventListener("input", (e) => {
    // note.updatedAt = moment().valueOf()
    note.title = `(draft) ${e.target.value}`
    lastEdited.textContent = editedMessage(note.updatedAt)
    saveNotes(notes)
})

noteBody.addEventListener("input", (e) => {
    // note.updatedAt = moment().valueOf()
    note.body = e.target.value
    lastEdited.textContent = editedMessage(note.updatedAt)
    saveNotes(notes)
})

document.querySelector("#remove-note").addEventListener("click", (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign("./index.html")
})

document.querySelector("#save-note").addEventListener("click", (e) => {
    note.title = note.title.slice(7)
    saveNotes(notes)
    location.assign("./index.html")
})

window.addEventListener("storage", (e) => {
    if (e.key === "notes") {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)
        if (!note) {
            location.assign("./index.html")
        }
        lastEdited.textContent = editedMessage(note.updatedAt)
        noteTitle.value = note.title
        noteBody.value = note.body
    }
})