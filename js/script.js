// WEB303 Assignment 2
// Amandeep Kaur (0772966)

$(document).ready(function() {
    $("#vprospect").click(function(event) {
        $("#solution").hide().load("../prospect.html").fadeIn(600);
    })

    $("#vconvert").click(function(event) {
        $("#solution").hide().load("../convert.html").fadeIn(600);
    })

    $("#vretain").click(function(event) {
        $("#solution").hide().load("../retain.html").fadeIn(600);
    })
})