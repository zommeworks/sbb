$(document).ready(function(){
  /* masonry style setup */
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    horizontalOrder: true,
  });

  /*  */
  $(data_main).ready(function(){
    /* put a main card image */
    $('#template_main').html(function(index, html){
      var html_main = html.replace("{{card_source}}", data_main.source);
      $('#section_main').html(html_main);
    });
    /* reassign title of the grid area */
    var title_content;
    if(category_kr == category_kr_none) {
      title_content = "비슷한 카드 더 보기";
    }
    else {
      title_content = `#${category_kr} 카드 더 보기`;
    }
    $('#grid_title').text(title_content);
    /* put card grid items */
    /* masonry style setup */
    var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      horizontalOrder: true,
    });
    $(data_f_cat).ready(function(){
      $.each(data_f_cat, function(gridindex, griditem){
        if(griditem.name != name) {
          $('#template_grid_card').html(function(index, html){
            var html_card = html.replace("{{card_source}}", griditem.source);
            $grid.append(html_card);

            $('.img-card').ready(function(){
              $grid.masonry('reloadItems')
                   .masonry('layout').
                   masonry('appended', html_card);
            });

            console.log($(html_card));
          });
        }
      });
    });
  });
});

/*
const fac = new FastAverageColor();
const prime_img = document.querySelector('#main_img');
fac.getColorAsync(prime_img)
    .then(color => {
        document.documentElement.style.setProperty('--color-prime', color.rgba);
        console.log(color.rgba);
    })
    .catch(e => {
        console.log(e);
    });
*/
