import React from "react";
import Hulu from "../assests/Hulu.png";
import WatchList from "../assests/watchlist.png";
import Crypto from "../assests/price_prediction.png";
import Slack from "../assests/slack.png";
import Calorie from "../assests/Screenshot_1650537291.png";

import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <div className="w-full py-16 px-4" id="projects">
      <hr className="border h-0 mx-20 mb-20" />
      <div className="text-center mb-10">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          Projects
        </h1>
      </div>
      <SingleProject
        title={"Calorie Counter"}
        keySkills={" React Native, Python, Firebase, Machine Learning"}
        link={"https://github.com/R0HITLUDBE/calorie-counter"}
        img={Hulu}
        descr={
          " User can keep track of food and calorie intake for promoting weight loss. Simplified process of tracking calories burnt. Beneficial for user to monitor progress."
        }
        subH={"FINAL YEAR PROJECT"}
      />
      <hr className="border h-0 m-20 " />
      <SingleProject
        title={"Hulu UI"}
        keySkills={" NextJS ,tailwind css, vercel , themoviedb Api."}
        link={"https://hulu-clone-jade-eight.vercel.app/"}
        img={Hulu}
        descr={
          " Responsive UI developed using nextjs framework. Data is fetch using Themoviedb api"
        }
        subH={"RESPONSIVE UI"}
      />
      <hr className="border h-0 m-20" />
      <SingleProject
        title={"Movie watchlist"}
        keySkills={" ReactJS, React-router-dom, Context Api, themoviedb Api."}
        link={"https://peaceful-shaw-30a67e.netlify.app/"}
        img={WatchList}
        descr={
          " Movies are fetched from themoviedb api. User can search movies and realtime suggestions will be made. User can add, update, remove movies in Watched or Watchlist section."
        }
        subH={"WEBAPP"}
      />
      <hr className="border h-0 m-20" />
      <SingleProject
        title={"Crypto Currency price predictor"}
        keySkills={" Machine Learning, Python, Yahoo finance, steamlit."}
        link={"https://github.com/R0HITLUDBE/cryptocurrency-price-prediction"}
        img={Crypto}
        descr={
          " Movies are fetched from themoviedb api. User can search movies and realtime suggestions will be made. User can add, update, remove movies in Watched or Watchlist section."
        }
        subH={"Machine Learning"}
      />
      <hr className="border h-0 m-20" />
      <SingleProject
        title={"Slack website"}
        keySkills={
          " ReactJS, React-router-dom, Context Api, Firebase(Database), materialUi."
        }
        link={"https://slack-clone-4b442.web.app/"}
        img={Slack}
        descr={
          " User can sign-in using Google Account. User can create a channel. Multiple User can chat in a created channel. Chats are stored in database."
        }
        subH={"WEBAPP"}
      />
      <hr className="border h-0 mt-20 mx-20" />
    </div>
  );
};

export default Projects;
