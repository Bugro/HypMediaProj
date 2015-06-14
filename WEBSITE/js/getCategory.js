$( document ).ready(function() {
    displayCourseByCateg();
});

function displayCategory(event) {
    $("#categoryList").html("");
    currentCategory = event.data.title;
    $("#titleOfThePage").html(currentCategory);
    getDBTable("course", 2, function(course) {
        if (typeof course == 'string' || course instanceof String) {
            console.log("Error while getting database data");
        } else {
            for (var i=0;i<course.length;i++) {
                var category1 = course[i].category.split(' ')[0];
                var category2 = course[i].category.split(' ')[1];
                if(category1 === currentCategory || category2 === currentCategory) {
                    $("#categoryList").append("<div class='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><a href='../courses/oneCourse.html?"+course[i].title+"'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></img></a></div></div></div>");
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
