var dollars = 0;
var printers = 0;
var trees = 0;

function getDollars(number){
  dollars = dollars + number;
  document.getElementById("dollars").innerHTML = dollars;
};

function buyPrinter(){
    var printerCost = Math.floor(10 * Math.pow(1.1,printers));     // works out the cost of this printers
    if(dollars >= printerCost){                                   // checks that the player can afford the printer
      printers = printers + 1;                                   // increases number of printers
    	dollars = dollars - printerCost;                          // removes the dollars spent
      document.getElementById('dollars').innerHTML = dollars;  // updates the number of dollars for the user
      document.getElementById('printers').innerHTML = printers;  // updates the number of printers for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,printers));       // works out the cost of the next printer
    document.getElementById('printerCost').innerHTML = nextCost;  // updates the printer cost for the user
};

function buyTree(){
    var treeCost = Math.floor(100 * Math.pow(1.2,trees));
    if(dollars >= treeCost){
      trees = trees + 1;
    	dollars = dollars - treeCost;
      document.getElementById('dollars').innerHTML = dollars;
      document.getElementById('trees').innerHTML = trees;
    };
    var nextCost = Math.floor(100 * Math.pow(1.2,trees));
    document.getElementById('treeCost').innerHTML = nextCost;
};

function mainLoop(){
  var oldDollars = dollars;
  getDollars(printers);
  getDollars(trees * 10);
  var deltaDollars = dollars - oldDollars;
  document.getElementById('dollarsPerTick').innerHTML = deltaDollars;
};

window.setInterval(mainLoop, 1000);
