$( document ).ready(function() {

    getDBTable("instructor", 2, function(instructor) {
        if (typeof instructor == 'string' || instructor instanceof String) {
            console.log("Error while getting database data");
        } else {
            var instructorList="";
            for(var i=0;i<instructor.length;i++){
                $("#instructorList").append("<div id='"+instructor[i].name.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/instruc-"+instructor[i].name+".jpg'><p class='desc white-links'>"+instructor[i].name+"</p></div></div></div>");
               $("#"+instructor[i].name.split(' ')[0]+"").on("click", {title: instructor[i].name, description: instructor[i].description, speciality: instructor[i].speciality}, displayDescription);
            }
        }
    });
});


function displayDescription(event) {
    elmt = "<h3 class='center-text well black-links' id='instructorTitle'>"+event.data.title+"</h3><div class='row'><div class='col-md-3'><div class='small-overlay-img'><img class='img-equip img-rounded' src='/assets/instruc-"+event.data.title+".jpg'></div></div><div class='col-md-9' id='instructorDescription'><p>"+event.data.description+"</p><p><h2 class='well black-links'>Speciality: "+event.data.speciality+"</h2></p></div></div><a href='/instructors/' class='btn btn-primary btn-room' role='button'>Back</a>";
    $("#instructorList").html(elmt);
}