
$( document ).ready(function() {

for (i=0; i<=100; i++) {
	var fb;
	if ((i % 3 == 0)&&(i % 5 == 0)) { fb = "fizzbuzz";
	$("#show").append(fb + "<br/>").hide().fadeIn("slow");}
	else if (i % 3 == 0) { fb = "fizz";
	$("#show").append(fb + "<br/>").hide().fadeIn("slow");}
	else if (i % 5 == 0) { fb = "buzz";
	$("#show").append(fb + "<br/>").hide().fadeIn("slow");}
	else {
	$("#show").append(i + "<br/>").hide().fadeIn("slow");
}
}


});

