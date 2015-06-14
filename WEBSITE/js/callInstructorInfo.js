$( document ).ready(function() {
    nameOfTheCurrentInstructor = "";
    nameOfTheCurrentInstructorArray = location.search.substr(1).split("%20");
    for(var i=1;i<nameOfTheCurrentInstructorArray.length;i++){
        nameOfTheCurrentInstructorArray[i] = nameOfTheCurrentInstructorArray[i-1].concat(" ", nameOfTheCurrentInstructorArray[i]);
    }
    nameOfTheCurrentInstructor = nameOfTheCurrentInstructorArray[nameOfTheCurrentInstructorArray.length-1];

    allInstru = [];
    instruList = "";
    getDBElement("instructor", nameOfTheCurrentInstructor, "name", function(instructor) {
     if (typeof instructor == 'string' || instructor instanceof String) {
            console.log("Error while getting database data");
        } else {

            $("#instructorTitle").append(instructor[0].name);
            $("#instructorImage").append("<img class='img-equip img-rounded' src='../assets/instruc-"+instructor[0].name+".jpg'>");
            $("#instructorDescription").append(instructor[0].description);
            allSpecialities = "";
            specialityList = instructor[0].speciality.split(", ");
            for(var i=0;i<specialityList.length-1;i++){
                allSpecialities += "<a href='../courses/oneCourse.html?"+specialityList[i]+"' id='"+specialityList[i].split(' ')[0]+"'>"+specialityList[i]+", "+"</a>";
            }
            allSpecialities += "<a href='../courses/oneCourse.html?"+specialityList[i]+"' id='"+specialityList[specialityList.length-1].split(' ')[0]+"'>"+specialityList[specialityList.length-1]+"</a>";
            $("#listOfCoursesForThisInstructor").append(allSpecialities);

        }
    });

});
