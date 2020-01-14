// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isAdmin: true,
      isLoggedIn: true,
      avatar: "thor.png"
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    videotitle: "video title goes here",
    videodescription: "vid description goes here",
    videosource: "",

    showDetails: false
  },

  methods: {
    logInOut() {
      // test the login / logout UI -> button should change color
      // eventually we'll use routing and a login component
      console.log('do login / logout on click');

      // ? : is a ternary statement (shorthand for if / else)
      // evaluate the expression; if it's true, use the value to the left
      // of the colon. if it's false, use the value to the right
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    setUserPrefs() {
      console.log('set user prefs via routing and probably a component');


    },

    // this is ES6 data destructuring - pull the keys and values you need, not the whole object
    loadMovie({name, description, vidsource}) {
      console.log('show movie details');

      this.videotitle = name;
      this.videodescription = description;
      this.videosource = vidsource;

      this.showDetails = true;
    }
  }
});
