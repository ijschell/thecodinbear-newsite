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
        $('#loadWeb').load('./services/web.html');
      break;
      case 'update':
        $('#loadActualizaciones').load('./services/actualizaciones.html');
      break;
      case 'app':
      $('#loadApp').load('./services/app.html');
      break;
      case 'imagen':

      break;
    }
  },

  randomBanner : function(){
    var i = Math.floor((Math.random() * 2) + 1);
    var image = [
      './images/oso1.jpg',
      './images/oso2.jpg'
    ];
    $('header').attr('style', 'background-image: url("'+image[i-1]+'")');
    if(i == 2){
      $('header h1').css('color', '#fff').css('text-shado', '1px 1px 1px #000');
      //$('header .go_back').addClass('go_back_black');
    }
  },

}

function scrollToAnchor(aid){
    var aTag = $("[data-anchor='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function loadSuccess(){
  $('#loader').addClass('loaded');
  setTimeout(function(){
    $('#loader').remove();
  }, 1000);
  $('body').css('overflow-y', 'auto');
  home.titleEffect();
}

$(document).ready(function(){
  //random banner
  home.randomBanner();

  //slider
  $('.slider-work').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
  });

  //print web
  home.printService('web');
  //print update
  home.printService('update');
  //print app
  home.printService('app');
});

$(document).on('click','#servicios .service',function(e){
  e.preventDefault();
  var service = $(this).attr('data-service');
  home.printService(service);
});

$(window).on('load', function(){
  loadSuccess();
})
