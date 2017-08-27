/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

// Tooltip Init
$(function() {
  $("[data-toggle='tooltip']").tooltip();
});

// responsive tables
$(document).ready(function() {
  $("table").wrap("<div class='table-responsive'></div>");
  $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function() {
  $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
  $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// 判断是不是博文页面
function isPages(attr) {
  var currentBoolean = document.querySelector('.navbar.navbar-custom').getAttribute(attr);
  return currentBoolean === 'true';
}

// 判斷是否需要魔法
function isMagicable() {
  var article = document.querySelector('article');
  if (article) {
    var magicable = article.getAttribute('data-enableMagic');
    if (magicable === 'false') {
      document.getElementById('nav-top').classList.add('is-fixed');
    }
    return magicable === 'true'; // data is string type
  }

  return false;
}
/*
    滚动函数
    接收三个参数,
        1 接收一个DOM对象
        2 给目标对象切换class
        3 触发的高度 (可选项,如果不指定高度,会将DOM的高度作为触发高度)
*/
function greater(a, b) {
  return a > b;
}
function scrollCheck(scrollTarget, toggleClass, scrollHeight, reversed) {
  document.addEventListener('scroll', function() {
    var currentTop = window.pageYOffset;

    var test = greater(currentTop, scrollHeight || scrollTarget.clientHeight);
    if (reversed) {
      test = !test;
    }
    test ? scrollTarget.classList.add(toggleClass) : scrollTarget.classList.remove(toggleClass);
  })
}

/*
* 先获取H1标签
* 然后滚动出现固定导航条后
* 将其内容放到上面居中显示
* */

// Change Blog Post Navbar
(function() {
  if (!isPages('data-ishome')) {
    // navbar
    var navbar = document.querySelector('.navbar-custom');
    var navbarHeight = 60;
    var introHeader = document.querySelector('.intro-header')
    var headerHeight = 60;

    if (introHeader) {
      headerHeight = introHeader.offsetHeight;
    }

    var introHeader = introHeader > 497 ? introHeader : 400;
    var postTitle = document.querySelector('.title-calpa');

    // table of content
    var toc = document.querySelector('.toc-wrap');
    if (toc) {
      scrollCheck(toc, 'toc-fixed', introHeader);
    }

    if (isMagicable() === true) {
      scrollCheck(navbar, 'is-fixed', navbarHeight);
      scrollCheck(postTitle, 'display-none', navbarHeight, true);
    }
  }
})();

function scrolltoTop(event) {
  event.preventDefault();
  $('body').animate({
    scrollTop: 0
  }, 500);
}
