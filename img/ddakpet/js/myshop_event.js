//이벤트 카테고리 탭메뉴
function eve_cate_tab() {
	var clickedTab = $(".event_tabMenu_head > ul > .on");
    var tabWrapper = $(".event_tabMenu_cont");
    var activeTab = tabWrapper.find(".on");

    activeTab.show();

    $(".event_tabMenu_head > ul > li").on("click", function () {

        $(".event_tabMenu_head > ul > li").removeClass("on");

        $(this).addClass("on");

        clickedTab = $(".event_tabMenu_head .on");

        $(".event_tabMenu_cont").removeClass("on");

        var clickedTabIndex = clickedTab.index();

        $(".event_tabMenu_cont").eq(clickedTabIndex).addClass("on");

        activeTab = $(".event_tabMenu_cont.on");
    });
}

//지금 주목할만한 세일상품
function now_attention_product() {
	var swiper = new Swiper(".now_attention_product", {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".now_attention_nav .swiper-button-next",
			prevEl: ".now_attention_nav .swiper-button-prev",
		},
	});
}


//탭 이동 애니메이션
function header_tab_slidingAni() {
	$('.tab_underline').css('width', $('.on_tab.on').outerWidth());

$(".event_tabMenu_head > ul > li").click(function(e){
		e.preventDefault();
		$(".event_tabMenu_head > ul > li").removeClass("on_tab");
		$(this).addClass("js-on_tab");
    
    var current = $(this),
        position = current.position();
    $('.tab_underline').css('left', position.left);
    $('.tab_underline').css('width', $(this).outerWidth());
});
}


$(function () {
    
	eve_cate_tab();
	now_attention_product();
	header_tab_slidingAni();

    
});