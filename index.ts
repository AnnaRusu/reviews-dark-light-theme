import { DarkTheme } from "./color-theme";
import { CreateLandpage } from "./create-landpage";
import { Reviews } from "./create-reviews";

class Main {
  landpage = new CreateLandpage();
  reviews = new Reviews();
  theme = new DarkTheme();

  renderLandpage() {
    this.landpage.renderLandpage();
  }

  renderReviews() {
    this.reviews.createReviewHTMLElements();
    this.reviews.renderReviews();
  }

  toggleTheme() {
    this.theme.toggleDarkTheme();
  }
}

const main = new Main();
main.renderLandpage();
main.renderReviews();
main.toggleTheme();
