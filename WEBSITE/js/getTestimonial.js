$( document ).ready(function() {

    var testimonial = [];
    $("#testimonialList").html("");
    
	$.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getTestimonial.php", //Relative or absolute path to file.php file
        data: {table: "testimonial"},
        success: function(response) {
            console.log(JSON.parse(response));
            var testimonial=JSON.parse(response);
            var testimonialList="";
            for(var i=0;i<testimonial.length;i++){
                
                $("#testimonialList").append("<div class='col-md-6'><p class='gray-border'>&quot;"+testimonial[i].quotation+"&quot; - "+testimonial[i].name+"</p></div>");
                
            //document.querySelector("#Boxing").className = "beep";
            }
            //$("#testimonialList").html(testimonialList);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
});
