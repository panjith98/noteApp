import './app-bar.js';
import './form-addnote.js';
import notesData from './notes-data.js';
import './notes-list.js';

customElements.whenDefined("notes-list").then(() => {
    const noteList = document.querySelector("notes-list");
    noteList.note = notesData;
});

customElements.whenDefined("form-addnote").then(() => {
    document.querySelector("form-addnote").addEventListener("submit", (event) => {
        notesData.push(event.detail);
        const noteList = document.querySelector("note-list");
        noteList.note = notesData;
    });
});