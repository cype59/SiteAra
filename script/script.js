/* SCROLL */

$(document).ready(function() {
    jQuery(function() {
        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('#scrollUp').css('right', '10px');
                } else {
                    $('#scrollUp').removeAttr('style');
                }

            });
        });
    });
});



/* OUVRIR MENU MOBILE */

function openMenu(x) {
    var monMenu = document.querySelector(".container-menu");
    x.classList.toggle("change");

    if (monMenu.classList.contains('open')) {
        monMenu.classList.remove("open");
    } else {
        monMenu.classList.add("open");
    }
};


/* AFFICHER PANNEAU ATTENTION ET RELEASE OU PAS (PAGE VERSION)*/

function afficher(sel) {
    var opt = sel.getElementsByTagName("option");
    for (var i = 0; i < opt.length; i++) {
        var x = document.getElementById(opt[i].value);
        if (x) x.style.display = "none";
    }
    var cat = document.getElementById(sel.value);
    if (cat) cat.style.display = "block";
}