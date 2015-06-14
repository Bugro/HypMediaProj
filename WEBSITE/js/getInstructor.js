$( document ).ready(function() {

    getDBTable("instructor", 2, function(instructor) {
        if (typeof instructor == 'string' || instructor instanceof String) {
            console.log("Error while getting database data");
        } else {
            var instructorList="";
            for(var i=0;i<instructor.length;i++){
                $("#instructorList").append("<div id='"+instructor[i].name.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/instruc-"+instructor[i].name+".jpg'><p class='desc white-links'>"+instructor[i].name+"</p></div></div></div>");
               $("#"+instructor[i].name.split(' ')[0]+"").on("click", {title: instructor[i].name, description: instructor[i].description, speciality: instructor[i].speciality}, displayDescription);
                console.log(instructor[i].speciality);
            }
        }
    });
});


function displayDescription(event) {
    instructorClicked = event.data.title;
    window.location.href = "../instructors/oneInstructor.html?"+instructorClicked;
}

function displayCourse(event) {
    $("#instructorList").html("");
    getDBTable("course", 2, function(course) {
        if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {
            var courseList="";
            for(var i=0;i<course.length;i++){
                if(course[i].title == event.data.title){
                    elmt = "<h3 class='center-text' id='courseTitle'>"+course[i].title+"</h3><div class='row'><div class='col-md-3'><div class='small-overlay-img'><img class='img-equip img-rounded' src='/assets/"+course[i].title+".jpg'></div></div><div class='col-md-9' id='courseDescription'><p>"+course[i].description+"</p></div></div><a href='/instructors/' class='btn btn-primary btn-room' role='button'>Back</a>";
        $("#instructorList").append(elmt);
                }
            }
        }
    });
}