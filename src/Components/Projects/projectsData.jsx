import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiChakraui, SiMongodb, SiExpress, SiRedux } from "react-icons/si";
import { IoPieChartSharp } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const projectsData = [
  // WeLearn
  {
    img: "https://github.com/Adrian9502/WeLearn-SE2/blob/main/image.png?raw=true",
    title: "WeLearn - Web based sorting algorithms and binary operation game",
    description:
      "A Software Engineering 2 Project. This MERN stack application is an interactive quiz platform designed to help students and enthusiasts learn and practice sorting algorithms and binary operations through engaging, structured quizzes.",
    siteLink: "https://welearngame.vercel.app",
    siteCode: "https://github.com/Adrian9502/WeLearn-SE2",
    techStack: [
      { text: "MongoDB", icon: SiMongodb },
      { text: "ExpressJS", icon: SiExpress },
      { text: "React", icon: FaReact },
      { text: "Node.js", icon: FaNodeJs },
      { text: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  // Arise game review
  {
    img: "https://github.com/Adrian9502/Arise-Game-Review/blob/main/image_2024-09-01_214035526.png?raw=true",
    title: "Arise - Game Review",
    description:
      "This is my first website project and also this is our first website project in school at 2nd year college. Finished - February 13, 2024",
    siteLink: "https://arise-game-review.vercel.app",
    siteCode: "https://github.com/Adrian9502/Arise-Game-Review",
    techStack: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3Alt },
      { text: "JavaScript", icon: FaJsSquare },
    ],
  },
  // QuickBuy E commerce
  {
    img: "https://github.com/Adrian9502/react-e-commerce/blob/main/img.png?raw=true",
    title: "QuickBuy - E-Commerce",
    description:
      "An e-commerce website built with React, Tailwind CSS, and Redux uses an API to enable users to browse products, view details, and manage their shopping cart. It features a responsive design with product categories, a search function, and easy cart management.",
    siteLink: "https://react-e-commerce-deploy2-quickbuy.vercel.app",
    siteCode: "https://github.com/Adrian9502/react-e-commerce",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Tailwind", icon: RiTailwindCssFill },
      { text: "Redux", icon: SiRedux },
    ],
  },
  // MERN Advance auth
  {
    img: "https://github.com/Adrian9502/mern-advance-auth-system/blob/main/preview/login.png?raw=true",
    title: "MERN - Advance Auth",
    description:
      "This is a simple authentication system built with the MERN stack (MongoDB, Express, React, Node.js) and styled using Tailwind CSS. The system supports user registration, email verification, and password recovery.",
    siteLink: "https://mern-advance-auth-system.vercel.app/login",
    siteCode: "https://github.com/Adrian9502/mern-advance-auth-system",
    techStack: [
      { text: "MongoDB", icon: SiMongodb },
      { text: "ExpressJS", icon: SiExpress },
      { text: "React", icon: FaReact },
      { text: "Node.js", icon: FaNodeJs },
      { text: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  // Datkilab
  {
    img: "https://github.com/Adrian9502/react-datkilab/blob/main/image_2024-12-12_110522495.png?raw=true",
    title: "Datkilab - Reverse your words",
    description:
      "Flip your words and mess with your friends! Watch your text get reversed. It's a fun way to confuse your group chats and have a laugh!",
    siteLink: "https://react-datkilab.vercel.app",
    siteCode: "https://github.com/Adrian9502/react-datkilab",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  // M,E,R,N Blog App
  {
    img: "https://github.com/Adrian9502/mern-blog-app-with-tailwind/blob/main/mern.png?raw=true",
    title: "MERN Blog App",
    description:
      "A basic blog app using the MERN stack (MongoDB, Express, React, Node.js) lets users create, read, update, and delete blog posts.",
    siteLink: "https://mern-blog-app-with-tailwind-frontend.vercel.app",
    siteCode: "https://github.com/Adrian9502/mern-blog-app-with-tailwind",
    techStack: [
      { text: "MongoDB", icon: SiMongodb },
      { text: "ExpressJS", icon: SiExpress },
      { text: "React", icon: FaReact },
      { text: "Node.js", icon: FaNodeJs },
      { text: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  // BakeMart UI
  {
    img: "https://github.com/Adrian9502/bakemart-cafe-and-bakery/blob/main/preview/1.png?raw=true",
    title: "BakeMart - Cafe and Bakery",
    description:
      "I created this website UI for my Graphic Design subject, using React and Tailwind CSS for its development.",
    siteLink: "https://bakemart-cafe-and-bakery-deploy.vercel.app/",
    siteCode: "https://github.com/Adrian9502/bakemart-cafe-and-bakery",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  // Youtube Clone React
  {
    img: "https://github.com/Adrian9502/react-tailwind-youtube-clone/blob/main/yt.png?raw=true",
    title: "Youtube Clone React",
    description:
      "This project is a simple YouTube clone made with React and Tailwind CSS, using an API to allow users to search for and watch videos, as well as browse available content.",
    siteLink: "https://react-tailwind-youtube-clone-kohl.vercel.app",
    siteCode: "https://github.com/Adrian9502/react-tailwind-youtube-clone",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  // Recipe App 1
  {
    img: "https://github.com/Adrian9502/react-recipe-app-with-api/blob/main/thumb1.png?raw=true",
    title: "Taste Bites - Recipe App 1",
    description:
      "This is a React-based application that uses an API to let users search for recipes and display them by category or region. Built with Bootstrap and Hero Patterns.",
    siteLink: "https://react-recipe-app-with-api-vercel.vercel.app",
    siteCode: "https://github.com/Adrian9502/react-recipe-app-with-api",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Bootstrap", icon: FaBootstrap },
    ],
  },

  // Quiz game - Prototype of WELEARN
  {
    img: "https://github.com/Adrian9502/js-quiz-game-pixel-theme/blob/main/github-img/image3.png?raw=true",
    title: "Algorithm Quiz Game ",
    description:
      "Prototype from our Software Engineering 1 subject. It aims to teach students how algorithms and binary operations work.",
    siteLink: "https://js-quiz-game-pixel-theme.vercel.app",
    siteCode: "https://github.com/Adrian9502/js-quiz-game-pixel-theme",
    techStack: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3Alt },
      { text: "JavaScript", icon: FaJsSquare },
    ],
  },
  // Portfolio template
  {
    img: "https://github.com/Adrian9502/portfolio-template-with-glitch-animations/blob/main/img-thumb/1.png?raw=true",
    title: "Portfolio Template - Glitch",
    description:
      "This is the mini project i've created with purple theme and glitch,flick effect animation with customized glowing cursor.",
    siteLink: "https://portfolio-template-with-glitch-animations.vercel.app",
    siteCode:
      "https://github.com/Adrian9502/portfolio-template-with-glitch-animations",
    techStack: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3Alt },
      { text: "JavaScript", icon: FaJsSquare },
    ],
  },
  // Facebook Clone
  {
    img: "https://github.com/Adrian9502/react-tailwind-facebook-clone/blob/main/fb.png?raw=true",
    title: "Facebook Clone",
    description:
      "A simple Facebook clone built with React, Tailwind CSS, React Icons, and React Loader Spinner. The app features a header, sidebar, main content area, and a contacts section on the right.",
    siteLink: "https://react-tailwind-facebook-clone.vercel.app",
    siteCode: "https://github.com/Adrian9502/react-tailwind-facebook-clone",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  // Expense Tracker
  {
    img: "https://raw.githubusercontent.com/Adrian9502/react-expense-tracker-using-chakra-ui-and-apexchart/main/img1.png",
    title: "Expense Tracker",
    description:
      "This React app helps you track your expenses and income. You can add transaction details and see them updated in real time on a chart. A list of transactions is also displayed below the chart.",
    siteLink:
      "https://react-expense-tracker-using-chakra-ui-and-apexchart.vercel.app",
    siteCode:
      "https://github.com/Adrian9502/react-expense-tracker-using-chakra-ui-and-apexchart",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Tailwind", icon: RiTailwindCssFill },
      { text: "Chakra UI", icon: SiChakraui },
      { text: "Apex Chart", icon: IoPieChartSharp },
    ],
  },
  // React 20 Exercises App
  {
    img: "https://github.com/Adrian9502/react-20-exercises/blob/main/image_2024-08-31_204614257.png?raw=true",
    title: "React 20 Exercises App",
    description:
      "This project is a collection of 20 simple React exercises that demonstrate various concepts and functionalities in React. Each component showcases a different feature or tool, providing a comprehensive overview of practical React use cases.",
    siteLink: "https://react-20-exercises-vercel-deployment.vercel.app",
    siteCode: "https://github.com/Adrian9502/react-20-exercises",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  // Recipe App 2
  {
    img: "https://github.com/Adrian9502/react-tailwind-recipe-app-2/blob/main/img.png?raw=true",
    title: "Chef Bytes - Recipe App 2",
    description:
      "This Recipe App lets users search for recipes instantly as they type. Users can see recipe details, including ingredients, and add recipes to their favorites. They can also view and remove recipes from their favorites list.",
    siteLink: "https://react-tailwind-recipe-app-2-vercel-deploy.vercel.app",
    siteCode: "https://github.com/Adrian9502/react-tailwind-recipe-app-2",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  // To do List react
  {
    img: "https://github.com/Adrian9502/react-to-do-list/blob/main/thumbnail.png?raw=true",
    title: "To Do List - React",
    description:
      "This project is a simple todo list application built using React + Vite and Bootstrap. Understanding how useState work in ReactJS",
    siteLink: "https://todolist-vercel-five.vercel.app",
    siteCode: "https://github.com/Adrian9502/react-recipe-app-with-api",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Bootstrap", icon: FaBootstrap },
    ],
  },
  // weather app react
  {
    img: "https://github.com/Adrian9502/react-weather-app/blob/main/image_2024-09-01_125741737.png?raw=true",
    title: "Weather App",
    description:
      "This project is a simple weather application built using React and the OpenWeather API. It allows users to search for and view the current weather conditions in any city around the world.",
    siteLink: "https://weather-app-vercel-sepia.vercel.app",
    siteCode: "https://github.com/Adrian9502/react-recipe-app-with-api",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "Bootstrap", icon: FaBootstrap },
    ],
  },
  // color picker react
  {
    img: "https://github.com/Adrian9502/react-color-picker/blob/main/image_2024-09-22_203349362.png?raw=true",
    title: "Color Picker App",
    description:
      "A simple Color Picker application built with React. This app allows users to select and view different colors. Understanding how useState work in ReactJS",
    siteLink: "https://react-color-picker-iota.vercel.app",
    siteCode: "https://github.com/Adrian9502/react-color-picker",
    techStack: [
      { text: "React", icon: FaReact },
      { text: "CSS", icon: FaCss3Alt },
    ],
  },
  // digital clock and date
  {
    img: "https://github.com/Adrian9502/JS-digital-clock-and-date/blob/main/thumbnail.png?raw=true",
    title: "Digital Clock and Date",
    description:
      "JavaScript digital clock and date using dayjs external library",
    siteLink: "https://js-digital-clock-and-date.vercel.app",
    siteCode: "https://github.com/Adrian9502/JS-digital-clock-and-date",
    techStack: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3Alt },
      { text: "JavaScript", icon: FaJsSquare },
    ],
  },
  // Youtube Clone Vanilla JS
  {
    img: "https://github.com/Adrian9502/YouTube-Clone/blob/main/youtube.png?raw=true",
    title: "Youtube Clone - CSS",
    description:
      "Made from YouTube tutorial (supersimpleDev) 6 hours HTML, CSS course. I've learned a lot from this project and understand how css work.",
    siteLink: "https://adrian9502.github.io/YouTube-Clone/",
    siteCode: "https://github.com/Adrian9502/YouTube-Clone",
    techStack: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3Alt },
    ],
  },
  // Weather App Vanilla JS
  {
    img: "https://github.com/Adrian9502/JS-Weather-app/blob/main/image_2024-09-01_202617828.png?raw=true",
    title: "Weather App - JavaScript",
    description:
      "A weather app built with vanilla JavaScript that fetches real-time weather data from an API, helping me understand how fetching works.",
    siteLink: "https://adrian9502.github.io/JS-Weather-app/",
    siteCode: "https://github.com/Adrian9502/JS-Weather-app",
    techStack: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3Alt },
      { text: "JavaScript", icon: FaJsSquare },
    ],
  },
  // To Do list vanilla js
  {
    img: "https://github.com/Adrian9502/JS-ToDo-List/blob/main/image_2024-09-01_205205278.png?raw=true",
    title: "To Do List - JavaScript",
    description:
      "Simple JavaScript To-Do List app to manage tasks efficiently.",
    siteLink: "https://js-to-do-list-vert.vercel.app",
    siteCode: "https://github.com/Adrian9502/JS-ToDo-List",
    techStack: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3Alt },
      { text: "JavaScript", icon: FaJsSquare },
    ],
  },
  // Snake Game
  {
    img: "https://github.com/Adrian9502/JS-Snake-Game/blob/main/image_2024-09-01_213726063.png?raw=true",
    title: "Snake Game - JavaScript",
    description: "A simple Snake game built with HTML, CSS, and JavaScript",
    siteLink: "https://js-quiz-game-pixel-theme.vercel.app",
    siteCode: "https://github.com/Adrian9502/JS-Snake-Game",
    techStack: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3Alt },
      { text: "JavaScript", icon: FaJsSquare },
    ],
  },
  // Rock paper scissors
  {
    img: "https://github.com/Adrian9502/JS-rock-paper-scissors/blob/main/img-thumb/2.png?raw=true",
    title: "Rock-Paper-Scissors",
    description: "Simple rock paper scissors in javascript.",
    siteLink: "https://js-rock-paper-scissors-ruddy.vercel.app",
    siteCode: "https://github.com/Adrian9502/JS-rock-paper-scissors",
    techStack: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3Alt },
      { text: "JavaScript", icon: FaJsSquare },
    ],
  },
  // Amazon Clone - E commerce
  {
    img: "https://github.com/Adrian9502/js-amazon-clone/blob/main/img-thumb/1.png?raw=true",
    title: "Amazon clone - Vanilla JS",
    description:
      "This Amazon clone project, inspired by a YouTube tutorial, uses the Fetch API and covers concepts like async/await, promises, and URL parameters. It significantly boosted my JavaScript skills.",
    siteLink: "https://js-amazon-clone.vercel.app",
    siteCode: "https://github.com/Adrian9502/js-amazon-clone",
    techStack: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3Alt },
      { text: "JavaScript", icon: FaJsSquare },
    ],
  },
];
export default projectsData;
