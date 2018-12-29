(function($){
  /* ---------------------------------------------------------------------------
   * Filter posts.
   * --------------------------------------------------------------------------- */

  let $grid_posts = $('#container-posts');
  $grid_posts.imagesLoaded(function () {
    // Initialize Isotope after all images have loaded.
    $grid_posts.isotope({
      itemSelector: '.isotope-item',
      layoutMode: 'masonry'
    });

    // Filter items when filter link is clicked.
    $('#filters a').click(function () {
      let selector = $(this).attr('data-filter');
      $grid_posts.isotope({filter: selector});
      $(this).removeClass('active').addClass('active').siblings().removeClass('active all');
      return false;
    });
  });


})(jQuery);
