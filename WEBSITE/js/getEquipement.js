$( document ).ready(function() {

    getDBTable("equipement", 2, function(equipement) {
        if (typeof equipement == 'string' || equipement instanceof String) {
            console.log("Error while getting database data");
        } else {
            var equipementList="";
            for(var i=0;i<equipement.length;i++){
                $("#equipementList").append("<h3 class='center-text col-md-12'>"+equipement[i].title+"</h3><div class='row'><div class='small-overlay-img'><div class='col-md-3'><img class='img-equip center-img img-rounded' src='/assets/equip-"+equipement[i].id+".jpg'></div></div><div class='col-md-9'><p>"+equipement[i].descriprion+"</p></div></div>");
            }
        }
    });
});
