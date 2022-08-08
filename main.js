var dollars = 0;
var maxDollars = 1;

var printers = 0;
var trees = 0;

var wallets = 0;

function getDollars(number){
  if (dollars > maxDollars){
    return;
  }
  
  if (dollars + number > maxDollars) {
    dollars = maxDollars;
  } else {
    dollars = dollars + number;
  }
  
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

function buyWallet(){
    var walletCost = Math.floor(1 * Math.pow(3, wallets));
    if(dollars >= walletCost){
      wallets = wallets + 1;
    	dollars = dollars - walletCost;
      document.getElementById('dollars').innerHTML = dollars;
      document.getElementById('wallets').innerHTML = wallets;
    };
    var nextCost = Math.floor(1 * Math.pow(3,wallets));
    document.getElementById('walletCost').innerHTML = nextCost;
    maxDollars = 1 + wallets * 100;
    document.getElementById('maxDollars').innerHTML = maxDollars;
};

function mainLoop(){
  var oldDollars = dollars;
  getDollars(printers);
  getDollars(trees * 10);
  var deltaDollars = dollars - oldDollars;
  document.getElementById('dollarsPerTick').innerHTML = deltaDollars;
};

window.setInterval(mainLoop, 1000);
