$( document ).ready(function() {

    getDBTable("testimony", 2, function(testimonial) {
        if (typeof testimonial == 'string' || testimonial instanceof String) {
            console.log("Error while getting database data");
        } else {
            var testimonialList="";
            for (var i=0; i < testimonial.length; i++){
                $("#testimonialList").append("<div class='col-md-6'><p class='gray-border'>&quot;"+testimonial[i].quotation+"&quot; - "+testimonial[i].name+"</p></div>");
            }
        }
    });
});
