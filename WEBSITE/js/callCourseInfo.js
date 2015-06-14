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
    getDBElement("course", nameOfTheCurrentCourse, "title", function(course) {
     if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {

            $("#courseTitle").append(course[0].title);
            $("#courseImage").append("<img class='img-equip img-rounded' src='../assets/"+course[0].title+".jpg'>");
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
                                instruList += "<div class='col-sm-4'><a href='../instructors/oneInstructor.html?"+instructor[i].name+"'><img class='small-img img-rounded' src='/assets/instruc-"+instructor[i].name+".jpg'></a></div>";
                            }
                        }
                    }
                }
                $("#listOfInstructorsForThisCourse").append(instruList);
            });


        }
    });

});
