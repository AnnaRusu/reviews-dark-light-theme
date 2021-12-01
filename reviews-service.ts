import { Review } from "./interfaces";

export class ReviewsService {
  getReviews(): Review[] {
    return [
      {
        id: 1,
        name: 'Anna',
        job: 'WD',
        content: `The best part of Figma is the ability to easily create high 
          fidelity and low fidelity mockups. It comes with all the right tools 
          you need to create quick screen designs and I just love the ease of 
          usability and accessibility. `
      },
      {
        id: 2,
        name: 'Jaxy',
        job: 'WPD',
        content: `It allows me to create mobile app wireframes: provides frames 
        to design on as well as elements such as buttons, menu styles, and fonts 
        to create your design. Moreover, you can include your vectors or PNGs to 
        embed into your design. On the other hand, it allows you to create sequencing 
        to create prototypes so that development teams can be sure of what will happen 
        at each click. Also, they can check the actual CSS factors s that they can 
        develop exactly what you want. Finally, you can work online with your teammates. `
      }
    ]
  }
}