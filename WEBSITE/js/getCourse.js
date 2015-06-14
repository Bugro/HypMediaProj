$( document ).ready(function() {

    $("#allCourseAlpha").on("click", displayCourseByAlpha);
    $("#allCourseLevel").on("click", displayCourseByLevel);
    $("#allCourseCateg").on("click", displayCourseByCateg);

    $(document).ready(displayCourseByAlpha());
});

function imgHtml(course) {
    var idTitle = course.title.split(' ')[0];
    var imgTitle = encodeURI(course.title);
    var title = course.title;
    return "<div id='"+idTitle+"'><div class='col-md-4'><div class='small-overlay-img'><a href='../courses/oneCourse.html?"+imgTitle+"'><img class='small-img img-rounded' src='../assets/"+title+".jpg'><p class='desc white-links'>"+title+"</p></img></a></div></div></div>";
}

function displayCourseByAlpha(){
    $("#courseList").html("");
    getDBTable("course", 2, function(course) {
        if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {
            var courseList="";
            for(var i=0;i<course.length;i++){
                $("#courseList").append(imgHtml(course[i]));
            }
        }
    });
}

function displayCourseByLevel(){
    $("#courseList").html("");
    getDBTable("course", 5, function(course) {
        if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {
            var courseList="";
            $("#courseList").append("<div class='col-xs-12' id='Easy'><h3 class='center-text'>Easy</h3></div>");
            $("#courseList").append("<div class='col-xs-12' id='Medium'><h3 class='center-text'>Medium</h3></div>");
            $("#courseList").append("<div class='col-xs-12' id='Hard'><h3 class='center-text'>Hard</h3></div>");
            for(var i=0;i<course.length;i++){
                $("#"+course[i].level).append(imgHtml(course[i]));
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
            getDBTable("course", 5, function(course) {
                if (typeof course == 'string' || course instanceof String) {
                    console.log("Error while getting database data");
                } else {
                    var courseList="";
                    for (var j=0;j<categoryTable.length;j++) {
                        $("#courseList").append("<h3 class='center-text'>"+categoryTable[j]+"</h3><div class='col-xs-12' id='"+categoryTable[j]+"'></div>");
                    }
                    for(var k=0;k < categoryTable.length; k++){
                        for (var i=0;i<course.length;i++) {
                            var idTitle = course[i].title.split(' ')[0];
                            var imgTitle = encodeURI(course[i].title);
                            var title = course[i].title;
                            var firstCategory = course[i].category.split(' ')[0];
                            var secondCategory = course[i].category.split(' ')[1];
                            if(firstCategory  === categoryTable[k] || secondCategory === categoryTable[k]) {
                                $("#"+categoryTable[k]).append("<div class='"+idTitle+"'><div class='col-md-4'><div class='small-overlay-img'><a href='../courses/oneCourse.html?"+imgTitle+"'><img class='small-img img-rounded' src='../assets/"+title+".jpg'><p class='desc white-links'>"+title+"</p></img></a></div></div></div>");
                            }
                        }
                    }
                }
            });
        }
    });
}
