import puddleExample from "../../assets/images/projects/puddleExample.png";

const projectsData = {
  blog: {
    title: "Blog Project",
    description:
      "First project where front-end and back-end sites are seperated. Two front-end sites: one for admins to implement CRUD for blogs. One for general users to implement CRUD for comments on said blogs. One dedicated back-end site to receive and authenticate requests.",
    features: [
      "Utilizies Node with Express back-end as well as the database MongoDb used with Mongoose.",
      "A signup and login feature to access the sites, the user is stored in a JWT.",
      "Json web token based authentication through PassportJs.",
      "The back-end authentication utilizes CORS to only permit these two front-ends to send requests for security purposes.",
      "Both front-end sites use Axios to make CRUD requests (POST,GET,PUT,DELETE).",
      "Seperated back-end from front-ends for more flexibility.",
      "Mobile support.",
    ],
    downsides: [
      "Does not utilize refresh tokens, as a result the access token the user is granted will expire in 20 minutes requiring them to login once more.",
      "Since this is not session based, refreshing the page will cause the user to lose the token causing them to sign out.",
    ],
    links: [
      ["Blog User Portal", "https://blog-user-portal-top.herokuapp.com/"],
      ["Blog Admin Portal", "https://agile-plains-23571.herokuapp.com/"],
      ["Blog Server", "https://enigmatic-harbor-91646.herokuapp.com/"],
    ],
  },
  membersOnly: {
    title: "Members Only",
    description:
      "A back-end focused project where you must create an account to join a messaging forum. There are also membership tiers you can obtain which provide access to more features on the site.",
    features: [
      "Utilizies Node with Express back-end as well as the database MongoDb used with Mongoose.",
      "A signup and login feature to access the site, the user and account tier is stored in the session.",
      "Session based authentication with PassportJs. User may upgrade their account tier through entering certain codes to gain access to various perks.",
      "Uses GET and POST requests fetch, create, and delete data from the database.",
      "Uses the view engine PUG to render static pages as well as dynamic data from the database.",
      "Mobile support.",
    ],
    downsides: [
      "Uses POST requests to make all update, fetch, and delete requests. Did not yet teach PUT or DELETE options to simplify the lesson.",
      "Back-end and Front-end hosted together on the same site.",
    ],
    links: [["Members Only", "https://members-admins-only.herokuapp.com/home"]],
  },
  breadStore: {
    title: "Bread Store",
    description:
      "First back-end focused project whereby you may purchases various breads from select bread brands and add them to a shopping cart. You may also create said brands on the site as well as their various breads.",
    features: [
      "Utilizies Node with Express back-end as well as the database MongoDb used with Mongoose.",
      "Taught the basics of making GET and POST requests to the server to fetch, create, update, and delete data from the database.",
      "Taught the idea of basic authetnication for requiring passcodes to make certain requests such as updating or deleting brands/certain breads.",
      "Introduced me to the view engine PUG to render static pages as well as dynamic data from the database.",
      "Used the middleware Multer to allow the uploading of images to the site.",
      "Introduced me to .env file types to protect certain pieces of data.",
      "Mobile support",
    ],
    downsides: [
      "Uses POST requests to make all update, fetch, and delete requests. Did not yet teach PUT or DELETE options to simplify the lesson.",
      "Back-end and Front-end hosted together on the same site.",
      "No login required. The shopping cart is the same for all users.",
      "Multer only saves images on the local device sending them, only the reference to the image goes to the database. Meaning other devices cannot see these images as only the reference to the local image is saved to the database.",
    ],
    links: [
      [
        "Bread Store",
        "https://inventory-application-bread.herokuapp.com/catalog",
      ],
    ],
  },
  puddl: {
    title: "Puddl",
    description:
      "My first mobile app project involving collaboration with other developers. Currently this is planned to be a social app where you are placed in random groups with a certain amount of users. You can chat about various topics as well as play premade games in the group. I was assigned to work on the avatar creation feature.",
    features: [
      "Got to have my code peer reviewed through GIT, learned many different organizational tips, and learned better coding practicies in general through my team members.",
      "Satisifed the requirements of what was asked of me in terms of functionality.",
      "Got to work in and learn about React Native and Expo for mobile applications.",
      "Got to work with the external library (Dicebears) with the styling of Open Peeps to allow the users to create custom avatars.",
      "Used a Firebase database to store and edit the avatar at any given time, as well as to host all differently rendered facial expressions of the newly created avatar to be used as sticker types for the chat application and elsewhere.",
      "Gained expereince working in a progamming enviornment built for both IOS and Android and the challenges that come with that.",
    ],
    downsides: [
      "While my code worked as required, my code faced alterations as to match the styles of the more experienced developers and to be overall more efficent.",
      "PLEASE NOTE: This app is in early devlopment and is currently only viewable in person as neither the app or codebase is public",
    ],
    links: [
      ["Openpeeps library", "https://avatars.dicebear.com/styles/open-peeps"],
    ],
    imgs: [
      [
        puddleExample,
        "Puddl avatar creation screen",
        "Snapshot of avatar creation screen - IOS",
      ],
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
  // memoryGame: {
  //   title: "Memory Game",
  //   description:
  //     "My first React app. In order to acheive the highest score possible, the player must not select the same card more than twice in a single run. After a card has been chosen, the cards are shuffled and the player must keep track of which cards they have not yet selected.",
  //   features: [
  //     "Taught me the basics of states and lifecycle methods with React.",
  //     "Taught me the differences between class and functional components.",
  //   ],
  //   downsides: [
  //     "Has little CSS styling. This game was only meant to demonstrate the basics of React.",
  //     "Responsive design was not taught at this point in the course, PLEASE USE ON DEVICES WITH DISPLAYS ~ 1600px wide.",
  //   ],
  //   links: [["Memory Game", "https://nickcascella.github.io/Memory-Game/"]],
  // },
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
  // weatherApp: {
  //   title: "Weather App",
  //   description:
  //     "My first functional app which displays the weather and weekly forecast for the location specified. This uses a free API and as such there are restrictions on what exactly you can search and what data you can retrieve. You can display the weather in either metric or imperial units.",
  //   features: ["Introduced me to API calls."],
  //   downsides: [
  //     "Search function is limited due to API restrictions.",
  //     "Responsive design was not taught at this point in the course, PLEASE USE ON DEVICES WITH DISPLAYS ~ 1600px wide.",
  //   ],
  //   links: [["Weather App", "https://nickcascella.github.io/weather_app/"]],
  // },
};

// "Got to have my code peer reviewed through GIT, learned many different organizational tips, and learned better coding practicies in general through my team members.",
// "Satisifed the requirements of what was asked of me in terms of functionality.",
// "Got to work in and learn about the basics of Next JS.",
// "Got to learn about SASS and the benefits it has over standard CSS.",
// "Got to work with the external library (Dicebears) with the styling of Open Peeps to allow the users to create custom avatars.",
// "This was my first instance of using server-side handling to make requests. Making all avatar creation methods server side, so that users do not have to handle anything regarding the Dicebear library on their end.",
// "Used a Firebase database to store and edit the avatar at any given time, as well as to host all differently rendered facial expressions of the newly created avatar to be used as sticker types for the chat application and elsewhere.",
// "Has mobile support.",

export default projectsData;
