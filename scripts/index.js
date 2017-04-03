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


    $(function () {
        $('#summary').carousel();
        $('#navbar-cx .navbar-collapse a').click(function (e) {
            var href = $(this).attr('href');
            var tabId = $(this).attr('data-tab');
            if ('#' !== href) {
                e.preventDefault();
                  $(document).scrollTop($(href).offset().top - 70);
                if (tabId) {
                    $('#nav-tabs-cx a[href=#' + tabId + ']').tab('show');
                }
            }
        });
    });
