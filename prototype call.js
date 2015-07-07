var students = ["Lovelyn", "Ibrahim", "Andrew"];
Array.prototype.bootcamp = function (){
for (i = 0; i < this.length; i++){
	document.write(this[i] + " is in bootcamp." + "<br>");
	}
}
students.bootcamp();

