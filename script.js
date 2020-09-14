var feed = $('.yottie-widget-contents')[0];
    $('.yottie-widget-inner').html(feed);
    
$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
});
setInterval($('.eapps-link').hide(),1000);