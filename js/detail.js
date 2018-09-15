$(document).ready(
function () {
    var urlParams = new URLSearchParams(location.search);
    if(urlParams.has('name')){
        let name=  urlParams.get('name');
        $('#listName').html(name);
    }
    if (urlParams.has('id')) {
        $.ajax({
            url: `https://api.trello.com/1/lists/${urlParams.get('id')}/cards?key=05a52a88be328d8320121520f6175fb0&token=3f82da4f53acdb7170014bb3f204579d27eb2e1cf08dce984ffe629bd5bafba2`,
            type: 'GET',
            success: function (data) {
                $(data).each(function(index, element){
                    $("#cards").append(`<div class='col-lg-4 col-md-4 col-sm-6 col-xs-12 top-buffer'><div class="card h-100"> <div class="card-body"> <h5 class="card-title">${element.name} </h5> <div class="card-text">${element.desc} </div> </div> </div></div>`)
                })
            }
        });
    }
});