const projectsData = {
  smashingMagazineAndNewScientist: {
    title: "Smashing Magazine & New Scientist Clones",
    description:
      "Project's meant to test responsive design as well as layout replication of Smashing Magazine and New Scientist",
    features: [
      "Responsively designed with flexbox and media queries for device dimensions",
      " Taught better layout design choices and help developed new ideas and standards for future projects",
      "Has mobile support",
    ],
    links: [
      ["Smashing Magazine - Original", "https://www.smashingmagazine.com/"],
      [
        "Smashing Magazine - Clone",
        "https://nickcascella.github.io/SmashingMagazineClone/",
      ],
      [
        "New Scientist - Original",
        "https://www.newscientist.com/article/2286218-ancient-lake-in-marss-gale-crater-may-have-actually-been-a-small-pond/",
      ],
      [
        "New Scientist - Clone",
        "https://nickcascella.github.io/NewScientistWebpageClone/",
      ],
    ],
  },
  twitterClone: {
    title: "Twitter Clone",
    description:
      "A partial twitter clone using React front-end and a Firebase hosted back-end, that attempts to emulate the core functions of tweeting and user profiles. In this application you can",
    features: [
      "Sign in using your google account.",
      "Post tweets to a global feed.",
      " Interact with other user tweets by liking, retweeting, and starting reply chains.",
      "Profile edits that alter previous tweets by the user such as username, bio, profile picture, and profile background image.",
      "Follow/Unfollow other users and viewing their profiles.",
      "Was designed only for display 1200px or larger, due to being made before learning about responsive design.",
    ],
    links: [["Twitter Clone", "https://twitter-clone-848fe.web.app/"]],
  },
  whereIsWaldo: {
    title: "Where's Waldo?",
    description:
      "The game Where's Waldo with more 2 more characters, you must find them in fastest time possible in order to get the best score! This project uses React front-end and a Firebase hosted back-end. This was my first project using a back-end for data storage, where in which is keeps data on user highscores and character positions.",
    features: [
      "With this being my first time using a Back-end service, this project taught me how to store and retrieve some basic information when needed. Such as data on user highscores and character positions.",
      "Was designed only for displays 1650px or larger, due to how large the actual game is.",
    ],
    links: [["Where's Waldo?!", "https://where-is-waldo-77531.web.app/"]],
  },
  odinShop: {
    title: "Odin Shop",
    description:
      "My first multi page application using React. This project is a store where you can purchase pokemon and pokemon related items using a pokemon api. Note, this was made before the concepts of responsive design were taught, works ideally on display ~1600px.",
    features: [
      `Demonstrated a simplified version of pagination where limits were
    put on api calls to retrieve only 20 pokemon every page
    when browsing in the shop pokemon section.`,
      "Uses api calls to retrieve data on various pokemon to be used by the app.",
      "Uses react router to dynamically load into pages based off which pokemon or item the user has clicked.",
    ],
    links: [["Odin Shop", "https://odin-shop.web.app/"]],
  },
  memoryGame: {
    title: "Memory Game",
    description:
      "My first React app. Taught me the basics of states and lifecylce methods. A game where you have to select pokemon and not pick the same one twice in order to get the highest score. Note this app only works for devices with display's approximately ~1600px",
    features: [
      "Taught me the basics of React.",
      "Taught me the differences between class and functional components.",
    ],
    links: [["Memory Game", "https://nickcascella.github.io/Memory-Game/"]],
  },
  battleship: {
    title: "Battleship",
    description:
      "Simulates a game of battleship with an enemy AI. This project is straight JS and uses webpack to bundle the files.",
    features: [
      "Taught me the basics of Webpack.",
      "Introduced me to the nature of game mechanics for more complicated games.",
    ],
    links: [["Battleship", "https://nickcascella.github.io/Memory-Game/"]],
  },
  weatherApp: {
    title: "Weather App",
    description:
      "My first functional App. Simply returns the weather and forecast for the location specified and provides the weekly forecast. This uses a free API and as such there are restrictions on what exactly you can search and what data you canget back. This app also allows you to convert from the metric system to imperial and vice versa.",
    features: ["Introduced me to api calls"],
    links: [["Weather App", "https://nickcascella.github.io/weather_app/"]],
  },
};

export default projectsData;
