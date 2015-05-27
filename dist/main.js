$(document).on('ready', start);

function start(eventObj) {

var $form = $("#form");
var $btn = $("#btn");
var $txtArea = $("#text-area");
var $error = $(".hidden");
var $name = $("#name");
var $email = $("#email");
var $website = $("#website");
var $hiddenDiv = $("#submit-div");

$hiddenDiv.hide();

$btn.on("click", submitClicked);

function submitClicked(e) {

	console.log("submitClicked");

	joinedName = ($name.val().replace(/\s+/g, ''));
	var names = validator.isAlpha(joinedName);
	var emails = validator.isEmail($email.val());
	var web = validator.isURL($website.val());
	var txt = validator.isNull($txtArea.val());

	console.log(names);
	console.log(emails);
	console.log(web);
	console.log(txt);


	if (names && emails && web && !txt) {
		$form.hide();
		$hiddenDiv.show();
		$hiddenDiv.html("Thanks for contacting us "+ $name.val()+ ".  We have received your message and will be in touch with you shortly.");
	}
	if (!names) {
		$("div").children().eq(2).html("Invalid Input");
	}	
	else {
		$("div").children().eq(2).html("");
	}
	if (!emails) {
		$("div").children().eq(4).html("Invalid Input");
	}
	else {
		$("div").children().eq(4).html("");
	}
	if (!web) {
		$("div").children().eq(6).html("Invalid Input");	
	}
	else {
		$("div").children().eq(6).html("");
	}
	if (txt) {
		$("div").children().eq(8).html("Invalid Input");
	}
	else {
		$("div").children().eq(8).html("");
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

$name.css("display", "block");
$name.css("width", "90%");
$name.css("marginLeft", "auto");
$name.css("marginRight", "auto");
$name.css("marginBottom", "-5px");
$name.css("height", "5%");
$name.css("color", "black");

$email.css("display", "block");
$email.css("width", "90%");
$email.css("marginLeft", "auto");
$email.css("marginRight", "auto");
$email.css("marginBottom", "-5px");
$email.css("height", "5%");
$email.css("color", "black");

$website.css("display", "block");
$website.css("width", "90%");
$website.css("marginLeft", "auto");
$website.css("marginRight", "auto");
$website.css("marginBottom", "-5px");
$website.css("height", "5%");
$website.css("color", "black");

$txtArea.css("display", "block");
$txtArea.css("width", "90%");
$txtArea.css("marginLeft", "auto");
$txtArea.css("marginRight", "auto");
$txtArea.css("height", "10%");
$txtArea.css("marginBottom", "-5px");
$txtArea.css("color", "black");

$btn.css("backgroundColor", "#1c1e2d");
$btn.css("color", "white");
$btn.css("width", "40%");
$btn.css("height", "60px");
$btn.css("marginLeft", "5%");

$error.css("marginLeft", "5%");
$error.css("marginTop", "0px");
$error.css("marginBottom", "0px");
$error.css("color", "red");

$hiddenDiv.css("width", "80%");
$hiddenDiv.css("marginLeft", "auto");
$hiddenDiv.css("marginRight", "auto");
$hiddenDiv.css("backgroundColor", "white");
$hiddenDiv.css("textAlign", "center");
$hiddenDiv.css("height", "150px");
$hiddenDiv.css("marginTop", "50px");
$hiddenDiv.css("fontSize", "20px");
$hiddenDiv.css("paddingTop", "50px");

$("#form label").css("marginLeft", "5%");
$("#form label").css("color", "#1c1e2d");

$("#form h1").css("marginLeft", "5%");
// $("#form label").css("marginBottom", "100px");




}