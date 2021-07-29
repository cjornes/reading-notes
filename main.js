alert("JS Activated")

function randomNumber(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 2)) + minCust;
}

const hoursOfBusy = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//create ojects
let seattleLocation = {
//list properties of object
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  CookiePH:[],
  CookieSalePH: [],
  totalSoldPerDay: 0,

  //Customer turnout expectation
  theRandomTurnoutCE: function () {
    for (let z = 0; z < hoursOfBusy.length; z++) {
      this.CookiePH.push(randomNumber(this.minCust, this.maxCust));
    }
  },
  getTheCookiesSPH: function () {
    this.theRandomCE();
    for (let c = 0; c < this.CookiePH.length; c++) {
      let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
      this.CookieSalePH.push(todayCookies);
      //
      this.totalSoldPerDay += todayCookies;
    }
  },
  //Make to write out code on webpage
  make() {
    this.getTheCookiesSPH();
    const unorderedList = document.getElementById("seattle");
    for (let y = 0; y < hoursOfBusy.length; y++) {
      const listItem = document.createElment("Li");

      listItem.textContent = hoursOfBusy[y] + ": " + this.CookieSalePH[y] + " cookies";
      unorderedList.apendChild(listItem);
    }
    const listItem = document.createElement("Li");
    listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
    unorderedList.appendChild(listItem);
  },
};

//create ojects
let tokyoLocation = {
  //list properties of object
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    CookiePH:[],
    CookieSalePH: [],
    totalSoldPerDay: 0,
  
    //Customer turnout expectation
    theRandomTurnoutCE: function () {
      for (let z = 0; z < hoursOfBusy.length; z++) {
        this.CookiePH.push(randomNumber(this.minCust, this.maxCust));
      }
    },
    getTheCookiesSPH: function () {
      this.theRandomCE();
      for (let c = 0; c < this.CookiePH.length; c++) {
        let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
        this.CookieSalePH.push(todayCookies);
        //
        this.totalSoldPerDay += todayCookies;
      }
    },
    //Make to write out code on webpage
    make() {
      this.getTheCookiesSPH();
      const unorderedList = document.getElementById("seattle");
      for (let y = 0; y < hoursOfBusy.length; y++) {
        const listItem = document.createElment("Li");
  
        listItem.textContent = hoursOfBusy[y] + ": " + this.CookieSalePH[y] + " cookies";
        unorderedList.apendChild(listItem);
      }
      const listItem = document.createElement("Li");
      listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
      unorderedList.appendChild(listItem);
    },
  };

  //create ojects
let Location = {
  //list properties of object
    minCust: 11,
    maxCust: 37,
    avgCookies: 3.7,
    CookiePH:[],
    CookieSalePH: [],
    totalSoldPerDay: 0,
  
    //Customer turnout expectation
    theRandomTurnoutCE: function () {
      for (let z = 0; z < hoursOfBusy.length; z++) {
        this.CookiePH.push(randomNumber(this.minCust, this.maxCust));
      }
    },
    getTheCookiesSPH: function () {
      this.theRandomCE();
      for (let c = 0; c < this.CookiePH.length; c++) {
        let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
        this.CookieSalePH.push(todayCookies);
        //
        this.totalSoldPerDay += todayCookies;
      }
    },
    //Make to write out code on webpage
    make() {
      this.getTheCookiesSPH();
      const unorderedList = document.getElementById("seattle");
      for (let y = 0; y < hoursOfBusy.length; y++) {
        const listItem = document.createElment("Li");
  
        listItem.textContent = hoursOfBusy[y] + ": " + this.CookieSalePH[y] + " cookies";
        unorderedList.apendChild(listItem);
      }
      const listItem = document.createElement("Li");
      listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
      unorderedList.appendChild(listItem);
    },
  };

  //create ojects
