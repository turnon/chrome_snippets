(function($){

    // page number

    var curr = 0;
    var last = parseInt($('.PagedList-skipToLast a').attr('href').replace(/.*page\=/,'').replace(/\&.*/,''));

    // generate url for each page

    function page(p){
        return '/users/giftbooks?page=' + p + '&amp;OrderBy=price';
    }

    // store books and print out once

    var list = [];

    // continue to load until the last page
    
    var $tmp = $('<div/>');

    function process(data){

        var $book = $(this).find('table a[target=_blank]');
        var $price = $(this).find('table b');
        $book.each(function(i){
            list.push($($price[i]).text() + ' ' + $(this).text());
        });        

        if(curr < last){
            curr = curr + 1;
            $tmp.load(page(curr), process);
        }else{
            console.log(list.join("\n"));
        }

    }    

    $tmp.load(page(curr), process);

})(jQuery);
