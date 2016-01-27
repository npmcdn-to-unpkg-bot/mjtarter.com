// custom isotope JS - Sort portfolio projects by type

$( document ).ready( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
    }
  });

  // filter functions
  var filterFns = {
    // show if name ends with -ium
    name: function() {
      var name = $(this).find('.name').text();
      return name.match( /name$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'input', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('.ff-container').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'input', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});