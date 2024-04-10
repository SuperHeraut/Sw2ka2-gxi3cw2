const NAVBAR = document.querySelector("nav");
let activePage;
let homepage;
let icon;
let mainMenu;

let menuNatFlags;
let subMenuNatFlags;
let itemNatFlags1;
let itemNatFlags1link;
let itemNatFlags2;
let itemNatFlags2link;

let menuFlagColours;
let subMenuFlagColours;
let FlagColoursRed;
let FlagColoursRedlink;
let FlagColoursOrange;
let FlagColoursOrangelink;
let FlagColoursYellow;
let FlagColoursYellowlink;
let FlagColoursGreen;
let FlagColoursGreenlink;
let FlagColoursCyan;
let FlagColoursCyanlink;
let FlagColoursBlue;
let FlagColoursBluelink;
let FlagColoursViolet;
let FlagColoursVioletlink;
let FlagColoursWhite;
let FlagColoursWhitelink;
let FlagColoursBlack;
let FlagColoursBlacklink;
let FlagColoursElse;
let FlagColoursElselink;

let searchBar;
let searchInput;
let searchSend;
let searchLabel;


// link to homepage via clickable image
homepage = document.createElement("a");
homepage.setAttribute("href", "../master/index.html");
homepage.setAttribute("id", "homepage");
NAVBAR.appendChild(homepage);
icon = document.createElement("img");
icon.setAttribute("src","../img/flags/icon.svg");
homepage.appendChild(icon);

// navbar menu

mainMenu = document.createElement("div");
NAVBAR.appendChild(mainMenu);

// submenu 1
menuNatFlags = document.createElement("div");
menuNatFlags.setAttribute("class", "submenu");
menuNatFlags.innerHTML = "ko&#285;&imacr;";
mainMenu.appendChild(menuNatFlags);

subMenuNatFlags = document.createElement("ul");
subMenuNatFlags.setAttribute("class", "blur");
menuNatFlags.appendChild(subMenuNatFlags);

	itemNatFlags1 = document.createElement("li");
	subMenuNatFlags.appendChild(itemNatFlags1);

	itemNatFlags1link = document.createElement("a");
	itemNatFlags1link.setAttribute("href", "../master/national-flags-list.html");
	itemNatFlags1link.innerHTML = "lipj&oacute;&ubreve;";
	itemNatFlags1.appendChild(itemNatFlags1link);

	itemNatFlags2 = document.createElement("li");
	subMenuNatFlags.appendChild(itemNatFlags2);

	itemNatFlags2link = document.createElement("a");
	itemNatFlags2link.setAttribute("href", "../master/index.html");
	itemNatFlags2link.innerHTML = "duc&egrave;&ubreve;";
	itemNatFlags2.appendChild(itemNatFlags2link);

// submenu 2
menuFlagColours = document.createElement("div");
menuFlagColours.setAttribute("class", "submenu");
menuFlagColours.innerHTML = "q&emacr;se";
mainMenu.appendChild(menuFlagColours);

subMenuFlagColours = document.createElement("ul");
subMenuFlagColours.setAttribute("class", "blur");
menuFlagColours.appendChild(subMenuFlagColours);

	FlagColoursRed = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursRed);

	FlagColoursRedlink = document.createElement("a");
	FlagColoursRedlink.setAttribute("href", "../colours/red.html");
	FlagColoursRedlink.innerHTML = "&hcirc;oq";
	FlagColoursRed.appendChild(FlagColoursRedlink);

	FlagColoursOrange = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursOrange);

	FlagColoursOrangelink = document.createElement("a");
	FlagColoursOrangelink.setAttribute("href", "../colours/orange.html");
	FlagColoursOrangelink.innerHTML = "&ccirc;y&ubreve;aqse";
	FlagColoursOrange.appendChild(FlagColoursOrangelink);

	FlagColoursYellow = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursYellow);

	FlagColoursYellowlink = document.createElement("a");
	FlagColoursYellowlink.setAttribute("href", "../colours/yellow.html");
	FlagColoursYellowlink.innerHTML = "&ubreve;aqse";
	FlagColoursYellow.appendChild(FlagColoursYellowlink);

	FlagColoursGreen = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursGreen);

	FlagColoursGreenlink = document.createElement("a");
	FlagColoursGreenlink.setAttribute("href", "../colours/green.html");
	FlagColoursGreenlink.innerHTML = "loq&emacr;se";
	FlagColoursGreen.appendChild(FlagColoursGreenlink);

	FlagColoursCyan = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursCyan);

	FlagColoursCyanlink = document.createElement("a");
	FlagColoursCyanlink.setAttribute("href", "../colours/cyan.html");
	FlagColoursCyanlink.innerHTML = "c&#789;&igrave;nse";
	FlagColoursCyan.appendChild(FlagColoursCyanlink);

	FlagColoursBlue = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursBlue);

	FlagColoursBluelink = document.createElement("a");
	FlagColoursBluelink.setAttribute("href", "../colours/blue.html");
	FlagColoursBluelink.innerHTML = "l&emacr;se";
	FlagColoursBlue.appendChild(FlagColoursBluelink);

	FlagColoursViolet = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursViolet);

	FlagColoursVioletlink = document.createElement("a");
	FlagColoursVioletlink.setAttribute("href", "../colours/violet.html");
	FlagColoursVioletlink.innerHTML = "c&#7811;q&emacr;se";
	FlagColoursViolet.appendChild(FlagColoursVioletlink);

	FlagColoursWhite = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursWhite);

	FlagColoursWhitelink = document.createElement("a");
	FlagColoursWhitelink.setAttribute("href", "../colours/white.html");
	FlagColoursWhitelink.innerHTML = "base";
	FlagColoursWhite.appendChild(FlagColoursWhitelink);

	FlagColoursBlack = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursBlack);

	FlagColoursBlacklink = document.createElement("a");
	FlagColoursBlacklink.setAttribute("href", "../colours/black.html");
	FlagColoursBlacklink.innerHTML = "hese";
	FlagColoursBlack.appendChild(FlagColoursBlacklink);

	FlagColoursElse = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursElse);

	FlagColoursElselink = document.createElement("a");
	FlagColoursElselink.setAttribute("href", "../colours/else-colour.html");
	FlagColoursElselink.innerHTML = "&gcirc;&imacr;t&#789;&agrave;";
	FlagColoursElse.appendChild(FlagColoursElselink);

searchBar = document.createElement("form");
searchBar.setAttribute("class", "blur");
mainMenu.appendChild(searchBar);

	searchInput = document.createElement("input");
	searchInput.setAttribute("type", "search");
	searchInput.setAttribute("name", "q");
	searchInput.setAttribute("placeholder", "sèŭsolē...");
	searchBar.appendChild(searchInput);

	searchSend = document.createElement("input");
	searchSend.setAttribute("type", "sumbit");
	searchSend.setAttribute("id", "send");
	searchSend.setAttribute("name", "send");
	searchInput.setAttribute("method", "get");
	searchBar.appendChild(searchSend);

	searchLabel = document.createElement("label");
	searchLabel.innerHTML = "s&egrave;&ubreve;so";
	searchLabel.setAttribute("for", "send");
	searchBar.appendChild(searchLabel);