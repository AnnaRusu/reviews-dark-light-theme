import { CreateLandpage } from "./create-landpage";
import { TestReviews } from "./create-reviews";

class Main{
  landpage = new CreateLandpage();
  reviews = new TestReviews();

  renderLandpage() {
    this.landpage.renderLandpage();
  }

  renderReviews() {
    this.reviews.getReviews();
  }
}

const main = new Main();
main.renderLandpage();
main.renderReviews();