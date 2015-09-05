(function($){

  // content to load

  var content_pos = '.MidL_con,.Mid2L_con';
  
  // web page path pattern

  var path_arr = window.location.pathname.split(/\//);
  var path = path_arr[path_arr.length -1 ].replace(/\..*/,'').replace(/_.*/,'');
  
  // loading (do not load current page)

  var $pg = $('.page_css');
  
  var curr_page = $pg.find('b a').text();
  
  $pg.find('a').map(function(){
    return this.text;
  }).filter(function(){
    return curr_page != this && /\d/.test(this);
  }).each(function(){
    var $d = $('<div/>');
    $(content_pos).last().append($d);
    $d.load(path + '_' + this + '.shtml' + ' ' + content_pos);
  });
  
})(jQuery);
