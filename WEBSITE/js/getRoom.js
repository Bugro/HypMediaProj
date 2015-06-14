$( document ).ready(function() {

    getDBTable("room", 2, function(room) {
        if (typeof room == 'string' || room instanceof String) {
            console.log("Error while getting database data");
        } else {
            var roomList="";
            for(var i=0;i<room.length;i++){
                $("#roomList").append("<div id='"+room[i].title.split(' ')[0]+"'><div class='btn btn-primary btn-room' role='button'>"+room[i].title+"</div><div class='roomDisplayDesc'></div></div>");
                $("#"+room[i].title.split(' ')[0]+"").on("click", {title: room[i].title, description: room[i].description}, displayDescription);
            }
        }
    });
});


function displayDescription(event) {
    $(".contentDisplayed").html("");
    elmt = "<div class='contentDisplayed'><h3 class='center-text' id='roomTitle'>"+event.data.title+"</h3><div class='row'><div class='small-overlay-img img-rounded' style='width: 100%; height: 200px'><img class='img-rounded img-responsive' src='../assets/"+event.data.title+".jpg'></div><div class='col-md-12' id='roomDescription'><p class='center-text'>"+event.data.description+"</p></div></div></div>";
    $(this).find(".roomDisplayDesc").append(elmt);
    $("#mapOfTheGym").html("<img id='imgmap' class='img-rounded img-responsive' src='../assets/gymplan/gymplan"+event.data.title.split(' ')[0]+".jpg'>");
}
