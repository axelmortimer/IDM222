$(document).ready(function() {
    $("#hamburger").click(function() {
        $("nav ul").toggleClass("display");
        if ($("#menu-icon").attr("src") === "../menu.svg") {
            $("#menu-icon").attr("src", "../exit.png");
        }
        else {
            $("#menu-icon").attr("src", "../menu.svg");
        }
    })
})