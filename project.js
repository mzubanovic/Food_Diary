$(document).ready(function(){
    $("#sweets").click(function(){
        $('#fridgeSweets').animate({left:"0px"}, 200);
        $('#plate').animate({right:"0px"}, 200);

        $("#darkChocholate").dblclick(function(){
            $("#darkChocholate").fadeOut("fast");
            $("#darkChocholate").clone().appendTo("#plate");
        });

        $("#whiteChocholate").dblclick(function(){
            $("#whiteChocholate").fadeOut("fast");
            $("#whiteChocholate").clone().appendTo("#plate");
        });
    });

    $("#sweets-close").click(function() {
        $('#fridgeSweets').animate({left: "-285px"}, 200);
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
});

