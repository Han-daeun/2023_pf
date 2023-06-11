function Typing_title() {
    $(document).ready(function() {
        var text = document.getElementById("typeStyle");

        var typewriter = new Typewriter(text, {
            loop: true
        });

        typewriter.typeString('끊임없이 도전하는 디자이너 한다은입니다. ')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Design & Publishing')
            .pauseFor(2000)
            .start();

    });
}

function header_fix() {
    $(window).scroll(function(){
        if($(document).scrollTop() > 100) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
}

$(function () {
    Typing_title();
    header_fix();
})