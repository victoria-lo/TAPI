$( document ).ready(function() {
    
    $('.dropdown-menu a').on('click', function(){
        const selText = $(this).text();
        $('#display').removeClass("none").html("<p>"+selText+"</p>");
        if(selText == "Get All Tea"){
            $('#display').getAll();
        }
        if(selText == "Get One Tea"){
            $('#display').getOne();
        }
        if(selText == "Post new comment"){
            $('#display').postOne();
        }
        if(selText == "Post New Tea (Admin only)"){
            $('#display').postTea();
        }
        if(selText == "Delete All Tea (Admin only)"){
            $('#display').postOne();
        }
        if(selText == "Delete One Tea (Admin only)"){
            $('#display').postOne();
        }
    });

})

$.fn.getAll = function () {
    $.getJSON('https://tea-api-vic-lo.herokuapp.com/tea', function(data) {
        $('#display').append("<p>"+JSON.stringify(data)+"</p>")
    })
};

$.fn.getOne = function(){
    $('#display').append('<input type="text" id="getOne" name="name" placeholder="Tea name">\
        <button type="button" class="form-btn" id="oneTea">Get My Tea~</button>');

    $('#oneTea').on('click', function() {
        $.getJSON('https://tea-api-vic-lo.herokuapp.com/tea/'+$('#getOne').val(), function(data){
            $('#display').html("<p>Here's your Tea!</p><p>"+JSON.stringify(data)+"</p>")
        })
    });
}

$.fn.postOne = function(){
    $('#display').append('<input type="text" id="postOne" name="name" placeholder="Tea to comment">\
    <input type="text" id="comment" name="comment" placeholder="Comment">\
    <button type="button" class="form-btn" id="oneComment">Post My Comment~</button>');

    $('#oneComment').on('click', function() {
        console.log($('#postOne').val());
        const obj=$.ajax({
            url: 'https://tea-api-vic-lo.herokuapp.com/tea/'+$('#postOne').val(),
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify({"comment":$('#comment').val()}),
            success: function(data) {
                $('#display').html("<p>Thanks for your comment! Here's all the comments so far.</p><p>"+JSON.stringify(data.comments)+"</p>")
            }
        });
        console.log(obj);
    });
}
