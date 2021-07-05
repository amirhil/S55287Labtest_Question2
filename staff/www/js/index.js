$(function () {

    var link1 = crossroads.addRoute("", function () {
        var datalist = "";
        $.ajax({
            type: "post",
            url: "http://www.skimtech.my/ClassicModels/GetStaff",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData[lastIndex].status === 1) {
                    for (var i = 0; i < lastIndex; i++) {
                        htmlText = htmlText + "<tr><td><a href='#viewDetails/" + myData[i].id + "'>" + myData[i].email + "</a></td></tr>";
                    }

                    $("#tblDisplay tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });

        $("#divDetail").hide();
        $("#divDisplay").show();


    });

    var link2 = crossroads.addRoute("viewDetails/{id}", function (id) {
        var datalist = "id=" + id;
        $.ajax({
            type: "post",
            url: "http://www.skimtech.my/ClassicModels/GetStaffById",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData.status === 1) {
                        htmlText = htmlText + "<tr><td>Firstname: </td> <td>" + myData.firstname + 
                        "</td></tr> <tr><td>Lastname: </td> <td>" +myData.lastname + 
                        "</td></tr> <tr><td>Extenstion: </td> <td>" + myData.extension + 
                        "</td></tr> <tr><td>Jobtitle: </td> <td>" +myData.jobtitle + 
                        "</td></tr> <tr><td>ID: </td> <td>" +myData.id + 
                        "</td></tr> <tr><td>Email: </td> <td>" +myData.email + 
                        "</td></tr>";
                    $("#tblDetail tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });

        $("#divDetail").show();
        $("#divDisplay").hide();
    });

    var link3 = crossroads.addRoute("/back", function () {
        var datalist = "";
        $.ajax({
            type: "post",
            url: "http://www.skimtech.my/ClassicModels/GetStaff",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData[lastIndex].status === 1) {
                    for (var i = 0; i < lastIndex; i++) {
                        htmlText = htmlText + "<tr><td><a href='#viewDetails/" 
                        + myData[i].id + "'>" + myData[i].email + "</a></td></tr>";
                    }

                    $("#tblDisplay tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });

        $("#divDetail").hide();
        $("#divDisplay").show();


    });

    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }

    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

});