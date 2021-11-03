'use strict';

let horizontalUnderline = document.getElementById("horizontal_underline");
console.log(horizontalUnderline);

let horizontalMenus = document.querySelectorAll("nav:first-child a");
console.log(horizontalMenus);

horizontalMenus.forEach((menu) =>
    menu.addEventListener("click", (event) => horizontalIndicator(event))
);
function horizontalIndicator(event) {
    horizontalUnderline.style.left = event.currentTarget.offsetLeft + "px";
    horizontalUnderline.style.width = event.currentTarget.offsetWidth + "px";
    horizontalUnderline.style.top = event.currentTarget.offsetTop + event.currentTarget.offsetHeight + "px";
}


// vertical

let verticalUnderline = document.getElementById("vertical_underline");
console.log(verticalUnderline);

let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");
console.log(verticalMenus);

verticalMenus.forEach((menu) =>
    menu.addEventListener("click", (e) => verticalIndicator(e))
);
function verticalIndicator(e) {
    verticalUnderline.style.left = e.currentTarget.offsetLeft + "px";
    verticalUnderline.style.width = e.currentTarget.offsetWidth + "px";
    verticalUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}