/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

        // $('.project-image img').matchHeight({
        //     // byRow: true,
        //     // property: 'height',
        //     target: $('.project'),
        //     // remove: false
        // });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };

    //waves
    function Broadcaster(){
      this.broadcasting = false;
      this.wave = $('.radio-wave');
      this.broadcastingWaves = $('.broadcast');
      this.init();
    }

    Broadcaster.prototype ={
      broadcast: function(animationDelay, broadcastDelay){
        var self = this;
        if (!this.broadcasting){
          console.log('broadcasting');
          self.wave.addClass('broadcast');
          this.broadcasting = true;
          setTimeout(function(){
            self.wave.addClass('show');
          }, animationDelay);
        }else{
          this.broadcasting = false;
          self.wave.removeClass('broadcast');
        }
      },
      rebroadcast: function(animationDelay, broadcastDelay){
        console.log('rebroadcasting');
        var self = this;
        this.reset();
        this.quietBtn();
        setTimeout(function(){
          self.wave.addClass('broadcast');
          setTimeout(function(){
            self.wave.addClass('show');
            self.activateBtn();
          }, animationDelay);
        }, broadcastDelay);
      },
      reset: function(){
        this.wave.removeClass('broadcast');
        this.wave.removeClass('show');
      },
      quietBtn: function(){
        console.log('off');
        $('.btn-broadcast').off('click');
      },
      activateBtn: function(){
        var self = this;
        $('.btn-broadcast').click(function(){
          self.broadcast(750,0);
        });
      },
      init: function(){
        this.activateBtn();
      }
    };

    function startChasing(){
      $('.radio-wave').addClass('broadcast');
      $('.robot-message').addClass('show broadcast');
      $('.left-leg').addClass('chase');
      $('.right-arm').addClass('shake');
      $('.left-arm').addClass('shake');
      setTimeout(function(){
        $('.right-leg').addClass('chase');
      }, 750);
      $('.buttons').addClass('hide');
    }

    function wave(){
      $('.right-arm').addClass('wave');
    }

    function getClass(btn){
      return btn.attr('class').split(' ')[1].split('-')[1];
    }

    $(function(){
      var broadcaster = new Broadcaster();

      $(window).scroll(function() {
        var topOfWindow = $(window).scrollTop();
        console.log(topOfWindow);
        $('.radio-wave').each(function(){
          var imagePos = $(this).offset().top;

          if (imagePos < topOfWindow+400 && !broadcaster.broadcasting) {
            broadcaster.broadcast(1250,0);
          }
        });
      });
      $('.btn-wave').click(function(){
        $('.right-arm').removeClass('wave');
        setTimeout(function(){wave();}, 500);
      });
      $('.btn-chase').click(function(){startChasing();});
    });

})(jQuery);