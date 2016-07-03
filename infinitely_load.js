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

        function loadp(selector){

            var $tail = $(selector.content).last();

            var limit = (selector.limit || 99);

            var link_selector = (selector.current || selector.next);

            function link_slt_fun($doc){
                var $link = (typeof link_selector === "function") ?
                    link_selector($doc, $) : $doc.find(link_selector);
                return selector.next ? $link : $link.next();
            };

            function next_link(doc){
                if(--limit == 0) return;
                var $nex_p = link_slt_fun($(doc));
                var link = ($nex_p.is('a') ? $nex_p : $nex_p.find('a')).attr('href');
                console.log(link);
                return link;
            }

            function process_page(data){
                var $doc = $(data);
                selector.after && selector.after($doc);
                var $cnt = $doc.find(selector.content);
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
        slt && loadp.call(null, slt);

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
        return (typeof jQuery === 'undefined' || !jQuery.fn.jquery.match(/1\.8/));
    }

    noJq() ? loadJq() : work_with(jQuery);

})();