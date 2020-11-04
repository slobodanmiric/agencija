$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('.sticky').addClass('stickyAdd');
    } else {
        $('.sticky').removeClass('stickyAdd');
    }
});

/////////////////////

const heading = 'Full digitalna usluga';
let i = 0;

const typing = () => {
    if(i < heading.length) {
        document.querySelector('.tipkajuciNaslov').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
}

typing();