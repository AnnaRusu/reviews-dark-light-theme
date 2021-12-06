import { Metadata } from "./interfaces";

export class CreateElement {
  element: HTMLElement;

  createElement(tag: string, metadata: Metadata, container?: HTMLElement) {
    this.element = document.createElement(tag);

    container.appendChild(this.element);

    const keys: string[] = Object.keys(metadata);
    keys.forEach((key) => {
      if(key === "style") {
        Object.assign(this.element.style, metadata[key]);
      }
      else {
        this.element.setAttribute(key, metadata[key]);
      }
    })
    return this.element;
  }

  setTextContent(element: HTMLElement, text: string) {
    element.textContent = text;
  }
}