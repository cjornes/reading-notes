alert("JS Activated")

function randomNumber(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 2)) + minCust;
}

const hoursOfBusy = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

console.log(table);
//creating the header of the tablejkjk
function createHeader() {
  let headerRow = document.createElement("tr");
  let tblHdr = document.createElement("th");
  tblHdr.textContent = "Locations";
  headerRow.appendChild(tblHdr);
  //
  for (let i = 0; i < hoursOfBusy.length; i++) {
    tblHdr = document.createElement("th");
    tblHdr.textContent = hoursOfBusy[i];
    headerRow.appendChild(tblHdr);
  }
  tblHdr = document.createElement("th");
  tblHdr.textContent = "Daily Location Total";
  headerRow.appendChild(tblHdr);
  table.appendChild(headerRow);
}

createHeader();

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
    this.theRandomTurnoutCE();
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
    let dataRow = document.createElement("tr"); //this creates a tr node
    let seattleData = document.createElement("td");
    seattleData.textContent = "Seattle";
    dataRow.appendChild(seattleData);
    //for loop to go through bhours array
    for (let i = 0; i < hoursOfBusy.length; i++) {
      seattleData = document.createElement("td");
      seattleData.textContent = this.CookieSalePH[i];
      dataRow.appendChild(seattleData);
    }
    seattleData = document.createElement("td");
    seattleData.textContent = this.totalSoldPerDay;
    dataRow.appendChild(seattleData);
    table.appendChild(dataRow);
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
      this.theRandomTurnoutCE();
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
      let dataRow = document.createElement("tr"); //this creates a tr node
      let seattleData = document.createElement("td");
      seattleData.textContent = "Tokyo";
      dataRow.appendChild(seattleData);
      //for loop to go through bhours array
      for (let i = 0; i < hoursOfBusy.length; i++) {
        seattleData = document.createElement("td");
        seattleData.textContent = this.CookieSalePH[i];
        dataRow.appendChild(seattleData);
      }
      seattleData = document.createElement("td");
      seattleData.textContent = this.totalSoldPerDay;
      dataRow.appendChild(seattleData);
      table.appendChild(dataRow);
    },
  };

  //create ojects
let dubaiLocation = {
  //list properties of object
    minCust: 11,
    maxCust: 38,
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
      this.theRandomTurnoutCE();
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
      let dataRow = document.createElement("tr"); //this creates a tr node
      let seattleData = document.createElement("td");
      seattleData.textContent = "Dubai";
      dataRow.appendChild(seattleData);
      //for loop to go through bhours array
      for (let i = 0; i < hoursOfBusy.length; i++) {
        seattleData = document.createElement("td");
        seattleData.textContent = this.CookieSalePH[i];
        dataRow.appendChild(seattleData);
      }
      seattleData = document.createElement("td");
      seattleData.textContent = this.totalSoldPerDay;
      dataRow.appendChild(seattleData);
      table.appendChild(dataRow);
    },
  };

  //create ojects
let parisLocation = {
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
      this.theRandomTurnoutCE();
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
      let dataRow = document.createElement("tr"); //this creates a tr node
      let seattleData = document.createElement("td");
      seattleData.textContent = "Paris";
      dataRow.appendChild(seattleData);
      //for loop to go through bhours array
      for (let i = 0; i < hoursOfBusy.length; i++) {
        seattleData = document.createElement("td");
        seattleData.textContent = this.CookieSalePH[i];
        dataRow.appendChild(seattleData);
      }
      seattleData = document.createElement("td");
      seattleData.textContent = this.totalSoldPerDay;
      dataRow.appendChild(seattleData);
      table.appendChild(dataRow);
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
      this.theRandomTurnoutCE();
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
      let dataRow = document.createElement("tr"); //this creates a tr node
      let seattleData = document.createElement("td");
      seattleData.textContent = "Lima";
      dataRow.appendChild(seattleData);
      //for loop to go through bhours array
      for (let i = 0; i < hoursOfBusy.length; i++) {
        seattleData = document.createElement("td");
        seattleData.textContent = this.CookieSalePH[i];
        dataRow.appendChild(seattleData);
      }
      seattleData = document.createElement("td");
      seattleData.textContent = this.totalSoldPerDay;
      dataRow.appendChild(seattleData);
      table.appendChild(dataRow);
    },
  };

  //seattleLocation.make();
  //tokyoLocation.make();
  //dubaiLocation.make();
  //parisLocation.make();
  //limaLocation.make();
  //Make an array where locations can be called together SHOUTOUT SPENCER & JERROD
  let elocations =[seattleLocation,tokyoLocation,dubaiLocation,parisLocation,limaLocation];
  //
   //for (let index = 0; index < elocations.length; index++) {
     //elocations[index].make();
   //}

   function renderTable() {
     let table = document.getElementById("table");
     let tableRow = table.createElement("tr");
     let tableHdr = table.createElement("th");
     tableHdr.textContent = "Totals";
     tableRow.appendChild(tableHdr);

     let wholeSum = 0;
     //
     for (let i = 0; i < hoursOfBusy.length; i++) {
       let hoursTotal = 0;

       for (let j = 0; j < elocations.length; j++) {
         hoursTotal += elocations[j].CookieSalePH[i];
         wholeSum += hoursTotal;
       }
       tableHdr = document.createElement("th");
       tableHdr.textContent = hoursTotal;
       tableRow.appendChild(tableHdr);
     }
     tableHdr = document.createElement("th");
     tableHdr.textContent = wholeSum;
     tableRow.appendChild(tableHdr);
     table.appendChild(tableRow);
   }

   //elocations.render();

   seattleLocation.make();
   parisLocation.make();
   dubaiLocation.make();
   limaLocation.make();
   tokyoLocation.make();

   //renderTable();

