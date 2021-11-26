import { CreateElement } from "./create-element";
import { Review } from "./interfaces";
import { ReviewsService } from "./reviews-service";

export class TestReviews {
  private reviews: Review[]
  htmlElement = new CreateElement();

  constructor() {
    this.reviews = new ReviewsService().getReviews();
  }

  getReviews() {
    const reviewContainer = document.getElementById("reviewContainer");

    this.reviews.map((review) => {
      const id = this.htmlElement.createElement("p", {id: "id"}, reviewContainer);
      const name = this.htmlElement.createElement("p", {id: "name"}, reviewContainer);
      const job = this.htmlElement.createElement("p", {id: "job"}, reviewContainer);
      const content = this.htmlElement.createElement("p", {id: "content"}, reviewContainer);

      this.htmlElement.setTextContent(id, review.id.toString());
      this.htmlElement.setTextContent(name, review.name);
      this.htmlElement.setTextContent(job, review.job);
      this.htmlElement.setTextContent(content, review.content);
    })
  }
}