"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_theme_1 = require("./color-theme");
const create_landpage_1 = require("./create-landpage");
const create_reviews_1 = require("./create-reviews");
class Main {
    constructor() {
        this.landpage = new create_landpage_1.CreateLandpage();
        this.reviews = new create_reviews_1.Reviews();
        this.theme = new color_theme_1.DarkTheme();
    }
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
