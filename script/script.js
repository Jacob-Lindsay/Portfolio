const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

var loadSite;

function load() {
    loadSite = setTimeout(displaySite, 1100)
}

function displaySite() {
    document.getElementById("site-loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}

function openNav() {
    document.getElementById("nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0%";
}