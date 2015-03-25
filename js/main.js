$(function(){
  var $gridContainer  = document.getElementById('grid'),
      $masonry;
  imagesLoaded($gridContainer, function(){
      $masonry  = new Masonry($gridContainer);
  });
});
