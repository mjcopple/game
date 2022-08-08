var dollars = 0;
var printers = 0;

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

function getDollars(){
  cookieClick(printers);
};

window.setInterval(mainLoop, 1000);
