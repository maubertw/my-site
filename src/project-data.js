import candy from './images/candy.png'
import map from './images/map.png'
import mine from './images/mine.png'

const projects = {
  codeMap: {
    main: 'A website made for organizing all of your coding resources into collections called “learning paths.”  By tracking user ratings of coding resources and learning paths we could harness the graph database Neo4J to recommended new learning paths to users.',
    role: '  Schema design, modular fuzzy-match search feature, UI construction, front-end and API routes',
    img: map
    },
    candyCrushers: {
      main: 'An e-commerce website for selling candy.  Users can go from shopping to purchasing and admins can manage user accounts and orders.  A classic CRUD application, Candy Crushers was built with React, Redux, Sequelize, Postgres, Node, Express, and the Stripe API.',
      role: '  developed persistence strategy for shopping cart, Google OAuth, UI construction, front-end and API routes',
      img: candy
    },
    wordsInMotion: {
      main: 'An app combining the Oxford English Dictionary with CSS animations.  I wanted to explore using UI motion to enhance user experience.  I built Words in Motion over the course of 4 days for a hackathon, and won the user interface design award.'
    },
    personalSite: {
      main: 'With the help of Create React App, I have been through 3 radically different ideations of this website.  After beta-testing the second version with users, I discovered issues with mobile responsiveness that lead me to the third redesign that you are interacting with now.  I am quite fond of the art that I made for version 2, however.',
      img: mine
    }
  }

  export default projects
