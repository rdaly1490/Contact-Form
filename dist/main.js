$(document).on('ready', start);

function start(eventObj) {

var $form = $("#form");
var $btn = $("#btn");
var $txtArea = $("#text-area");
var $error = $(".hidden");
var $inputs = $(".text");


$btn.on("click", submitClicked);

function submitClicked(e) {

	console.log("submitClicked");
	var numbers = /[0-9]/;
	if ($inputs.val().match(numbers) || $inputs.val() === "") {
		console.log("noooooo");
		var exception = $inputs.val().match(numbers);
console.log(exception[0]);
		$("div").children().eq(2).css("color", "red");
		// $error.css("color", "red");
	}

}





$("body").css("backgroundColor", "#1c1e2d");
$form.css("backgroundColor", "white");
$form.css("width", "80%");
$form.css("marginLeft", "auto");
$form.css("marginRight", "auto");
$form.css("marginTop", "50px");
$form.css("height", "500px");
$form.css("paddingTop", "10px");
$form.css("boxSizing", "border-box")

$inputs.css("display", "block");
$inputs.css("width", "90%");
$inputs.css("marginLeft", "auto");
$inputs.css("marginRight", "auto");
$inputs.css("marginBottom", "-10px");
$inputs.css("height", "5%");
$inputs.css("color", "#a3a2a7");

$txtArea.css("display", "block");
$txtArea.css("width", "90%");
$txtArea.css("marginLeft", "auto");
$txtArea.css("marginRight", "auto");
$txtArea.css("height", "10%");
$txtArea.css("marginBottom", "-10px");
$txtArea.css("color", "#a3a2a7");

$btn.css("backgroundColor", "#1c1e2d");
$btn.css("color", "white");
$btn.css("width", "40%");
$btn.css("height", "60px");
$btn.css("marginLeft", "5%");

$error.css("marginLeft", "5%");
$error.css("marginTop", "0px");
$error.css("marginBottom", "0px");
$error.css("color", "white");

$("#form label").css("marginLeft", "5%");
$("#form label").css("color", "#1c1e2d");

$("#form h1").css("marginLeft", "5%");
// $("#form label").css("marginBottom", "100px");




}