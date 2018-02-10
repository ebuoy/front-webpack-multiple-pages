import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

console.log("Bottles");

$.ajax({
		"async":true,
		"crossDomain":true,
		"url":"http://localhost:3131/bottles",
		"method": "GET",
		"dataType":"json",
		"headers":{
			"accept":"application/json"
		}

	}).done(function(response){
		console.log(response);
});

