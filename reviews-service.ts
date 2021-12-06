import { Review } from "./interfaces";

export class ReviewsService {
  getReviews(): Review[] {
    return [
      {
        avatar: "https://images.vexels.com/media/users/3/157837/isolated/preview/db181fb308b9a32197d9c3cadc58c4d3-asymmetric-cut-hair-woman-avatar.png",
        name: 'Anna',
        job: 'Web Developer',
        content: `The best part of Figma is the ability to easily create high 
          fidelity and low fidelity mockups. It comes with all the right tools 
          you need to create quick screen designs and I just love the ease of 
          usability and accessibility. `
      },
      {
        avatar: "https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png",
        name: 'Jaxy',
        job: 'WordPress Developer',
        content: `It allows me to create mobile app wireframes: provides frames 
        to design on as well as elements such as buttons, menu styles, and fonts 
        to create your design. Moreover, you can include your vectors or PNGs to 
        embed into your design. On the other hand, it allows you to create sequencing 
        to create prototypes so that development teams can be sure of what will happen 
        at each click. Also, they can check the actual CSS factors s that they can 
        develop exactly what you want. Finally, you can work online with your teammates. `
      },
      {
        avatar: "https://cdn0.iconfinder.com/data/icons/sexy-portrait-girl-avatar-cute-beautiful-young-gir/283/female-138-512.png",
        name: 'Aurora',
        job: 'Web Designer',
        content: `We use WordPress to manage our agency's website, as well as to oversee 
        numerous client web pages. With client accounts, we are responsible for uploading 
        new content. In some cases, we are also responsible for building new pages for 
        their existing websites. For our agency, we use WordPress to keep our blog page 
        regularly updated, present case studies detailing client success stories, add 
        downloadable content like e-books, and showcase our people and their areas of 
        expertise. `
      },      
      {
        avatar: "https://linustechtips.com/uploads/monthly_2016_11/58248f3656e0f_mccreeiconcopy.png.b4fc51eef7d3619e154517a8ba95e023.thumb.png.dcf47b8287951cf3676680d4fc96d1e4.png",
        name: 'McCree',
        job: 'Web Designer',
        content: `It's easy to use. You can hide the hotspots, which is great for user 
        testing. You can sync your design files directly from Sketch. You can manually 
        upload files and screens easily, and InVision makes it easy to reorder, replace, 
        relabel, and organize all your screens. The collaboration capabilities are also 
        great for working with developers who can leave comments and questions directly 
        in the prototype through the comment feature.  `
      }, 
      {
        avatar: "https://spng.pngfind.com/pngs/s/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png",
        name: 'Alex',
        job: 'Back-End Developer',
        content: `I find Confluence easy to use for collecting my thoughts, documenting 
        research, and providing resources to my team/company. It's easy to add content, 
        but also easy to share links and find what I need with the handy dandy search 
        functionality. I can easily make a page or space private, limit the audience or 
        open it up to everyone. Easy to manage access. I love how people who have view-only 
        access can post comments/questions about content without messing up my work. `
      }
    ]
  }
}