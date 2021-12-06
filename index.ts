import { CreateLandpage } from "./create-landpage";
import { Reviews } from "./create-reviews";

class Main {
  landpage = new CreateLandpage();
  reviews = new Reviews();

  renderLandpage() {
    this.landpage.renderLandpage();
  }

  renderReviews() {
    this.reviews.createReviewHTMLElements();
    this.reviews.renderReviews();
  }
}

const main = new Main();
main.renderLandpage();
main.renderReviews();