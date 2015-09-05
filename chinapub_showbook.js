(function($){

  var list = [];

  $('.sf_rbj > div').addClass('cate');
  
  $('.bookshow li.bookName a').map(function(){
    return $(this).closest('.cate').find('.sf_bt').text() + this.text;
  }).sort().each(function(){
    list.push(this.toString());
  });
  
  console.log(list.join('\n'));

})(jQuery);
