var supported = {

gamersky: [".page_css b", ".Mid2L_con,.MidL_con"],
wallpaperscraft: [".page_active", ".wallpapers,.pages", 10],
yinyuetai: [function(doc){return $(doc).find(".page-nav span").filter(function(){return $(this).attr('class') == null})}, ".mv_list,.page-nav"],
"tieba\.baidu\.com\/p": ['.pb_footer .tP', '.pb_content,.pb_footer'],
"ituring\.com\.cn\/book": ['.PagedList-currentPage', '#mainbar', 5],
"ituring\.com\.cn\/users\/giftportal": ['.PagedList-currentPage', 'tr:not(:first)'],
"epubit\.com\.cn\/book": ['.PagedList-currentPage', '.col-md-9 .panel', 5],

}