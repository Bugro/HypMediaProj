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
    $("#instructorList").html("");
    allSpecialities = "";
    specialityList = event.data.speciality.split(", ");
    console.log(specialityList);
    for(var i=0;i<specialityList.length-1;i++){
        allSpecialities += "<span id='"+specialityList[i].split(' ')[0]+"'>"+specialityList[i]+", "+"</span>";
    }
    allSpecialities += "<span id='"+specialityList[specialityList.length-1].split(' ')[0]+"'>"+specialityList[specialityList.length-1]+"</span>";
    elmt = "<h3 class='center-text well black-links' id='instructorTitle'>"+event.data.title+"</h3><div class='row'><div class='col-md-3'><div class='small-overlay-img'><img class='img-equip img-rounded' src='/assets/instruc-"+event.data.title+".jpg'></div></div><div class='col-md-9' id='instructorDescription'><p>"+event.data.description+"</p><p class='well black-links'>Speciality: "+allSpecialities+"</p></div></div><a href='/instructors/' class='btn btn-primary btn-room' role='button'>Back</a>";
    $("#instructorList").append(elmt);
    for(var i=0;i<specialityList.length;i++){
        $("#"+specialityList[i].split(' ')[0]+"").on("click", {title: specialityList[i]}, displayCourse);
    }
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