x = 457;
y = "457";
x.length;
y.length;
x + parseInt(y);
parseInt("45j");
j= "(l)457(k)";
var t= j.substring(3,6);//to get a particular value, in this case 457
var numberplate =parseInt(t);//to convert string to number
typeof(numberplate)


function parsePlate(plateStr){
    return plateStr.substring(1,4);
}

parsePlate("L457K");
parsePlate("T432T");

//Wrt a function that will execute the parse plate function and tells you the //type
x = parsePlate("K432O");
if ( x ==="" ){
    console.log("The result is not shown!");
}
else if (x !== 432){
    console.log("The result is not identical");
}
else if (typeof(x)!== number){
    console.log("The result is not a number");
}


