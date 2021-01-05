const ACTIVITIES = [
  {
    title: "Dance",
    summary:"A high energy dance class where you will work on street dance foundation steps.",
    details:"Our students perform regularly at events across Manchester it's a great experience. Once you join, you will always want to be a part of our dance family.",
    quote:"I recommend this dance class to anyone, it's a great way to get fit and learn a new skill.",
    schedule: "Monday to Friday",
    maxcount: 10,
    category: "online",
    id: "dance",
  },
  {
    title: "Craft",
    schedule: "Monday to Friday",
    maxcount: 10,
    category: "online",
    id: "craft",
  },
  {
    title: "Drumming",
    summary:"Enjoy drumming and make some noise! Whether you're a beginner or want to improve your technique all abilities are welcome.",
    details:"We’re so proud to have a fantastic team of drum teachers. We cover all styles from rock and pop to blues and funk. Everything you need for the lesson will be provided in class.  ",
    quote:"I recommend this Drum class to anyone, it's a great way to chill out and learn a new skill.",
    schedule: "Monday & Wednesday",
    maxcount: 4,
    category: "premise",
    id: "drumming",
  },
  {
    title: "Cooking & Baking",
    summary: "Cooking and Baking - whatever we're making it'll always taste wonderful!",
    details: "Our cookery and baking courses are specifically designed to inspire and engage. Everyone always leaves inspired after having a great time in the kitchen under the amiable supervision of our chefs. Everything you need for the lesson you need will be provided in class.",
    quote: "I made this for my family and they all loved it. It's so easy to follow the instructions.",
    schedule: "Tuesday & Thursday",
    maxcount: 6,
    category: "premise",
    id: "cooking",
  },
  {
    title: "Writing",
    schedule: "Monday to Friday",
    maxcount: 10,
    category: "online",
    id: "writing",
  },
  {
    title: "Reading",
    schedule: "Monday to Friday",
    maxcount: 10,
    category: "online",
    id: "reading",
  },
];

const ActivityAPI = {
  get: (id) => {
    return ACTIVITIES.filter((activity) => {
      return activity.id.toUpperCase() === id.toUpperCase();
    })[0];
  },
};

export default ActivityAPI;