let dubaiLocation = {
  //list properties of object
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    CookiePH:[],
    CookieSalePH: [],
    totalSoldPerDay: 0,
  
    //Customer turnout expectation
    theRandomTurnoutCE: function () {
      for (let z = 0; z < hoursOfBusy.length; z++) {
        this.CookiePH.push(randomNumber(this.minCust, this.maxCust));
      }
    },
    getTheCookiesSPH: function () {
      this.theRandomCE();
      for (let c = 0; c < this.CookiePH.length; c++) {
        let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
        this.CookieSalePH.push(todayCookies);
        //
        this.totalSoldPerDay += todayCookies;
      }
    },
    //Make to write out code on webpage
    make() {
      this.getTheCookiesSPH();
      const unorderedList = document.getElementById("seattle");
      for (let y = 0; y < hoursOfBusy.length; y++) {
        const listItem = document.createElment("Li");
  
        listItem.textContent = hoursOfBusy[y] + ": " + this.CookieSalePH[y] + " cookies";
        unorderedList.apendChild(listItem);
      }
      const listItem = document.createElement("Li");
      listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
      unorderedList.appendChild(listItem);
    },
  };

  //create ojects
let parisLocation = {
  //list properties of object
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    CookiePH:[],
    CookieSalePH: [],
    totalSoldPerDay: 0,
  
    //Customer turnout expectation
    theRandomTurnoutCE: function () {
      for (let z = 0; z < hoursOfBusy.length; z++) {
        this.CookiePH.push(randomNumber(this.minCust, this.maxCust));
      }
    },
    getTheCookiesSPH: function () {
      this.theRandomCE();
      for (let c = 0; c < this.CookiePH.length; c++) {
        let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
        this.CookieSalePH.push(todayCookies);
        //
        this.totalSoldPerDay += todayCookies;
      }
    },
    //Make to write out code on webpage
    make() {
      this.getTheCookiesSPH();
      const unorderedList = document.getElementById("seattle");
      for (let y = 0; y < hoursOfBusy.length; y++) {
        const listItem = document.createElment("Li");
  
        listItem.textContent = hoursOfBusy[y] + ": " + this.CookieSalePH[y] + " cookies";
        unorderedList.apendChild(listItem);
      }
      const listItem = document.createElement("Li");
      listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
      unorderedList.appendChild(listItem);
    },
  };

  //create ojects
let limaLocation = {
  //list properties of object
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    CookiePH:[],
    CookieSalePH: [],
    totalSoldPerDay: 0,
  
    //Customer turnout expectation
    theRandomTurnoutCE: function () {
      for (let z = 0; z < hoursOfBusy.length; z++) {
        this.CookiePH.push(randomNumber(this.minCust, this.maxCust));
      }
    },
    getTheCookiesSPH: function () {
      this.theRandomCE();
      for (let c = 0; c < this.CookiePH.length; c++) {
        let todayCookies = Math.floor(this.CookiePH[c] * this.avgCookies);
        this.CookieSalePH.push(todayCookies);
        //
        this.totalSoldPerDay += todayCookies;
      }
    },
    //Make to write out code on webpage
    make() {
      this.getTheCookiesSPH();
      const unorderedList = document.getElementById("seattle");
      for (let y = 0; y < hoursOfBusy.length; y++) {
        const listItem = document.createElment("Li");
  
        listItem.textContent = hoursOfBusy[y] + ": " + this.CookieSalePH[y] + " cookies";
        unorderedList.apendChild(listItem);
      }
      const listItem = document.createElement("Li");
      listItem.textContent = "Total: " + this.totalSoldPerDay + " cookies";
      unorderedList.appendChild(listItem);
    },
  };

  //seattleLocation.make();
  //tokyoLocation.make();
  //dubaiLocation.make();
  //parisLocation.make();
  //limaLocation.make();
  //Make an array where locations can be called together SHOUTOUT SPENCER & JERROD
  let elocations =[seattleLocation,tokyoLocation,dubaiLocation,parisLocation,limaLocation]
  //
   for (let index = 0; index < elocations.length; index++) {
     elocations[index].make();
   }