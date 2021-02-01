/* const ACTIVITIES = [
  {
    title: "Dance",
    summary:
      "A high energy dance class where you will work on street dance foundation steps.",
    details:
      "Our students perform regularly at events across Manchester it's a great experience. Once you join, you will always want to be a part of our dance family.",
    quote:
      "I recommend this dance class to anyone, it's a great way to get fit and learn a new skill.",
    schedule: "Monday to Friday",
    maxcount: 10,
    category: "premise",
    id: "3",
  },
  {
    title: "Craft",
    summary: "Arts and Crafts workshops and techniques",
    details:"Learn how to paint, knit, crochet, sew, screen print, and more",
    schedule: "Monday to Friday",
    maxcount: 10,
    category: "online",
    id: "2",
  },
  {
    title: "Drumming",
    summary:
      "Enjoy drumming and make some noise! Whether you're a beginner or want to improve your technique all abilities are welcome.",
    details:
      "We’re so proud to have a fantastic team of drum teachers. We cover all styles from rock and pop to blues and funk. Everything you need for the lesson will be provided in class.  ",
    quote:
      "I recommend this Drum class to anyone, it's a great way to chill out and learn a new skill.",
    schedule: "Monday & Wednesday",
    maxcount: 4,
    category: "premise",
    id: "3",
  },
  {
    title: "Cooking",
    summary:
      "Cooking and Baking - whatever we're making it'll always taste wonderful!",
    details:
      "Our cookery and baking courses are specifically designed to inspire and engage. Everyone always leaves inspired after having a great time in the kitchen under the amiable supervision of our chefs. Everything you need for the lesson you need will be provided in class.",
    quote:
      "I made this for my family and they all loved it. It's so easy to follow the instructions.",
    schedule: "Tuesday & Thursday",
    maxcount: 6,
    category: "premise",
    id: "4",
  },

  {
    title: "Reading",
    summary:"Come join our book club, there's never been a better time to start from the comfort of your own home!",
    details:"On the first Tuesday of each month, we put a theme or author to a club vote and settle on a book chosen by you.",
    quote:"Books offer the chance to explore anywhere in this universe, this is especially great at the moment.",
    schedule: "Monday to Friday",
    maxcount: 10,
    category: "online",
    id: "5",
  },
  {
    title: "Writing",
    summary:"Creative writing course",
    details:"",
    quote:"",
    schedule: "Monday to Friday",
    maxcount: 10,
    category: "online",
    id: "6",
  },
];
 */

import axios from "axios";

const Activities = [];

const ActivityAPI = {
  get: (id) => {
    return Activities.filter((activity) => {
      return activity.title.toUpperCase() === id.toUpperCase();
    })[0];
  },
  getAll: () => {
   return axios
    .get(
      "https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/allActivity"
    ).then((response) => response.data)
    // //if error, log error
    // .catch((error) => console.log("error = " + error));
  },
  delete: (id) => {
    return axios.delete("https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com/dev/Booking/" + id)
  }
};

export default ActivityAPI;
