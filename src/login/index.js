import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
console.log("Login");

//Ajax call

$("#authentification").submit(()=>{
	const login = $("#nom").val();
	const password = $("#mdp").val();
	return false;
});

function log(login,password){
	$.ajax({
		"async":true,
		"crossDomain":true,
		"url":"http://localhost:3131/login",
		"data":{
			"login":login,
			"password":password,
		},
		"method": "GET",
		"dataType":"json",
		"headers":{
			"accept":"application/json"
		}
	}).done(function(response){
		console.log(response);
	});
};
$('#send').click(function(){
	$.ajax({
		"async":true,
		"crossDomain":true,
		"url":"http://localhost:3131/login",
		"data":{
			"login":$("#nom").val(),
			"password":$("#mdp").val()
		},
		"method": "GET",
		"dataType":"json",
		"headers":{
			"accept":"application/json"
		}
	}).done(function(response){
		console.log(response);
	});


});

