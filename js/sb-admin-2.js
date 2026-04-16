(function ($) {
  'use strict';

  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    };
  }

  function updateSidebarToggleState() {
    var isToggled = $('.sidebar').hasClass('toggled');
    $('#sidebarToggle, #sidebarToggleTop').attr('aria-expanded', !isToggled);
  }

  $('#sidebarToggle, #sidebarToggleTop').on('click', function (e) {
    $('body').toggleClass('sidebar-toggled');
    $('.sidebar').toggleClass('toggled');
    if ($('.sidebar').hasClass('toggled')) {
      $('.sidebar .collapse').collapse('hide');
    }
    updateSidebarToggleState();
  });

  updateSidebarToggleState();

  $(window).resize(
    debounce(function () {
      if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
      }
      if ($(window).width() < 480 && !$('.sidebar').hasClass('toggled')) {
        $('body').addClass('sidebar-toggled');
        $('.sidebar').addClass('toggled');
        $('.sidebar .collapse').collapse('hide');
        updateSidebarToggleState();
      }
    }, 200),
  );

  $('body.fixed-nav .sidebar').on('wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.deltaY;
      this.scrollTop += delta > 0 ? 30 : -30;
      e.preventDefault();
    }
  });

  $(document).on(
    'scroll',
    debounce(function () {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    }, 200),
  );

  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    var $target = $($anchor.attr('href'));
    if ($target.length) {
      $('html, body').stop().animate(
        {
          scrollTop: $target.offset().top,
        },
        1000,
        'easeInOutExpo',
      );
    }
    e.preventDefault();
  });
})(jQuery);
