$( document ).ready(function() {
    
    $("#allCourseAlpha").on("click", displayCourseByAlpha);
    $("#allCourseLevel").on("click", displayCourseByLevel);
    $("#allCourseCateg").on("click", displayCourseByCateg);
    
    $(document).ready(displayCourseByAlpha());
});


function displayDescription(event) {
    elmt = "<h3 class='center-text' id='courseTitle'>"+event.data.title+"</h3><div class='row'><div class='col-md-3'><div class='small-overlay-img'><img class='img-equip img-rounded' src='/assets/"+event.data.title+".jpg'></div></div><div class='col-md-9' id='courseDescription'><p>"+event.data.description+"</p></div></div><a href='/courses/' class='btn btn-primary btn-room' role='button'>Back</a>";
    $("#courseList").html(elmt);
}

function displayCourseByLevel(){
    $("#courseList").html("");
    getDBTable("course", 5, function(course) {
        if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {
            var courseList="";
            $("#courseList").append("<div class='col-md-12' id='Easy'><h3 class='center-text'>Easy</h3></div>");
            $("#courseList").append("<div class='col-md-12' id='Medium'><h3 class='center-text'>Medium</h3></div>");
            $("#courseList").append("<div class='col-md-12' id='Hard'><h3 class='center-text'>Hard</h3></div>");
            for(var i=0;i<course.length;i++){
                if(course[i].level == "Easy"){
                    $("#Easy").append("<div id='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                    $("#"+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
                }
                if(course[i].level == "Medium"){
                    $("#Medium").append("<div id='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                    $("#"+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
                }
                if(course[i].level == "Hard"){
                    $("#Hard").append("<div id='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                    $("#"+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
                }
            }
        }
    });
}

function displayCourseByAlpha(){
    $("#courseList").html("");
    getDBTable("course", 2, function(course) {
        if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {
            var courseList="";
            for(var i=0;i<course.length;i++){
                $("#courseList").append("<div id='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                $("#"+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
            }
        }
    });
}

function displayCourseByCateg(){
    $("#courseList").html("");
    getDBTable("course", 5, function(course) {
        if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {
            var courseList="";
            $("#courseList").append("<div class='col-md-12' id='Dance'><h3 class='center-text'>Dance</h3></div>");
            $("#courseList").append("<div class='col-md-12' id='Combat'><h3 class='center-text'>Combat</h3></div>");
            $("#courseList").append("<div class='col-md-12' id='Bodybuilding'><h3 class='center-text'>Bodybuilding</h3></div>");
            $("#courseList").append("<div class='col-md-12' id='Cardio'><h3 class='center-text'>Cardio</h3></div>");
            for(var i=0;i<course.length;i++){
                if((course[i].category.split(' ')[0] == "Dance")||(course[i].category.split(' ')[1] == "Dance")){
                    $("#Dance").append("<div id='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                    $("#"+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
                }
                if((course[i].category.split(' ')[0] == "Combat")||(course[i].category.split(' ')[0] == "Combat")){
                    $("#Combat").append("<div id='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                    $("#"+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
                }
                if((course[i].category.split(' ')[0] == "Bodybuilding")||(course[i].category.split(' ')[0] == "Bodybuilding")){
                    $("#Bodybuilding").append("<div id='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                    $("#"+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
                }
                if((course[i].category.split(' ')[0] == "Cardio")||(course[i].category.split(' ')[0] == "Cardio")){
                    $("#Cardio").append("<div id='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                    $("#"+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
                }
            }
        }
    });
}