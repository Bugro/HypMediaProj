$( document ).ready(function() {

    $(document).ready(displayCourseByCateg());
});


function displayDescription(event) {
    courseClicked = event.data.title;
    window.location.href = "../courses/oneCourse.php?"+courseClicked;
}

function displayCategory(event) {
    $("#categoryList").html("");
    currentCategory = event.data.title;
    $("#titleOfThePage").html(currentCategory);
    getDBTable("course", 2, function(course) {
        if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {
                    for (var i=0;i<course.length;i++) {
                            if(course[i].category.split(' ')[0] == event.data.title){
                                $("#categoryList").append("<div class='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                                $("."+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
                            }
                            if(course[i].category.split(' ')[1] == event.data.title){
                                $("#categoryList").append("<div class='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                                $("."+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
                            }
                        }
        }
    });
                    
}

function displayCourseByCateg(){

    categoryTable = [];

    getDBTable("category", 2, function(category) {
        if (typeof category == 'string' || category instanceof String) {
            console.log("Error while getting database data");
        } else {
            for(var i=0;i<category.length;i++){
                categoryTable[i] = category[i].title;
            }
            
                    for (var j=0;j<categoryTable.length;j++) {
                        $("#categoryListButton").append("<button class='btn btn-primary btn-room col-md-12' style='width: 100%' role='button' id='"+categoryTable[j]+"'>"+categoryTable[j]+"</button>");
                        $("#"+categoryTable[j]+"").on("click", {title: categoryTable[j]}, displayCategory);
                    }
                    
                }
            
        
    });
}
