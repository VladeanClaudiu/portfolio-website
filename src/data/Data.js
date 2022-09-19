export default [
  {
    key: 1,
    title: "Quizical",
    builtWith: ["[React]", "[JavaScript]", "[CSS]", "[API]", "[Figma]"],
    description:
      "This was a challenge that was part of the Scrimba React course I completed, this was a project which had to be completed without guidance, instructions on the final product were given and a fully working quiz had to be created. The questions and answers are fetched from the open trivia database API. The app design was provided by Scrimba and was done in Figma.",
    process: [
      "Base app Generated with Vite React",
      "Neccessary components were created",
      "Application was styled according to the provided Figma design",
      "React State and useEffect were used to handle api fetch response data",
      "Application functional logic completed for score keeping and whether or not the answers are correct",
    ],
    link: "https://vladeanclaudiu.github.io/quizical-react-app/",
    git: "https://github.com/VladeanClaudiu/ReactProjects/tree/main/react-quiz-app",
  },

  {
    key: 2,
    title: "Movie Watchlist Web-App",
    builtWith: ["[HTML]", "[JavaScript]", "[CSS]", "[API]"],
    description:
      "This is a solution to a solo project from Scrimba. Solo projects are meant to challenge the skills you've learnt so far through the courses, there is no solution given by Scrimba. The goal was to create a Web-App that used the OMDB Api to fetch and display data. The data was also stored on local storage. Movies could be added and removed from the watchlist.",
    process: [
      "The initial style for the application was based on the Figma design provided by Scrimba.",
      "With the CSS completed the next stage for formatting the fetch data",
      "The necessary functions were created, the function return data is then rendered",
      "The localstorage was set up and for the watchlist page, the functionality for adding and removing is added.",
    ],
    link: "https://vladeanclaudiu.github.io/movie-watchlist-app/",
    git: "https://github.com/VladeanClaudiu/WorkingWithAPI/blob/main/API-MovieWatchlist/",
  },

  {
    key: 3,
    title: "Color Scheme Generator",
    builtWith: ["[HTML]", "[JavaScript]", "[CSS]", "[API]"],
    description:
      "This is a solution to a solo project from Scrimba. This was my a very fun project to work on. Solo projects are meant to challenge the skills you've learnt so far through the courses; there is no solution given by Scrimba. The goal was to create a color scheme generator that used The Color Api to generate presets of colours based on the #hex value input of the user.",
    process: [
      "The CSS frame for the app was developed following the provided Scrimba, Figma mockup",
      "The fetched data from the database was formatted for use",
      "Formatted data was assigned to the div's background-color which were styled using CSS-grid",
      "The #hex value was displayed at the bottom of each color representing the #hex value",
      "When the hex value is clicked the user is alerted that the value was coppied.",
    ],
    link: "https://vladeanclaudiu.github.io/color-generator/",
    git: "https://github.com/VladeanClaudiu/WorkingWithAPI/tree/main/API-ColorGenerator",
  },
];
