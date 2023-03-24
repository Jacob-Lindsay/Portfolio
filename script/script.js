const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

var loadSite;

function load() {
    loadSite = setTimeout(displaySite, 1100)
}

function displaySite() {
    document.getElementById("site-loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}