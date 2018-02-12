var loginButton = document.getElementById("login");
var signupButton = document.getElementById("signup");
var ccButton = document.getElementById("codingclasses");
var caoButton = document.getElementById("corpandorg");
var eButton = document.getElementById("events");
var iButton = document.getElementById("internships");
var mavButton = document.getElementById("mentandvol");
var tacButton = document.getElementById("teamsandclubs");

function login() {
    window.location.href= "Login.html";
}

function signup() {
    window.location.href = "CreateProfile.html";
}
function codingclick() {
    window.location.href = "CodingClasses.html";
}
function caoclick() {
    window.location.href = "CorporationsandOrganizations.html";
}
function eventsclick() {
    window.location.href = "Events.html";
}
function internshipclick() {
    window.location.href = "Internships.html";
}
function mavclick() {
    window.location.href = "MentorsandVolunteers.html"
}
function tacclick() {
    window.location.hre f= "TeamsandClubs.html";
}
loginButton.addEventListener("click", login);
signupButton.addEventListener("click", signup);
ccButton.addEventListener("click", codingclick);
caoButton.addEventListener("click", caoclick);
eButton.addEventListener("click", eventsclick);
iButton.addEventListener("click", internshipclick);
mavButton.addEventListener("click", mavclick);
tacButton.addEventListener("click", tacclick);
