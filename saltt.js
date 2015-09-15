(function($){

    // kwyword hash
    var kw = Object.create(null);
    
    // put into hash
    $('.car-monthlisting li a').each(function each_li(){
        var bookname = $(this).text();
        bookname.split(/\s/).forEach(function into_hash(e){
            var pure_kw = e.replace(/\W/,'').toLowerCase();
            if(kw[pure_kw] === undefined) kw[pure_kw] = [];
            kw[pure_kw].push(bookname);
        });        
    });
    
    // cache keyword list
    var kw_list = Object.keys(kw);
    
    // expose bokw function
    $.bokw = function(re){
        var rt = Object.create(null);
        kw_list.forEach(function search_kw(e){
            if(re.test(e)) rt[e] = kw[e];
        });
        console.log(rt);
    };
    
})(jQuery);
