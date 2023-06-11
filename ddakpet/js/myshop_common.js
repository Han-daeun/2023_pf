
$(document).mouseup(function(e) {
	var $search_form = $('.search_form');
	var $ddakpet_ranking_btn = $('.ddakpet_ranking_dowm_btn');

	if ($search_form.has(e.target).length === 0) {
		$search_form.removeClass('on');
		$ddakpet_ranking_btn.removeClass('on');
	}
});

//픽스메뉴 고정
function right_menu_fix() {
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 530) {
			$('.right_fix_box').addClass('fix');
		}
		else {
			$('.right_fix_box').removeClass('fix');
		}
	});
}

//맨 위로
function top_to_page() {
	$('.right_fix_top').on('click', function(e) {
		e.preventDefault();
		$('html,body').animate({ scrollTop: 0 }, 600);
	});
}

function bottom_to_page() {
	$('.right_fix_bottom').on('click', function(e) {
		e.preventDefault();
		$('html,body').animate({ scrollTop: ($('footer').offset().top) }, 600);
	});
}

function cate_open_toggle() {
    var $category = $('.category');
    var $category_bg = $('.category_bg');
    var $category_btn = $('.category_btn');


    $category_btn.click(function () {

        if ($category.hasClass('on')) {
            $category.removeClass('on');
            $category_bg.removeClass('on');
        } else {
            $category.addClass('on');
            $category_bg.addClass('on');
        }
    });
}

//검색창 열기
function search_form_open_toggle() {
	var $search_form = $('.search_form');
	var $ddakpet_ranking_btn = $('.ddakpet_ranking_dowm_btn');

	$search_form.addClass('on');
	$ddakpet_ranking_btn.addClass('on');
}

//검색창 닫기 
function search_form_close_toggle() {
	var $search_form = $('.search_form');
	var $ddakpet_ranking_btn = $('.ddakpet_ranking_dowm_btn');
	
	$search_form.removeClass('on');
	$ddakpet_ranking_btn.removeClass('on');
}

function ddakpet_ranking_open_toggle() {
    var $search_form = $('.search_form');
    var $ddakpet_ranking_btn = $('.ddakpet_ranking_btn');

    if ($ddakpet_ranking_btn.hasClass('on')) {
        $ddakpet_ranking_btn.removeClass('on');
        $search_form.removeClass('on');
    } else {
        $ddakpet_ranking_btn.addClass('on');
        $search_form.addClass('on');
    }
}

function search_rank_slide() {
    var swiper = new Swiper(".ddakpet_ranking", {
        loop: true,
        direction: "vertical",
        touchRatio: 0,
        autoplay: true,
    });
}

function cate_close_toggle() {
    var $category = $('.category');
    var $category_bg = $('.category_bg');
    var $cate_close_btn = $('.cate_close');


    $('.cate_close, .category_bg').click(function () {
        $category.removeClass("on");
        $category_bg.removeClass("on");
    });
}

//카테고리 2차메뉴 오픈
function category_2depth_toggle() {
	var $categoryOnedepth = $('.main_category_list > ul > li');
	
	
	
	$categoryOnedepth.mouseover(function(){
		$('.main_category_list > ul > li').removeClass('on');
		
		$(this).addClass('on');
	});
	
	$('.category').mouseleave(function(){
		$('.main_category_list > ul > li').removeClass('on');
	});
}

function wish_plus_toggle() {
    var $wish_plus_btn = $('.box .img .wish');


    $wish_plus_btn.click(function () {

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
        }
    });
}

function cons_plus_toggle() {
    var $cons_plus_btn = $('.box .img .cons');


    $cons_plus_btn.click(function () {

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
        }
    });
}

