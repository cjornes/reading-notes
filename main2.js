'use strict';

//array for store hours 
const storeHrs = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm'];

// total cookies per hour for all stores
let totalCookiesPerHour = [];


//function used to add store
function addStore (event) {
  event.preventDefault();

  let name =event.target.name.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target.maxCust.value;
  let avgCustomerSale = event.target.avgCustomerSale.value;

  let newStore = new Store (name, minCust, maxCust,avgCustomerSale);
  // Can't use render method anymore, using push method to push the new store entered by user onto the AllStores array (or at the end of the table)
  allStores.push(newStore);
  //this will clear out the existing table and build it again
  renderTable();
}


//store constructor and prototype methods
function Store (name, minCust, maxCust,avgCustomerSale) { //constructor function
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.totalCookies = 0;
  this.cookieSalesPerHr = [];
  this.avgCustSale = avgCustomerSale;
  this.storeHrs= storeHrs;
}

Store.prototype.render= function() {// function to create table
  let mainTable = document.getElementById('mainTable'); // reference to the table 
  let storeTableRow = document.createElement('tr');// creates a table row  
  //create table data for store name
  let storeNameTableData = document.createElement('td'); 
  // set the content of the table data
  storeNameTableData.textContent = this.name; 
  storeTableRow.appendChild(storeNameTableData);//adds data to table

  
 
  // Loop through storeHrs and create table data for each one
  for (let i = 0; i < this.storeHrs.length; i++) {
    let custThisHour = this.getRandomNum(this.minCust,this.maxCust);
    let cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
    this.cookieSalesPerHr.push(cookiesPerHr);//use push method to add cookie sales per hr onto array
    this.totalCookies = this.totalCookies + cookiesPerHr;
    //I have two variables for cookies per hour to represent the totals for each row and column
    // this is the last table row
    totalCookiesPerHour[i] = totalCookiesPerHour[i] + cookiesPerHr;
    let specificHourTableData = document.createElement('td');
    specificHourTableData.textContent = cookiesPerHr;
    storeTableRow.appendChild(specificHourTableData);
  }

  let dailyLocationTotal = document.createElement('td'); // creating daily location total cell
  dailyLocationTotal.textContent = this.totalCookies;// rendering total cookies into cell
  storeTableRow.appendChild(dailyLocationTotal); // adding daily locaton numbers to cell

  // added the row to the table
  mainTable.appendChild(storeTableRow);
};

Store.prototype.getRandomNum = function(min, max) { // Took getRandomNum and turned it into a method
  min = Math.ceil(min); // The same code still works in the method
  max = Math.floor(max);// The only thing I had to change was the function to the method, and line34 to this.getRandom
  return Math.floor(Math.random() * (max - min)) + min;
};

//these functions render functions
function renderTimeDisplay() {
  let mainTable = document.getElementById('mainTable');
  let storeTableRow = document.createElement('tr');
  storeTableRow.appendChild(document.createElement('th'));
  //loop adds store hours as it iterates from index 0, adding each hr onto the page with textContent property
  for (let i = 0; i < storeHrs.length; i++) {
    let storeHrsTableCell = document.createElement('th');
    storeHrsTableCell.textContent = storeHrs[i];
    storeTableRow.appendChild(storeHrsTableCell);
  }
  let dailyLocationTotal = document.createElement('th'); 
  dailyLocationTotal.textContent = 'Daily Location Total';
  storeTableRow.appendChild(dailyLocationTotal); // adding daily location total string to cell
  mainTable.appendChild(storeTableRow);
}

function renderHourlyTotals() {
  let mainTable = document.getElementById('mainTable');
  let storeTableRow = document.createElement('tr');
  let total = document.createElement('td'); // had to create table data and store to var
  let grandTotal = 0;
  total.textContent = 'Totals';
  storeTableRow.appendChild(total);
  for (let i = 0; i < storeHrs.length; i++) {
    let totalsCell = document.createElement('td');
    totalsCell.textContent = totalCookiesPerHour[i];
    storeTableRow.appendChild(totalsCell);
    grandTotal = grandTotal + totalCookiesPerHour[i];
  }
  // adding daily location total string to cell
  let grandTotalCell = document.createElement('td');
  grandTotalCell.textContent = grandTotal;
  storeTableRow.appendChild(grandTotalCell);
  mainTable.appendChild(storeTableRow);
}

//build a renderTable function that when called will build the table from the top to bottom
function renderTable() {
  // write a for loop to loop through each of store hours
  totalCookiesPerHour = [];
  //now we have an array of zeros and each zero is at an index that cooresponds to store hour
  for (let i = 0; i < storeHrs.length; i++) {
    totalCookiesPerHour.push(0);
  }
  // we need to add cookiesPerHr that was calculated in the beginning
  // we create our table again and then set the inner HTML to an empty string. .innerHTML clears all data in table element
  let mainTable = document.getElementById('mainTable');
  mainTable.innerHTML = '';
  // grab timeDisplay function as this renders the times of the store--so this should be step #1 (delete out old timeDisplay function
  renderTimeDisplay();
  // using a for loop to cycle through each store in the allStores array and called allStores.render()
  // The loop will run through the array and render ALL STORES to the table
  for (let k = 0; k < allStores.length; k++) {
    allStores[k].render();
  }
  //rendering hourly totals inside renderTable function to display hourly totals on the table
  renderHourlyTotals();
}

//this code is what makes the table work
let storeForm = document.getElementById('addStore');
storeForm.addEventListener('submit', addStore);


// Below each instance are the render method calls/function calls for each location using listOfTimes
let seattleStore = new Store('Seattle',23,65,6.3); // new Store(arguments)
let tokyoStore = new Store('Tokyo',3,24,1.2);// new variables aren't necessary
let dubaiStore = new Store('Dubai',11,38,3.7);
let parisStore = new Store('Paris',20,38,2.3);
let limaStore = new Store('Lima',2,16,4.7);

// created an array using variables holding store names as indexes in the new array
let allStores = [seattleStore,tokyoStore,dubaiStore,parisStore,limaStore];

renderTable();