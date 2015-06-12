$( document ).ready(function() {
    nameOfTheCurrentCourse = "";
    nameOfTheCurrentCourseArray = location.search.substr(1).split("%20");
    for(var i=1;i<nameOfTheCurrentCourseArray.length;i++){
        nameOfTheCurrentCourseArray[i] = nameOfTheCurrentCourseArray[i-1].concat(" ", nameOfTheCurrentCourseArray[i]);
    }
    nameOfTheCurrentCourse = nameOfTheCurrentCourseArray[nameOfTheCurrentCourseArray.length-1];
    console.log(nameOfTheCurrentCourse);

    allInstru = [];
    instruList = "";
    getDBElement("course", nameOfTheCurrentCourse, function(course) {
     if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {
            
            $("#courseTitle").append(course[0].title);
            $("#courseImage").append("<img class='img-equip img-rounded' src='/assets/"+course[0].title+".jpg'>");
            $("#courseDescription").append(course[0].description);
            
            
            getDBTable("instructor", 2, function(instructor) {
             if (typeof instructor == 'string' || instructor instanceof String) {
                    console.log("Error while getting database data");
                } else {
                    var instructorList="";
                    for(var i=0;i<instructor.length;i++){
                        for(var k=0;k<instructor[i].speciality.length;k++){
                            if(instructor[i].speciality.split(', ')[k] == course[0].title){
                                console.log(instructor[i].name);
                                allInstru[i] = instructor[i].name;
                                instruList += "<div class='col-sm-4'><img class='small-img img-rounded' src='/assets/instruc-"+instructor[i].name+".jpg'></div>";
                            }
                        }
                    }
                }
                $("#listOfInstructorsForThisCourse").append(instruList);
            });
            
                    
        }
    });

});









/*
allInstru = [];
    instruList = "";
    getDBTable("instructor", 2, function(instructor) {
     if (typeof instructor == 'string' || instructor instanceof String) {
            console.log("Error while getting database data");
        } else {
            var instructorList="";
            for(var i=0;i<instructor.length;i++){
                for(var k=0;k<instructor[i].speciality.length;k++){
                    if(instructor[i].speciality.split(', ')[k] == event.data.title){

                        allInstru[i] = instructor[i].name;
                        instruList += "<div class='col-sm-4'><img class='small-img img-rounded' src='/assets/instruc-"+instructor[i].name+".jpg'></div>";
                    }
                }
            }
            $("#courseDescription").html("");
    
    elmt = "<h3 class='center-text' id='courseTitle'>"+event.data.title+"</h3><div class='row'><div class='col-md-3'><div class='small-overlay-img'><img class='img-equip img-rounded' src='/assets/"+event.data.title+".jpg'></div></div><div class='col-md-9' id='courseDescription'><p>"+event.data.description+"</p></div></div><div id='instructorsForThisCourse'><div class='well black-links'><div class='center-text'>Instructors for this course</div></div>"+instruList+"</div><a href='/courses/' class='btn btn-primary btn-room col-xs-12' role='button'>Back</a>";
    $("#courseDescription").append(elmt);
        }
    });*/