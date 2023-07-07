window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var openNav = document.getElementById("openNav");
var logoimg = document.getElementById("logoimg");
var navBeforee= document.getElementById("nav-beforee");
var navLink1= document.getElementById("nav-link1");
var navLink2= document.getElementById("nav-link2");
var navLink3= document.getElementById("nav-link3");
var navLink4= document.getElementById("nav-link4");
var navLink5= document.getElementById("nav-link5");
var navLink6= document.getElementById("nav-link6");
var navLink7= document.getElementById("nav-link7");

function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.style.background="white";
    navbar.style.boxShadow="1px 1px 5px grey";
    logoimg.src= ("assets/images/BASYS-Logo_Color-RGB_W2Registered_Mark.png");
    navBeforee.style.display="none";
    openNav.style.color="navy";
    navLink1.style.color="navy";
    navLink2.style.color="navy";
    navLink3.style.color="navy";
    navLink4.style.color="navy";
    navLink5.style.color="navy";
    navLink6.style.color="navy";
    navLink7.style.color="navy";
  } else {
    navbar.style.background="none";
    logoimg.src= ("assets/images/BASYS-Logo-Color_Web-W.png");
    navbar.style.boxShadow="none";
    navBeforee.style.display="block";
    openNav.style.color="white";
    navLink1.style.color="white";
    navLink2.style.color="white";
    navLink3.style.color="white";
    navLink4.style.color="white";
    navLink5.style.color="white";
    navLink6.style.color="white";
    navLink7.style.color="white";
  }
}
