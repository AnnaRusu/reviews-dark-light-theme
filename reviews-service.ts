import { Review } from "./interfaces";

export class ReviewsService {
  getReviews(): Review[] {
    return [
      {
        id: 1,
        name: 'Anna',
        job: 'WD',
        content: 'Hello'
      },
      {
        id: 2,
        name: 'Jaxy',
        job: 'WPD',
        content: 'Bye'
      }
    ]
  }
}