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

  $('#sidebarToggle, #sidebarToggleTop').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-toggled');
    $('.sidebar').toggleClass('toggled');
    var isExpanded = !$('.sidebar').hasClass('toggled');
    $('#sidebarToggle, #sidebarToggleTop').attr('aria-expanded', isExpanded);
    if ($('.sidebar').hasClass('toggled')) {
      $('.sidebar .collapse').collapse('hide');
    }
  });

  $(window).resize(
    debounce(function () {
      var windowWidth = $(window).width();
      if (windowWidth < 768) {
        $('.sidebar .collapse').collapse('hide');
      }
      if (windowWidth < 480 && !$('.sidebar').hasClass('toggled')) {
        $('body').addClass('sidebar-toggled');
        $('.sidebar').addClass('toggled');
        $('#sidebarToggle, #sidebarToggleTop').attr('aria-expanded', false);
        $('.sidebar .collapse').collapse('hide');
      }
    }, 200),
  );

  $('body.fixed-nav .sidebar').on('wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent;
      var delta = e0.deltaY * -1 || e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  $(document).on(
    'scroll',
    debounce(function () {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn(200);
      } else {
        $('.scroll-to-top').fadeOut(200);
      }
    }, 200),
  );

  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    var target = $anchor.attr('href');
    var $target = $(target);
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

  $(document).ready(function () {
    $('.scroll-to-top').fadeOut(0);
    var isExpanded = !$('.sidebar').hasClass('toggled');
    $('#sidebarToggle, #sidebarToggleTop').attr({
      'aria-label': '切换侧边栏',
      'aria-expanded': isExpanded,
    });
  });
})(jQuery);
