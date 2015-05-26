$(document).on('ready', start);

function start(eventObj) {

var $form = $("#form");
var $btn = $("#btn");
// var $txtArea = $("#txt-area")
$inputs = $(".text");

$("body").css("backgroundColor", "#1c1e2d");
$form.css("backgroundColor", "white");
$form.css("width", "80%");
$form.css("marginLeft", "auto");
$form.css("marginRight", "auto");
$form.css("marginTop", "50px");
$form.css("height", "450px");
$form.css("paddingTop", "50px");
$form.css("boxSizing", "border-box")

$inputs.css("display", "block");
$inputs.css("width", "90%");
$inputs.css("marginLeft", "auto");
$inputs.css("marginRight", "auto");
$inputs.css("marginBottom", "10px");
$inputs.css("height", "5%");

$("#text-area").css("display", "block");
$("#text-area").css("width", "90%");
$("#text-area").css("marginLeft", "auto");
$("#text-area").css("marginRight", "auto");
$("#text-area").css("height", "10%");
$("#text-area").css("marginBottom", "10px");

$btn.css("backgroundColor", "#1c1e2d");
$btn.css("color", "white");
$btn.css("width", "40%");
$btn.css("height", "60px");
$btn.css("marginLeft", "5%");

$("#form label").css("marginLeft", "5%");
$("#form h1").css("marginLeft", "5%");
// $("#form label").css("marginBottom", "100px");




}