$( document ).ready(function() {
    
    $('.dropdown-menu a').on('click', function(){
        const selText = $(this).text();
        $('#display').removeClass("none").html("<p>"+selText+"<p>");
        if(selText == "Get All Tea"){
            $('#display').getAll();
        }
    });

})

$.fn.getAll = function () {
    $.getJSON('https://tea-api-vic-lo.herokuapp.com/tea', function(data) {
        $('#display').append("<p>"+data+"<p>")
    })
};