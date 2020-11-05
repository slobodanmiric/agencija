$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 50) {
        $('.sticky').addClass('stickyAdd');
    } else {
        $('.sticky').removeClass('stickyAdd');
    }
});

////////////////////////

const naslov = 'Full digitalna usluga';
let i = 0;

const kuckanje = () => {
    if(i < naslov.length) {
        document.querySelector('.tipkajuciNaslov').innerHTML += naslov.charAt(i);
        i++;
        
        setTimeout(kuckanje, 150);
    }
}
kuckanje();
