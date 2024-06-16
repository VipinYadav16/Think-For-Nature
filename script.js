document.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector(".btn");
    var btna = document.querySelector(".btna");
    var btnb = document.querySelector(".btnb");

    if (btn) {
        btn.addEventListener("click", function() {
            window.location.href = "climatechange.html";
        });
    }

    if (btna) {
        btna.addEventListener("click", function() {
            window.location.href = "takeaction.html";
        });
    }

    if (btnb) {
        btnb.addEventListener("click", function() {
            window.location.href = "resources.html";
        });
    }
});
