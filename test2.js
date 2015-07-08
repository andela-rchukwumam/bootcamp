function aritGeo (arr){

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

aritGeo([2, 4, 6, 8, 10]);
aritGeo([5, 11, 17, 23, 29, 35, 41]);
aritGeo([15, 10, 5, 0, -5, -10]);
aritGeo([2, 6, 18, 54, 162]);
aritGeo([0.5, 3.5, 24.5, 171.5]);
aritGeo([-128, 64, -32, 16, -8]);
aritGeo([1, 2, 3, 5, 8]);
aritGeo([1, 3, 6, 10, 15]);
aritGeo([1, 8, 27, 64, 125]);
aritGeo([2, 4, 6, 8, 10]);
aritGeo([-128, 64, -32, 16, -8]);
aritGeo([2,3]);
aritGeo([0]);