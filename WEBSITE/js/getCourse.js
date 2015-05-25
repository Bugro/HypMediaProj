$( document ).ready(function() {

    var course = [];

	$.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getCourse.php", //Relative or absolute path to file.php file
        data: {},
        success: function(response) {
            console.log(JSON.parse(response));
            var course=JSON.parse(response);
            var newContent="";
            for(var i=0;i<course.length;i++){

                newContent+="<div class='col-md-4'><div class='small-overlay-img'><a href='/courses/"+course[i].title+".php'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></a></div></div>";

            }
            $("#courseList").html(newContent);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

});
