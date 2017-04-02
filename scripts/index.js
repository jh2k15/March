var jWindow=$(window);
var jHeight=250;
jWindow.scroll(function(){
    var scrollHeight=jWindow.scrollTop();
    if(scrollHeight>jHeight){
        $('#navbar-cx').removeClass('transparent-cx1');
        $('#navbar-cx .active a').removeClass('transparent-cx2');
        }else{
        $('#navbar-cx').addClass('transparent-cx1');
        $('#navbar-cx .active a').addClass('transparent-cx2');
    }
});
