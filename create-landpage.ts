import { CreateElement } from "./create-element";

export class CreateLandpage {
  // mainContainer = document.getElementById("landpageContainer");
  htmlElement = new CreateElement();

  renderLandpage() {
    const mainContainer = document.getElementById("landpageContainer");
    const title = this.htmlElement.createElement("h2", {id:"title"}, mainContainer);
    const modeButton = this.htmlElement.createElement("button", {}, mainContainer);
    const reviewContainer = this.htmlElement.createElement("div", {id:"reviewContainer"}, mainContainer);


    this.htmlElement.setTextContent(modeButton, "Change Theme");
    this.htmlElement.setTextContent(title, "Reviews");
    
    return {modeButton, title, reviewContainer};
  }

}