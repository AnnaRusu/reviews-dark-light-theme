"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkTheme = void 0;
class DarkTheme {
    toggleDarkTheme() {
        const body = document.body;
        const toggleButton = document.getElementById("toggleThemeButton");
        const reviewContainer = document.getElementById("reviewContainer");
        const title = document.getElementById("title");
        const titleSpan = document.getElementById("titleSpan");
        const name = document.getElementById("name");
        const job = document.getElementById("job");
        const content = document.getElementById("content");
        const hr = document.getElementById("hr");
        const previous = document.getElementById("previous");
        const next = document.getElementById("next");
        toggleButton.addEventListener('click', () => body.classList.toggle("dark-body"));
        toggleButton.addEventListener('click', () => title.classList.toggle("dark-title"));
        toggleButton.addEventListener('click', () => titleSpan.classList.toggle("dark-span"));
        toggleButton.addEventListener('click', () => reviewContainer.classList.toggle("dark-card"));
        toggleButton.addEventListener('click', () => name.classList.toggle("dark-text"));
        toggleButton.addEventListener('click', () => job.classList.toggle("dark-text2"));
        toggleButton.addEventListener('click', () => content.classList.toggle("dark-text"));
        toggleButton.addEventListener('click', () => hr.classList.toggle("dark-hr"));
        toggleButton.addEventListener('click', () => previous.classList.toggle("dark-buttons"));
        toggleButton.addEventListener('click', () => next.classList.toggle("dark-buttons"));
        toggleButton.addEventListener('click', () => toggleButton.classList.toggle("dark-toggle"));
    }
}
exports.DarkTheme = DarkTheme;
