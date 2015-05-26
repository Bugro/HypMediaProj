$( document ).ready(function() {

    var course = [];
    
	$.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getCourse.php", //Relative or absolute path to file.php file
        data: {table: "course"},
        success: function(response) {
            console.log(JSON.parse(response));
            var course=JSON.parse(response);
            var courseList="";
            for(var i=0;i<course.length;i++){
                
                $("#courseList").append("<div id='"+course[i].title.split(' ')[0]+"'><div class='col-md-4'><div class='small-overlay-img'><img class='small-img img-rounded' src='/assets/"+course[i].title+".jpg'><p class='desc white-links'>"+course[i].title+"</p></div></div></div>");
                
                $("#"+course[i].title.split(' ')[0]+"").on("click", {title: course[i].title, description: course[i].description}, displayDescription);
            //document.querySelector("#Boxing").className = "beep";
            }
            //$("#courseList").html(courseList);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
});

function displayDescription( event ){
    elmt = "<h3 class='center-text' id='courseTitle'>"+event.data.title+"</h3><div class='row'><div class='col-md-3'><div class='small-overlay-img'><img class='img-equip img-rounded' src='/assets/"+event.data.title+".jpg'></div></div><div class='col-md-9' id='courseDescription'><p>"+event.data.description+"</p></div></div><a href='/courses/' class='btn btn-primary btn-room' role='button'>Return</a>";
    $("#courseList").html(elmt);
}
