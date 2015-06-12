$( document ).ready(function() {

    getDBTable("equipment", 2, function(equipment) {
        if (typeof equipment == 'string' || equipment instanceof String) {
            console.log("Error while getting database data");
        } else {
            var equipmentList="";
            for(var i=0;i<equipment.length;i++){
                $("#equipmentList").append("<h3 class='center-text col-md-12'>"+equipment[i].title+"</h3><div class='row'><div class='small-overlay-img'><div class='col-md-3'><img class='img-equip center-img img-rounded' src='../assets/equip-"+equipment[i].id+".jpg'></div></div><div class='col-md-9'><p>"+equipment[i].descriprion+"</p></div></div>");
            }
        }
    });
});
