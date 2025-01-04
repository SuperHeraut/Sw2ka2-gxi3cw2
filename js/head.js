CHARSET.setAttribute("charset", "UTF-8");
VP.setAttribute("name", "viewport");
VP.setAttribute("content", "width=device-width, initial-scale=1.0");
RESET.setAttribute("rel", "stylesheet");
RESET.setAttribute("href", "../css/reset.css");
STYLE.setAttribute("rel", "stylesheet");
STYLE.setAttribute("href", "../css/style.css");
FAVICON.setAttribute("rel", "icon");
FAVICON.setAttribute("type","image/x-icon");
FAVICON.setAttribute("href","../img/technical/favicon.svg");

HEAD.appendChild(CHARSET);
HEAD.appendChild(VP);
HEAD.appendChild(RESET);
HEAD.appendChild(STYLE);
HEAD.appendChild(FAVICON);