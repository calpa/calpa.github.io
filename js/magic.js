/**
 * Created by calpaliu on 15/1/2017.
 */
let t = document.title;
let title ={
    focus: t,
    exit: 'TAT 不要離開我',
};

window.onblur = () => {
    // When the user is not focus in the page
    document.title = title.exit;
};

window.onfocus = () => {
    // Restore the original title
    document.title = title.focus;
};

// fancybox 3.0
$('.post-container').each(function(i){
  $(this).find('img').each(function(){
    if ($(this).parent().hasClass('fancybox')) return;

    var alt = this.alt;

    if (alt) $(this).after('<span class="caption">' + alt + '</span>');

    // From jQuery, get this.data-src
    var src = $(this).data('src');

    $(this).wrap('<a data-fancybox="images" href="'+ src + '" title="' + alt + '" class="fancybox"></a>');
  });

  $(this).find('.fancybox').each(function(){
    $(this).attr('rel', 'article' + i);
  });
});

if ($.fancybox){
  $('[data-fancybox]').fancybox();
}

var observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
