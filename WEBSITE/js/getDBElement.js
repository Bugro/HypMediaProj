function getDBElement(dbTableName, nameOfElement, nameOfColumn, callback) {

    $.ajax({
            method: "POST",
            //dataType: "json",
            crossDomain: true,
            url: "/php/getDBElement.php",
            data: {table: dbTableName, title: nameOfElement, column: nameOfColumn},
            success: function(response) {
                callback(JSON.parse(response));
            },
            error: function(request,error)
            {
                callback(error);
            }
    });
}
