$( document ).ready(function() {

    var course = [];

	$.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getDB.php", //Relative or absolute path to file.php file
        data: {table: "course"},
        success: function(response) {
            console.log(JSON.parse(response));
            var course=JSON.parse(response);
            var newContent="";
            for(var i=0;i<course.length;i++){

                newContent+="<div class='btnProd'><button type='button' style='background-image: url(../img/"+course[i].title+".jpg)' class='btn btn-primary btn-block prod' name='btn"+course[i].title+"' id='btn"+course[i].description+"'></button></div>";

            }
            $(HTMLBodyElement).html(newContent);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

});
