let navTitles = document.querySelector(".nav-links").getElementsByClassName("nav-toggle");

function toggleNavigationList(e) {
    let navList = e.target.nextElementSibling;

    if (navList.className.includes("nav-list-off")) {
        navList.classList.remove("nav-list-off");
    } else {
        navList.classList.add("nav-list-off");
    }
}

for (let i=0; i<navTitles.length; i++) {
    navTitles[i].addEventListener("click", toggleNavigationList);
}