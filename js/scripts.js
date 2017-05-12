var home = {

  titleEffect : function(){
    $('header h1').css('opacity', '1');
    setTimeout(function(){
      $('header h1 span.name').html('C');
      setTimeout(function(){
        $('header h1 span.name').html('Co');
        setTimeout(function(){
          $('header h1 span.name').html('Cod');
          setTimeout(function(){
            $('header h1 span.name').html('Codi');
            setTimeout(function(){
              $('header h1 span.name').html('Codin');
              setTimeout(function(){
                $('header h1 span.name').html('Coding');
                setTimeout(function(){
                  $('header h1 span.name').html('Coding B');
                  setTimeout(function(){
                    $('header h1 span.name').html('Coding Be');
                    setTimeout(function(){
                      $('header h1 span.name').html('Coding Bea');
                      setTimeout(function(){
                        $('header h1 span.name').html('Coding Bear');
                          setTimeout(function(){
                            $('header h1 span.line').html('');
                          }, 700);
                      }, 150);
                    }, 150);
                  }, 150);
                }, 700);
              }, 150);
            }, 150);
          }, 150);
        }, 150);
      }, 150);
    }, 500);

  },

  printService : function(service){
    switch (service) {
      case 'web':
        $('.services-result').load('./services/web.html');
      break;
      case 'update':

      break;
      case 'app':

      break;
      case 'imagen':

      break;
    }
  },

  randomHeight : function(){
    $('.grid-item').each(function(){
      var x = Math.floor((Math.random() * 5) + 0);
      var h = [60, 80, 100, 120, 150];
      $(this).css('height', h[x]+'px');
    });
  }

}

$(document).ready(function(){
  home.titleEffect();
  home.randomHeight();
  $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true
  })
});

$(document).on('click','#servicios .service',function(e){
  e.preventDefault();
  var service = $(this).attr('data-service');
  home.printService(service);
})
