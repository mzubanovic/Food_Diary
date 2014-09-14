$(document).ready(function(){ 

    $(function() {

    $('#sort1').sortable({
       
        receive: function(event, ui) {
            event.preventDefault();
        },
        connectWith: ".sortable",
        appendTo: 'body'
    }).disableSelection();
    $('#sort2').sortable({
     
        receive: function(event, ui) {
            var on_plate = $('#sort2 div div').find('.invisible');
            $.each(on_plate, function(i, elem){
                $(elem).removeClass('invisible');
            });
            event.preventDefault();
        },

    }).disableSelection();
    //_____________________________________________________________________________


});

    function animateContainer(fridge){
            $("#" + fridge).animate({left:"0px"}, 200);
            $('#plate').animate({right:"0px"}, 200); 
            $('#result').animate({right:"0px"}, 200); 
    } 

    $("#sweets").click(function(){
        animateContainer("fridgeSweets");
     }); 
    
//_____________________________________________

    $("#fats").click(function(){
        animateContainer("fridgeFats");
    });

//______________________________________________

    $(".close").click(function() {
        $('#fridgeSweets').animate({left: "-290px"}, 200);
    });

    $("#darkChocholate").hover(function () {
            $("#darkChocholate").addClass("submenuHover");
        }, function () {
            $("#darkChocholate").removeClass("submenuHover");
    });
    $("#whiteChocholate").hover(function () {
            $("#whiteChocholate").addClass("submenuHover");
        }, function () {
            $("#whiteChocholate").removeClass("submenuHover");
    });
    
     $(".close").click(function() {
        $('#fridgeFats').animate({left: "-285px"}, 200);
    });

    $("#butter").hover(function () {
            $("#butter").addClass("submenuHover");
        }, function () {
            $("#butter").removeClass("submenuHover");
    });
    
});

//____________________________________________

    $('#calculate_btn').click(function() {
        // TODO calculate
    });


