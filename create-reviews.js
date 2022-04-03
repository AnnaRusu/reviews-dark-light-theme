"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviews = void 0;
const create_element_1 = require("./create-element");
const reviews_service_1 = require("./reviews-service");
class Reviews {
    constructor() {
        this.index = 0;
        this.htmlElement = new create_element_1.CreateElement();
        this.reviews = new reviews_service_1.ReviewsService().getReviews();
    }
    createReviewHTMLElements() {
        const reviewsContainer = document.getElementById("reviewsContainer");
        const reviewContainer = this.htmlElement.createElement("div", { id: "reviewContainer", class: "reviewContainer" }, reviewsContainer);
        const avatar = this.htmlElement.createElement("img", { id: "avatar" }, reviewContainer);
        const name = this.htmlElement.createElement("p", { id: "name", class: "name" }, reviewContainer);
        const job = this.htmlElement.createElement("p", { id: "job", class: "job" }, reviewContainer);
        const content = this.htmlElement.createElement("p", { id: "content", class: "content" }, reviewContainer);
    }
    getReviewHTMLElements() {
        const avatar = document.getElementById("avatar");
        const name = document.getElementById("name");
        const job = document.getElementById("job");
        const content = document.getElementById("content");
        return { avatar, name, job, content };
    }
    showReview(currentReview) {
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
        });
        nextButton.addEventListener("click", () => {
            this.index++;
            if (this.index > this.reviews.length - 1) {
                this.index = 0;
            }
            this.showReview(this.index);
        });
        previousButton.addEventListener("click", () => {
            this.index--;
            if (this.index < 0) {
                this.index = this.reviews.length - 1;
            }
            this.showReview(this.index);
        });
    }
}
exports.Reviews = Reviews;
