$(document).ready(
    function () {
        $('.card-body').on("click",".btn", function(){
            window.location = `./detail.html?id=${$(this).attr('data-val-id')}&name=${$(this).attr('data-val-name')}`;
        });
        $.ajax({
            url: 'https://api.trello.com/1/boards/5b7f533d8844516711bf7da7/lists?key=05a52a88be328d8320121520f6175fb0&token=3f82da4f53acdb7170014bb3f204579d27eb2e1cf08dce984ffe629bd5bafba2',
            type: 'GET',
            success: function (data) {
                $(data).each(function (index, element) {
                    $('#lists').append(`<tr><td>${element.name}</td> <td><button data-val-id='${element.id}' data-val-name='${element.name}' class='btn btn-light'><i class="fas fa-arrow-right"></i></button> </td> </tr>`);
                })
            }
        });
    }
);
