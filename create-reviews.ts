import { CreateElement } from "./create-element";
import { Review } from "./interfaces";
import { ReviewsService } from "./reviews-service";

export class Reviews {
  private reviews: Review[];
  private index: number = 0;
  htmlElement = new CreateElement();

  constructor() {
    this.reviews = new ReviewsService().getReviews();
  }

  createReviewHTMLElements() {
    const reviewsContainer = document.getElementById("reviewsContainer");
    const reviewContainer = this.htmlElement.createElement("div", {class: "reviewContainer"}, reviewsContainer);

    const avatar = this.htmlElement.createElement("img", {id: "avatar"}, reviewContainer);
    const name = this.htmlElement.createElement("p", {id: "name"}, reviewContainer);
    const job = this.htmlElement.createElement("p", {id: "job"}, reviewContainer);
    const content = this.htmlElement.createElement("p", {id: "content"}, reviewContainer);
  }

  getReviewHTMLElements() {
    const avatar = document.getElementById("avatar") as HTMLImageElement;
    const name = document.getElementById("name");
    const job = document.getElementById("job");
    const content = document.getElementById("content");

    return {avatar, name, job, content}
  }

  showReview(currentReview: number) {
    const testObj = this.getReviewHTMLElements();
    const currentItem = this.reviews[currentReview];

    testObj.avatar.src = currentItem.avatar;
    testObj.name.textContent = currentItem.name;
    testObj.job.textContent = currentItem.job;
    testObj.content.textContent = currentItem.content;
  }

  renderReviews() {
    const nextButton = document.getElementById("next");
    const previousButton = document.getElementById('previous');

    window.addEventListener("DOMContentLoaded", () => {
      this.showReview(this.index);
    })

    nextButton.addEventListener("click", () => {
      this.index++;
      if (this.index > this.reviews.length - 1) {
        this.index = 0;
      }
      this.showReview(this.index);
    })

    previousButton.addEventListener("click", () => {
      this.index--;
      if (this.index < 0) {
        this.index = this.reviews.length - 1;
      }
      this.showReview(this.index);
    })
  }
}
