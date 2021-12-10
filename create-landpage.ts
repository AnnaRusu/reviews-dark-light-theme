import { CreateElement } from "./create-element";

export class CreateLandpage {
  htmlElement = new CreateElement();

  renderLandpage() {
    const mainContainer = document.getElementById("landpageContainer");
    const title = this.htmlElement.createElement("h2", {id:"title", class:"title"}, mainContainer);
    const titleSpan = this.htmlElement.createElement("span", {id:"titleSpan", class:"titleSpan"}, title);
    const reviewContainer = this.htmlElement.createElement("div", {id:"reviewsContainer"}, mainContainer);

    this.htmlElement.setTextContent(titleSpan, "Reviews");
    
    return {title,titleSpan, reviewContainer};
  }
}