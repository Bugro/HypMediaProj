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

function displayCourseByCateg(){
    $("#courseList").html("");
    
     categoryTable = [];
    
    getDBTable("category", 2, function(category) {
        if (typeof category == 'string' || category instanceof String) {
            console.log("Error while getting database data");
        } else {
            for(var i=0;i<category.length;i++){
                categoryTable[i] = category[i].title;
            }
        }
    });
    
    getDBTable("course", 5, function(course) {
        if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {
            var courseList="";
            for(var j=0;j<categoryTable.length;j++){
                $("#courseList").append("<div class='col-md-12' id='"+categoryTable[j]+"'><h3 class='center-text'>"+categoryTable[j]+"</h3></div>");
            }
            for(var i=0;i<course.length;i++){
                for(var j=0;j<categoryTable.length;j++){
                    if((course[i].category.split(' ')[0] == categoryTable[j])||(course[i].category.split(' ')[1] == categoryTable[j])){
                        $("#"+categoryTable[j]).append("<div id='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                        $("#"+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
                    }
                }
            }
        }
    });
}