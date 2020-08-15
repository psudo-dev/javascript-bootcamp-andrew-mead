"use strict"
let notes = getSavedNotes();

const filters = {
    searchText: "",
    sortBy: "byEdited"
};

renderNotes(notes, filters);


document.querySelector("#create-note").addEventListener("click", (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: "",
        body: "",
        createdAt: timestamp,
        updatedAt: timestamp
    });
    localStorage.setItem("notes", JSON.stringify(notes))
    location.assign(`./edit.html#${id}`)
});

document.querySelector("#search-text").addEventListener("input", (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

window.addEventListener("storage", (e) => {
    if (e.key === "notes") {
        notes = JSON.parse(e.newValue) // the new data turns into the Notes
        renderNotes(notes, filters) // since we fire the renderNotes(notes) function, it automatically updates the page, therefore the Title
    }
})


/*
Unix Epoch - January 1st 1970 00:00:00

const now = new Date()
const timestamp = now.getTime() // turn into miliseconds
const myDate = new Date(timestamp) // turn back into date
console.log((myDate.getFullYear()));


console.log(now.getTime());
console.log(now.toString());

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Day of the month: ${now.getDate()}`);
console.log(`Hour: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);

const time1 = new Date("January 23 1998 09:34:35")
const time2 = new Date("November 9 2008 22:35:59")

const timeCompare = function (time1, time2) {
    const date1 = time1.getTime()
    const date2 = time2.getTime()
    if (date1 < date2) {
        return time1
    } else {
        return time2
    }
}

console.log(timeCompare(time1, time2).toString());


const now = moment()
now.add(1, "year").subtract(20, "days")
console.log((now.format("MMMM Do, YYYY")));
November 3rd, 2003
console.log(now.fromNow());
const nowTimestamp = now.valueOf()
console.log(nowTimestamp);

const birthday = moment()
birthday.year(1985).month(2).date(1)
console.log(birthday.format("MMM D, YYYY"));

*/