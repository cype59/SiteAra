/*AFFICHER OU NON ITEM DANS NAVBAR */

$(document).ready(function() {


    /* cacher('documentation'); */
    /* cacher('version'); */
    /* cacher('download'); */
    cacher('demo');


    function cacher(id) {
        document.getElementById(id).innerHTML = "";
    }
});