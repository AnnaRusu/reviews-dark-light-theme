import { CreateElement } from "./create-element";

export class CreateLandpage {
  htmlElement = new CreateElement();

  renderLandpage() {
    const mainContainer = document.getElementById("landpageContainer");
    const title = this.htmlElement.createElement("h2", {id:"title"}, mainContainer);
    const reviewContainer = this.htmlElement.createElement("div", {id:"reviewsContainer"}, mainContainer);
    const previousButton = this.htmlElement.createElement("button", {id: "previous"}, mainContainer); //extract in render landpage
    const nextButton = this.htmlElement.createElement("button", {id: "next"}, mainContainer);

    previousButton.textContent = "<";
    nextButton.textContent = ">";

    this.htmlElement.setTextContent(title, "Reviews");
    
    return {title, reviewContainer};
  }
}