function ddakpet_ranking_slide() {
    var visual = $("#main_slide");
    var thumbs = $("#main_slide_thumbs");
    var syncedSecondary = true;

    visual
        .owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        slideSpeed: 2000,
        nav: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
        navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        ]
    }).on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function() {
        thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
        .owlCarousel({
        items: 4,
        dots: false,
        nav: false,
        navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        ],
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        responsiveRefreshRate: 100
    }).on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
        current = count;
        }
        if (current > count) {
        current = 0;
        }
        
        thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
        .find(".owl-item.active")
        .first()
        .index();
        var end = thumbs
        .find(".owl-item.active")
        .last()
        .index();

        if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
        var number = el.item.index;
        visual.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        visual.data("owl.carousel").to(number, 300, true);
    });
}

function main_visual_slide() {
    var visual = $("#main_slide");
    var thumbs = $("#main_slide_thumbs");
    var syncedSecondary = true;

    visual
        .owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        slideSpeed: 2000,
        nav: true,
        // autoplay: true,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
        navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        ]
    }).on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function() {
        thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
        .owlCarousel({
        items: 4,
        dots: false,
        nav: false,
        navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        ],
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        responsiveRefreshRate: 100
    }).on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
        current = count;
        }
        if (current > count) {
        current = 0;
        }
        
        thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
        .find(".owl-item.active")
        .first()
        .index();
        var end = thumbs
        .find(".owl-item.active")
        .last()
        .index();

        if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
        var number = el.item.index;
        visual.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        visual.data("owl.carousel").to(number, 300, true);
    });
}

function main_rank_tab() {
    var clickedTab = $(".rank_cate > .on");
    var tabWrapper = $(".rank_cont");
    var activeTab = tabWrapper.find(".on");

    activeTab.show();

    $(".rank_cate > li").on("click", function () {

        $(".rank_cate > li").removeClass("on");

        $(this).addClass("on");

        clickedTab = $(".rank_cate .on");

        $(".rank_cont > li").removeClass("on");

        var clickedTabIndex = clickedTab.index();

        $(".rank_cont > li").eq(clickedTabIndex).addClass("on");

        activeTab = $(".rank_cont > .on");
    });
}

function main_rank_subtab() {
    var clickedTab = $(".rank_sub_cate > .on");
    var tabWrapper = $(".rank_sub_cont");
    var activeTab = tabWrapper.find(".on");

    activeTab.show();

    $(".rank_sub_cate > li").on("click", function () {

        $(".rank_sub_cate > li").removeClass("on");

        $(this).addClass("on");

        clickedTab = $(".rank_sub_cate .on");

        $(".rank_sub_cont > li").removeClass("on");

        var clickedTabIndex = clickedTab.index();

        $(".rank_sub_cont > li").eq(clickedTabIndex).addClass("on");

        activeTab = $(".rank_sub_cont > .on");
    });
}

function main_rank_slide() {
    var rank_main = $("#rank_slide_box");
    var rank_txt = $("#rank_slide_list");
    var syncedSecondary = true;

    rank_main
        .owlCarousel({
            items: 1,
                nav: true,
                autoplay: false,
                dots: false,
                loop: true,
                animateIn: false,
                animateOut: false,
                navText: [
                    '<div class="rank_slide_prev"></div>',
                    '<div class="rank_slide_next"></div>'
                ]
        }).on("changed.owl.carousel", syncPosition);

    rank_txt
        .on("initialized.owl.carousel", function() {
        rank_txt
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
        .owlCarousel({
        items: 5,
        dots: false,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        touchDrag: false,
        mouseDrag: false,
        responsiveRefreshRate: 100
    }).on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
        current = count;
        }
        if (current > count) {
        current = 0;
        }
        
        rank_txt
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
        var onscreen = rank_txt.find(".owl-item.active").length - 1;
        var start = rank_txt
        .find(".owl-item.active")
        .first()
        .index();
        var end = rank_txt
        .find(".owl-item.active")
        .last()
        .index();

        if (current > end) {
        rank_txt.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
        rank_txt.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
        var number = el.item.index;
        rank_main.data("owl.carousel").to(number, 100, true);
        }
    }

    rank_txt.on("mouseover", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        rank_main.data("owl.carousel").to(number, 300, true);
    });
}

