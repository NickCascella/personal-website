const projectsData = {
  puddl: {
    title: "Puddl",
    description:
      "My first project involving collaboration with other developers. Currently this is planned to be a social app where you are placed in random groups with a certain amount of users. You can chat about various topics as well as play premade games in the group. I was assigned to work on the avatar creation feature for this app.",
    features: [
      "Got to have my code peer reviewed through GIT, learned many different organizational tips, and learned better coding practicies in general through my team members.",
      "Satisifed the requirements of what was asked of me in terms of functionality.",
      "Got to work in and learn about the basics of Next JS.",
      "Got to learn about SASS and the benefits it has over standard CSS.",
      "Got to work with the external library (Dicebears) with the styling of Open Peeps to allow the users to create custom avatars.",
      "This was my first instance of using server-side handling to make requests. Making all avatar creation methods server side, so that users do not have to handle anything regarding the Dicebear library on their end.",
      "Used a Firebase database to store and edit the avatar at any given time, as well as to host all differently rendered facial expressions of the newly created avatar to be used as sticker types for the chat application and elsewhere.",
      "Has mobile support.",
    ],
    downsides: [
      "While my code worked as required, my code faced alterations as to match the styles of the more experienced developers and to be overall more efficent.",
      "PLEASE NOTE: The app is facing continual updates and is in very early development, meaning at times of viewing it could be bugged and/or not functioning for testing purposes.",
    ],
    links: [
      ["Puddl", "https://puddl.chat"],
      ["Openpeeps library", "https://avatars.dicebear.com/styles/open-peeps"],
    ],
  },
  smashingMagazineAndNewScientist: {
    title: "Smashing Magazine & New Scientist Clones",
    description:
      "Projects meant to test responsive design as well as layout replication of Smashing Magazine and New Scientist.",
    features: [
      "Was able to emulate most features and a similar look to the original.",
      "Responsively designed with flexbox and media queries for varying device dimensions.",
      "Taught better layout design choices and help developed new ideas and standards for future projects.",
      "Has mobile support.",
    ],
    downsides: [
      "Not all design choices were replicated.",
      "All CSS styling is in one file. I underestimated how large the project file would become which led to difficulty when attempting to make edits. A takeaway for future projects.",
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
      "A twitter clone using a React front-end and a Firebase hosted back-end that attempts to emulate the core functions of tweeting and user profiles.",
    features: [
      "Sign in using your google account.",
      "Post tweets to a global feed.",
      "Interact with other user tweets by liking, retweeting, and starting reply chains.",
      "Make profile edits that can also alter previous tweets by the user. Modifiable features include display name, bio, profile picture, and profile background image.",
      "Follow/Unfollow other users and view their profiles.",
    ],
    downsides: [
      "Responsive design was not taught at this point in the course, PLEASE USE ON DEVICES WITH DISPLAYS ~ 1600px wide.",
      "First big application. The code base is not very structured. Learned a lot of organziational tips for future projects.",
      "Bugs are still present in the application.",
    ],
    links: [["Twitter Clone", "https://twitter-clone-848fe.web.app/"]],
  },
  whereIsWaldo: {
    title: "Where's Waldo?",
    description:
      "The game Where's Waldo with multiple characters to find, you must find them in the fastest time possible in order to get the best score. This project uses a React front-end and a Firebase hosted back-end. This was my first project using a back-end for data storage, where data on user highscores and character positions are kept and retrieved for their respective purposes.",
    features: [
      "Taught me how to store, retrieve, and organize information from a database.",
    ],
    downsides: [
      "Responsive design was not taught at this point in the course, PLEASE USE ON DEVICES WITH DISPLAYS ~ 1600px wide or wider.",
    ],
    links: [["Where's Waldo?!", "https://where-is-waldo-77531.web.app/"]],
  },
  odinShop: {
    title: "Odin Shop",
    description:
      "My first multi-page application using React. This project is an online store where you can purchase Pokemon and Pokemon related items using a Pokemon API.",
    features: [
      "Uses different sets of API calls to retrieve data on various Pokemon to be displayed.",
      "Uses React router to dynamically load into pages based off which pokemon or item the user has clicked.",
    ],
    downsides: [
      "Responsive design was not taught at this point in the course, PLEASE USE ON DEVICES WITH DISPLAYS ~ 1600px wide.",
    ],
    links: [["Odin Shop", "https://odin-shop.web.app/"]],
  },
  memoryGame: {
    title: "Memory Game",
    description:
      "My first React app. In order to acheive the highest score possible, the player must not select the same card more than twice in a single run. After a card has been chosen, the cards are shuffled and the player must keep track of which cards they have not yet selected.",
    features: [
      "Taught me the basics of states and lifecycle methods with React.",
      "Taught me the differences between class and functional components.",
    ],
    downsides: [
      "Has little CSS styling. This game was only meant to demonstrate the basics of React.",
      "Responsive design was not taught at this point in the course, PLEASE USE ON DEVICES WITH DISPLAYS ~ 1600px wide.",
    ],
    links: [["Memory Game", "https://nickcascella.github.io/Memory-Game/"]],
  },
  battleship: {
    title: "Battleship",
    description:
      "Simulates a game of Battleship with an enemy AI. This project consists of JS and uses webpack to package the files.",
    features: [
      "Taught me the basics of Webpack.",
      "Introduced me to more complicated game mechanics.",
    ],
    downsides: [
      "Responsive design was not taught at this point in the course, PLEASE USE ON DEVICES WITH DISPLAYS ~ 1600px wide.",
    ],
    links: [["Battleship", "https://nickcascella.github.io/Battleship/"]],
  },
  weatherApp: {
    title: "Weather App",
    description:
      "My first functional app which displays the weather and weekly forecast for the location specified. This uses a free API and as such there are restrictions on what exactly you can search and what data you can retrieve. You can display the weather in either metric or imperial units.",
    features: ["Introduced me to API calls."],
    downsides: [
      "Search function is limited due to API restrictions.",
      "Responsive design was not taught at this point in the course, PLEASE USE ON DEVICES WITH DISPLAYS ~ 1600px wide.",
    ],
    links: [["Weather App", "https://nickcascella.github.io/weather_app/"]],
  },
};

export default projectsData;
