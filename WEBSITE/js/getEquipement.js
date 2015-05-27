$( document ).ready(function() {

    var equipement = [];
    $("#equipementList").html("");
    
	$.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "../php/getEquipement.php", //Relative or absolute path to file.php file
        data: {table: "equipement"},
        success: function(response) {
            console.log(JSON.parse(response));
            var equipement=JSON.parse(response);
            var equipementList="";
            for(var i=0;i<equipement.length;i++){
                
                $("#equipementList").append("<h3 class='center-text'>"+equipement[i].title+"</h3><div class='row'><div class='small-overlay-img'><div class='col-md-3'><img class='img-rounded img-equip center-img' src='/assets/equip-"+equipement[i].id+".jpg'></div></div><div class='col-md-9'><p>"+equipement[i].descriprion+"</p></div></div>");
                
            //document.querySelector("#Boxing").className = "beep";
            }
            //$("#equipementList").html(equipementList);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
});
