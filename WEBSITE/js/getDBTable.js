function getDBTable(dbTableName, columnToOrder, callback) {

    $.ajax({
            method: "POST",
            //dataType: "json",
            crossDomain: true,
            url: "/php/getDB.php",
            data: {table: dbTableName, order: columnToOrder},
            success: function(response) {
                callback(JSON.parse(response));
            },
            error: function(request,error)
            {
                callback(error);
            }
    });
}
