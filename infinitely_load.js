(function(){

    function selectors() {
        var url = window.location.href;
        var selector = null;
        for (var pattern in supported) {
            var re = new RegExp(pattern);
            if (url.match(re)) {
                selector = supported[pattern];
                console.log(pattern, selector);
                return selector;
                break;
            }
        }
        console.log("not supported!");
    }

    function work_with($){

        function loadp(cur_p, content, limit){

            var $tail = $(content).last();

            limit = (limit || 99);

            function next_link(doc){
                if(--limit == 0) return;
                var $nex_p = ((typeof cur_p == "function") ? cur_p(doc) : $(doc).find(cur_p)).next();
                var link = ($nex_p.is('a') ? $nex_p : $nex_p.find('a')).attr('href');
                console.log(link);
                return link;
            }

            function process_page(data){
                var $cnt = $(data).find(content);
                console.log($cnt, $cnt.length);
                $tail.after($cnt);
                $tail = $cnt.last();
                _loadp(next_link(data));
            }

            function _loadp(link){
                link && $.get(link, process_page);
            }

            _loadp(next_link(document));

        }

        var slt = selectors();
        slt && loadp.apply(null, slt);

    }

    function afterJqLoaded(){
        o_j = window.jQuery.noConflict();
        work_with(o_j);
    }

    function loadJq(){
        var cdn = 'https://code.jquery.com/jquery-1.8.3.min.js';
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", cdn);
        fileref.onload = afterJqLoaded;
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }

    function noJq(){
        return typeof jQuery === 'undefined' || !jQuery.fn.jquery.match(/1\.8/);
    }

    noJq() ? loadJq() : work_with(jQuery);

})();