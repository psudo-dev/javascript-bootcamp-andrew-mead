"use strict"

// Read exissting notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes");
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = (notes) => {
    notes.updatedAt = moment().valueOf()
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

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
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    return noteEl
}

// Sort your Notes by one of 3-ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === "byEdited") {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (b.updatedAt > a.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "byCreated") {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (b.createdAt > a.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "alphabetical") {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    const notesEle = document.querySelector("#notes")
    notes = sortNotes(notes, filters.sortBy)
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

// Generate timestamp 
const editedMessage = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`