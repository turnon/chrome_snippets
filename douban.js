(function($){
    var $a_list = $('.paginator > a');

    $.fn.reverse = [].reverse;

    var $exists = $('.article');

    $a_list.reverse().each(function(){

        var $tmp = $('<div/>').addClass('article');

        $exists.after($tmp);

        var $a = $(this);

        var href = $a.attr('href');

        $tmp.load(href + " .article > *");
    });

})(jQuery);