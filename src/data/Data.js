export default [
  {
    key: 1,
    title: "Quizical",
    builtWith: ["[React]", "[JavaScript]", "[CSS]", "[API]", "[Figma]"],
    description:
      "This was a challenge that was part of the Scrimba React course I completed, this was a project which had to be completed without guidance, instructions on the final product were given and a fully working quiz had to be created. The questions and answers are fetched from the open trivia database API. The app design was provided by Scrimba and was done in Figma.",
    process: [
      "Base app Generated with Vite React",
      "Necessary components were created",
      "The application was styled according to the provided Figma design",
      "React State and useEffect were used to handle API fetch response data",
      "Application functional logic completed for scorekeeping and whether or not the answers are correct",
    ],
    link: "https://vladeanclaudiu.github.io/quizical-react-app/",
    git: "https://github.com/VladeanClaudiu/ReactProjects/tree/main/react-quiz-app",
  },

  {
    key: 2,
    title: "Movie Watchlist Web-App",
    builtWith: ["[HTML]", "[JavaScript]", "[CSS]", "[API]"],
    description:
      "This is a solution to a solo project from Scrimba. Solo projects are meant to challenge the skills you've learnt so far through the courses, there is no solution given by Scrimba. The goal was to create a Web-App that used the OMDB API to fetch and display data. The data was also stored on local storage. Movies could be added and removed from the watchlist.",
    process: [
      "The initial style for the application was based on the Figma design provided by Scrimba.",
      "With the CSS completed the next stage for formatting the fetch data",
      "The necessary functions were created, and the function return data is then rendered",
      "The local storage was set up and for the watchlist page, the functionality for adding and removing is added.",
    ],
    link: "https://vladeanclaudiu.github.io/movie-watchlist-app/",
    git: "https://github.com/VladeanClaudiu/WorkingWithAPI/blob/main/API-MovieWatchlist/",
  },

  {
    key: 3,
    title: "Color Generator",
    builtWith: ["[HTML]", "[JavaScript]", "[CSS]", "[API]"],
    description:
      "This is a solution to a solo project from Scrimba. This was a very fun project to work on. Solo projects are meant to challenge the skills you've learnt so far through the courses; there is no solution given by Scrimba. The goal was to create a colour scheme generator that used The Color Api to generate presets of colours based on the #hex value input of the user.",
    process: [
      "The CSS frame for the app was developed following the provided Scrimba, Figma mockup",
      "The fetched data from the database was formatted for use",
      "Formatted data was assigned to the div's background-color which was styled using CSS-grid",
      "The #hex value was displayed at the bottom of each colour representing the #hex value",
      "When the hex value is clicked the user is alerted that the value was copied.",
    ],
    link: "https://vladeanclaudiu.github.io/color-generator/",
    git: "https://github.com/VladeanClaudiu/WorkingWithAPI/tree/main/API-ColorGenerator",
  },
  {
    key: 4,
    title: "Rowdle",
    builtWith: ["[HTML]", "[JavaScript]", "[SASS]", "[JSON]"],
    description:
      "This is a personal project I wanted to try to develop. The Worldle craze was at an all-time high and I wanted to test myself and see if I could clone the game.",
    process: [
      "The CSS was what I chose to start with. I created a close copy of the original Worldle page.",
      "The word API I was considering was a subscription so I decided to access my data from a JSON file",
      "The divs for each block were created in JS",
      "The logic for the game was created in pure JS",
      "The application is incomplete but the main functionality of the Wordle game was implemented",
      "A random word is chosen every refresh, the random word is displayed in the console if you'd like to test the project 😉",
    ],
    link: "https://vladeanclaudiu.github.io/WordleClone/",
    git: "https://github.com/VladeanClaudiu/WordleClone",
  },
  {
    key: 5,
    title: "Tenzies",
    builtWith: ["[React]", "[JavaScript]", "[CSS]"],
    description:
      "The project is a game of tenzi, 10 dies are rolled and the player may click the pairs of dies they'd like to hold on to. The game is completed once all ten dies display the same number",
    process: [
      "Base app Generated with Vite React",
      "The CSS was what I chose to start with. I followed the provided Figma file.",
      "An array of 10 random numbers between 1 and 6 was generated",
      "The Array was stored in State, the components necessary were created and the prop values were passed to each",
      "The functions handling the logic were created and the application was completed.",
    ],
    link: "https://vladeanclaudiu.github.io/react-tenzies-app/",
    git: "https://github.com/VladeanClaudiu/ReactProjects/tree/main/tenzi-dice-react",
  },
  // {
  //   key: 6,
  //   title: "JS Battle",
  //   builtWith: ["[JavaScript]", "[CSS]", "[HTML]"],
  //   description:
  //     "This is a project built using mainly JS, the goal was to create a RPG style battle where a player can battle an assortment of enemies.",
  //   process: [
  //     "Base app Generated with Vite React",
  //     "The CSS was what I chose to start with. I followed the provided Figma file.",
  //     "Using forms in react was quite different from normal html, took a while to get used to it",
  //     "Once from made sense the project was pretty straight forward. The api data was fetched, in this case the data was Meme images",
  //     "The image was stored in state and useEffect was used to make new requests to Api whenever the Generate new image button was pressed",
  //     "Application could be imporved by allowing the user to download their meme, enter more text options, move the text on the image.",
  //   ],
  //   link: "https://vladeanclaudiu.github.io/react-meme-generator/",
  //   git: "https://github.com/VladeanClaudiu/ReactProjects/tree/main/react-meme-generator",
  // },
  {
    key: 7,
    title: "Travel Journal",
    builtWith: ["[React]", "[JavaScript]", "[CSS]"],
    description:
      "This is a solution to a solo project from Scrimba. Solo projects are meant to challenge the skills you've learnt so far through the courses; there is no solution given by Scrimba. The goal was to create a travel journal, where data could be accessed from an external source such as an API or external file. The data would be used by the components to be styled and displayed.",
    process: [
      "Base app Generated with Vite React",
      "The CSS was what I chose to start with. I followed the provided Figma file.",
      "One component was needed, the component would then be mapped over and assigned to a variable which was then used to render multiple components based on the number of data elements mapped over",
      "This was project was quite easy to complete.",
    ],
    link: "https://vladeanclaudiu.github.io/react-travel-journal/",
    git: "https://github.com/VladeanClaudiu/ReactProjects/tree/main/react-travel-journal",
  },
  {
    key: 8,
    title: "Meme Generator",
    builtWith: ["[React]", "[JavaScript]", "[CSS]", "[API]"],
    description:
      "This is a project Built in React, practice using event listeners, useState, conditional rendering, forms and side effects.",
    process: [
      "Base app Generated with Vite React",
      "The CSS was what I chose to start with. I followed the provided Figma file.",
      "Using forms in React.js was quite different from normal HTML, took a while to get used to it",
      "Once from made sense, the project was pretty straightforward. The API data was fetched, in this case, the data was Meme images",
      "The image was stored in state and useEffect was used to make new requests to Api whenever the Generate new image button was pressed",
      "The application could be improved by allowing the user to download their meme, enter more text options, and move the text on the image.",
    ],
    link: "https://vladeanclaudiu.github.io/react-meme-generator/",
    git: "https://github.com/VladeanClaudiu/ReactProjects/tree/main/react-meme-generator",
  },
];
