function getDBElement(dbTableName, nameOfElement, callback) {

    $.ajax({
            method: "POST",
            //dataType: "json",
            crossDomain: true,
            url: "/php/getDBElement.php",
            data: {table: dbTableName, title: nameOfElement},
            success: function(response) {
                callback(JSON.parse(response));
            },
            error: function(request,error)
            {
                callback(error);
            }
    });
}
