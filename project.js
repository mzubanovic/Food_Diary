$(document).ready(function(){

    function bindDblClick(food){
        $("#" + food).dblclick(function(){
            $(this).fadeOut("fast");
            $(this).clone().appendTo("#plate"); 
            $(this).addClass("sub");
            $("#" + food + " div.sub input").removeClass("invisible");
            $("#" + food + " div.sub span").removeClass("invisible");
         });   
    }

    function animateContainer(fridge){
        $("#" + fridge).animate({left:"0px"}, 200);
        $('#plate').animate({right:"0px"}, 200); 
        $('#result').animate({right:"0px"}, 200); 
    } 

    $("#sweets").click(function(){
        animateContainer("fridgeSweets");
        bindDblClick("whiteChocholate");
        bindDblClick("darkChocholate");
    }); 
    
//_____________________________________________

    $("#fats").click(function(){
        animateContainer("fridgeFats");
        bindDblClick("butter"); 
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

//-------------- Calculator Test -------------
    var darkChocholateNutritiveValue = {
        proteins: 2,
        fats: 25,
        calories: 180,
        sugars: 12
        };


    $("#submit").click(function(){
     
        var darkChocholateAmount = $('.submenu').val();
        var totalDarkChocholateProteins = darkChocholateNutritiveValue.proteins * darkChocholateAmount;
    
        $('#totalProteinsPlate').html(totalDarkChocholateProteins);

        alert(totalDarkChocholateProteins);
    });

});
//________________________________________________________


  


