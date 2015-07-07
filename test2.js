function arithGeo (arr){

	var diff = arr[1] - arr[0];
	var ratio = arr[1] / arr[0];

	var arith = true;
	var geo = true;
	//var arrNull = true;
	
	
if(arr.length > 2){
	for (var i = 0; i < arr.length - 1; i++){
		if (arr[i + 1] - arr[i] !== diff)
			arith = false;
		if (arr[i + 1] / arr[i] !== ratio)
			geo = false;
	}
	if (arith === true)
		console.log("Arithmetic");
	else if (geo === true)
		console.log("Geometric");
	else
		return -1;
    }
else if (arr.length < 3) {
    console.log("You need at least three numbers to run this program!");
    }
else if (arr.length = null ){
    console.log("This is an empty array!");
    }
}


arithGeo([2, 4, 6, 8, 10]);
arithGeo([-128, 64, -32, 16, -8]);
arithGeo([2,3]);
arithGeo([0]);