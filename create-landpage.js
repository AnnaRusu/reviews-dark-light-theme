"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLandpage = void 0;
const create_element_1 = require("./create-element");
class CreateLandpage {
    constructor() {
        this.htmlElement = new create_element_1.CreateElement();
    }
    renderLandpage() {
        const mainContainer = document.getElementById("landpageContainer");
        const title = this.htmlElement.createElement("h2", { id: "title", class: "title" }, mainContainer);
        const titleSpan = this.htmlElement.createElement("span", { id: "titleSpan", class: "titleSpan" }, title);
        const reviewContainer = this.htmlElement.createElement("div", { id: "reviewsContainer" }, mainContainer);
        this.htmlElement.setTextContent(titleSpan, "Reviews");
        return { title, titleSpan, reviewContainer };
    }
}
exports.CreateLandpage = CreateLandpage;
