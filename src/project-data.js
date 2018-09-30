import candy from './images/candy.png'
import map from './images/map.png'
import mine from './images/mine.png'

const projects = {
  codeMap: {
    main: 'This is a website made for organizing all of your coding resources into collections called “learning paths.”  By tracking user ratings of coding resources and learning paths we could harness the graph database Neo4J to recommended learning paths to users based on their rating history.',
    role: '  Schema design, modular fuzzy-match search feature, UI construction, front-end and API routes',
    img: map
    },
    candyCrushers: {
      main: 'An ecommerce website for selling candy.  Using React, Redux, Sequelize, Postgres, Node, and Express, and the stripe API the user can go from shopping to purchasing and admins can manage user accounts and orders.',
      role: '  developed persistence strategy for shopping cart, Google OAuth, UI construction, front-end and API routes',
      img: candy
    },
    wordsInMotion: {
      main: 'The Oxford English Dictionary animated with pure CSS.  I wanted to explore using UI motion to enhance user experience.  I produced this app in 4 days for a hackathon, and won the user interface design award.'
    },
    personalSite: {
      main: 'With the help of Create React App, I have been through 3 radically different ideations of this website.  After beta-testing the second interaction with users, I discovered issues with mobile responsiveness that lead me to the third redesign that you are interacting with now.  I am quite fond of the art that I made for version 2, however.',
      img: mine
    }
  }

  export default projects
