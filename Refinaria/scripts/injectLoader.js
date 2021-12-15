$(function () {
    $('.loading-all').load('../baseCristal/loading.html');
    $('.header-bg').load('../baseCristal/header/menu_template.html');
})

setTimeout(() => {
    $('.loading-all').fadeOut();
}, 2000)

function scrollToContact() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section-contact").offset().top
    }, 2000);
}
