const HTML = document.querySelector("html");
const BODY = document.querySelector("body");
const VARS = document.createElement("script");
const HDS = document.createElement("script");
const NAV = document.createElement("script");
const FTR = document.createElement("script");

HTML.setAttribute("lang", "wuu");
VARS.setAttribute("src", "../js/variables.js");
HDS.setAttribute("src", "../js/head.js");
NAV.setAttribute("src", "../js/navbar.js");
FTR.setAttribute("src", "../js/footer.js");

BODY.appendChild(VARS);
BODY.appendChild(HDS);
BODY.appendChild(NAV);
BODY.appendChild(FTR);