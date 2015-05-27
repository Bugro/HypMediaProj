function getDBTable(dbTableName, callback) {

    $.ajax({
            method: "POST",
            //dataType: "json",
            crossDomain: true,
            url: "/php/getDB.php",
            data: {table: dbTableName},
            success: function(response) {
                callback(JSON.parse(response));
            },
            error: function(request,error)
            {
                callback(error);
            }
    });
}
