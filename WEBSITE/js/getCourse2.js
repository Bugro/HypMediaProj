$( document ).ready(function() {
    $( ".beep" ).append( "<p id='bite'>Test</p>" )
    $("#bite").on("click", displayDescription);
});

function displayDescription(){
    $(this).html("");
}