function recommend_slide() {
    // $('#recommend_slide').owlCarousel({
    //     items: 4,
    //     margin: 20,
    //     nav: false,
    //     autoplay: false,
    //     dots: false,
    //     loop: false,
    //     scrollbarType: "scroll",
    // });

    var swiper = new Swiper(".recommend_slide", {
        slidesPerView: 4,
        spaceBetween: 20,
        scrollbar: {
            el: ".recommend-scrollbar",
        },
    });
}

function my_recommend_slide() {

    // $('#my_recommend_slide').owlCarousel({
    //     items: 4,
    //     margin: 20,
    //     nav: false,
    //     autoplay: false,
    //     dots: false,
    //     loop: false,
    //     scrollbarType: "scroll",
    // });

    var swiper = new Swiper(".my_recommend_slide", {
        slidesPerView: 4,
        spaceBetween: 20,
        scrollbar: {
            el: ".myrecommend-scrollbar",
        },
    });
}

function mini_shop_slide() {
    var swiper = new Swiper(".minishop_nav", {
        
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".minishop_pre", {
        loop: true,
        effect: "fade",
        navigation: {
            nextEl: ".minishop_nav_btn_next",
            prevEl: ".minishop_nav_btn_prev",
        },
        thumbs: {
            swiper: swiper,
          },
      });
}

function mini_shop_banner_slide() {
    var swiper = new Swiper(".mini_banner", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".mini_banner_btn",
            clickable: true,
          },
    });
}

function new_box_slide() {
    var swiper = new Swiper(".new_box_slide", {
        
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".new_box_nav .swiper-button-next",
            prevEl: ".new_box_nav .swiper-button-prev",
          },
        scrollbar: {
            el: ".newitem-scrollbar",
        },
    });

    // function counter(event) {
    //     var element   = event.target;      
    //     var items     = event.item.count;
    //     var item      = event.item.index + 1;
       
    //    if(item > items) {
    //      item = item - items
    //    }
    //    $('#counter').html(item+"/"+items)
    //  }
}



function new_brand_slide() {
    $('#newbrand_slide').owlCarousel({
        items: 2,
        margin: 20,
        nav: false,
        autoplay: false,
        dots: true,
        loop: true,
    });
}

function today_pick_slide() {
    $('#todaypick_slide').owlCarousel({
        items: 1,
        nav: false,
        autoplay: false,
        dots: true,
        loop: true,
    });
}

function rank_box_slide() {
    // $('#rank_box_slide').owlCarousel({
    //     items: 5,
    //     margin: 20,
    //     nav: false,
    //     autoplay: false,
    //     dots: false,
    //     loop: false,
    //     scrollbarType: 'scroll'
    // });

    var swiper = new Swiper(".rank_box_slide", {
        slidesPerView: 5,
        spaceBetween: 20,
        scrollbar: {
            el: ".rank-scrollbar",
        },
    });
}

function hot_box_tab() {
    var $menu_tabs = $('.hot_box_cate li');
    $menu_tabs.on('click', function (e) {
        e.preventDefault();
        $menu_tabs.removeClass('on');
        $(this).addClass('on');
    });
}

function md_pick_tab() {
    var $menu_tabs = $('.mf_filter li');
    $menu_tabs.on('click', function (e) {
        e.preventDefault();
        $menu_tabs.removeClass('on');
        $(this).addClass('on');
    });
}


$(function () {
    right_menu_fix();
    top_to_page();
    bottom_to_page();

    cate_open_toggle();
    cate_close_toggle();
    category_2depth_toggle();
    search_rank_slide();

    wish_plus_toggle();
    cons_plus_toggle();

    main_visual_slide();

    main_rank_tab();
    main_rank_subtab();
    main_rank_slide();

    recommend_slide();
    my_recommend_slide();
    mini_shop_slide();
    mini_shop_banner_slide();

    new_brand_slide();
    today_pick_slide();

    new_box_slide();
    rank_box_slide();

    hot_box_tab();
    md_pick_tab();
});