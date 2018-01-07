$(btn).on('click',function(){
    if($(popover).is(':hidden')){
        $(popover).show();

    }else{

        $(popover).hide();

    }

})

$(wrapper).on('click',function(e){
    e.stopPropagation();

})


$(document).on('click',function(){
    $(popover).hide();
})

