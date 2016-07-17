var supported = {

    gamersky: {current: ".page_css b", content: ".Mid2L_con"},

    wallpaperscraft: {current: ".page_active", content: ".wallpapers,.pages", limit: 10},

    yinyuetai: {
        current: function($doc, $) {
            return $doc.find(".page-nav span").filter(function() {
                return $(this).attr('class') == null
            })},
        content: ".mv_list,.page-nav"
        },

    "tieba\.baidu\.com\/p": {current: '.pb_footer .tP', content: '.pb_content,.pb_footer'},

    "ituring\.com\.cn\/book": {current: '.PagedList-currentPage', content: '#mainbar', limit: 5},

    "ituring.*giftportal":  {current: '.PagedList-currentPage', content: 'tr:not(:first)'},

    "epubit\.com\.cn\/book": {
        current: '.PagedList-currentPage',
        content: '.col-md-9 .panel',
        limit: 5,
        after: function($doc) {
            $doc.find('.lazy').each(function() {
                var $img = jQuery(this);
                $img.attr("src", $img.attr("data-src"));
            });
        }
    },

    "sspai\.com\/tag": {
        next: ".pager li:last-child",
        content: ".main .main:last-child",
        limit: 3,
        after: function($doc) {
            $doc.find('.lazy').each(function() {
                var $img = jQuery(this);
                $img.attr("src", $img.attr("data-src"));
            });
        }
    },

    scanlibs: {next: ".nav-previous a", content: ".pull-left"},

    avxhome: {next: ".next", content: ".col-md-12"},

    //banshujiang: {current: ".active", content: ".row,.pagination"},

    onlineprogrammingbooks: {current: ".current", content: "#content", limit: 10},

}