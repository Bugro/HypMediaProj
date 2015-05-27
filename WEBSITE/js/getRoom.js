$( document ).ready(function() {

    getDBTable("room", function(room) {
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
    elmt = "<h3 class='center-text' id='roomTitle'>"+event.data.title+"</h3><div class='row'><div class='small-overlay-img'><img class='col-md-12 img-rounded' src='/assets/"+event.data.title+".jpg'></div><div class='col-md-12' id='roomDescription'><p class='center-text'>"+event.data.description+"</p></div></div>";
    $(this).find(".roomDisplayDesc").html(elmt);
    $(this).on("click", {title: event.data.title, description: event.data.description}, closeDescription);
    $("#mapOfTheGym").html("<img id='imgmap' class='img-rounded' src='/assets/gymplan/gymplan"+event.data.title.split(' ')[0]+".jpg'>");
}

function closeDescription(event) {
    elmt = "<div id='"+event.data.title+"'><div class='btn btn-primary btn-room' role='button'>"+event.data.title+"</div><div class='roomDisplayDesc'></div></div>";
    $(this).html(elmt);
    $(this).on("click", {title: event.data.title, description: event.data.description}, displayDescription);
    $("#mapOfTheGym").html("<img id='imgmap' class='img-rounded' src='/assets/gymplan/gymplan.jpg'>");
}
