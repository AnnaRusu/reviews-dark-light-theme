"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateElement = void 0;
class CreateElement {
    createElement(tag, metadata, container) {
        this.element = document.createElement(tag);
        container.appendChild(this.element);
        const keys = Object.keys(metadata);
        keys.forEach((key) => {
            if (key === "style") {
                Object.assign(this.element.style, metadata[key]);
            }
            else {
                this.element.setAttribute(key, metadata[key]);
            }
        });
        return this.element;
    }
    setTextContent(element, text) {
        element.textContent = text;
    }
}
exports.CreateElement = CreateElement;
