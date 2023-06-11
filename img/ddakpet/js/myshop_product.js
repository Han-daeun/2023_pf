//상품이미지 슬라이드
function product_image_slide() {
	//옵션이미지
	var swiper = new Swiper(".product_img_slide", {
		direction: "vertical",
		spaceBetween: 10,
		slidesPerView: '6',
		freeMode: true,
		cssMode: true,
		loop: false,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".product_next",
			prevEl: ".product_prev",
		},
	});
	//메인이미지
	var swiper2 = new Swiper(".product_img_full", {
		speed: 0,
		effect: 'fade',
		touchRatio: 0,
		thumbs: {
			swiper: swiper,
		},
		pagination: {
			el: ".product_img_progress .swiper-pagination",
			type: "fraction"
		},
	});
}


//포인트 안내팝업
function point_popup_open() {
	$('.product_info_point_popup').addClass('on');
}

function point_popup_close() {
	$('.product_info_point_popup').removeClass('on');
}

//상품 상세정보 탭
function product_detail_tab() {
	var clickedTab = $(".product_detail_tab > .on");
	var tabWrapper = $(".product_detail_tab_cont li");
	var activeTab = tabWrapper.find(".on");

	activeTab.show();

	$(".product_detail_tab > li").on("click", function () {

		$(".product_detail_tab > li").removeClass("on");

		$(this).addClass("on");

		clickedTab = $(".product_detail_tab .on");

		$(".product_detail_tab_cont > li").removeClass("on");

		var clickedTabIndex = clickedTab.index();

		$(".product_detail_tab_cont > li").eq(clickedTabIndex).addClass("on");

		activeTab = $(".product_detail_tab_cont li.on");
	});
}

//상세정보 영역 픽스
function detail_scroll_fix() {

	$(window).on("scroll", function () {
		var window_top = $(window).scrollTop();
		var detail_top = $('.product_detail_wrap').position().top - 70;
		var detail_bottom = detail_top + $('.product_detail_wrap').height() - window.innerHeight + 70;

		if ($('.product_fix_option').hasClass("fix")) {
			if (window_top > detail_bottom) {
				$('.product_detail_tab_box').removeClass('fix');
				$('.product_fix_option').removeClass('fix');
			} else if (window_top <= detail_top) {
				$('.product_detail_tab_box').removeClass('fix');
				$('.product_fix_option').removeClass('fix');
			}
		} else {
			if (window_top > detail_top && window_top < detail_bottom) {
				$('.product_detail_tab_box').addClass('fix');
				$('.product_fix_option').addClass('fix');
			}
		}

	});
}

//최근본상품 탭
function product_viewed_item_tab() {
	$(".recommend_item_box> ul> li").on("click", function () {
		$(".recommend_item_box > ul > li").removeClass("on");
		$(".recommend_item_box_02 > ul > li").removeClass("on");
		$(this).addClass("on");

		const clickedTab = $(".recommend_item_box .on");
		const clickedTabIndex = clickedTab.index();
		const itemBox = $(".recommend_item_box_02 > ul > li[number='" + clickedTabIndex + "']");

		if (itemBox.length > 0) {
			$(itemBox).addClass("on");
		} else {
			//on 클래스 가진 채로 div add
			//slide 설정

			ajax("POST", "/rest/main/free/my-recommend", "json", true, {
				"seq": $(clickedTab).attr("seq")
			}, true, false, function () {
				if (this.result == RETURN_SUCCESS) {

					let $cont = $(document.createDocumentFragment());
					const $li = $("<li></li>").addClass("on").attr("number", clickedTabIndex);
					const $swiper = creDiv().addClass("swiper");
					const $ul = $("<ul></ul>").addClass("box_wrap").addClass("swiper-wrapper");
					$.each(this.data_list, function () {
						$ul.append(createProductMini(this).addClass("swiper-slide"));
					});
					$swiper.append($ul);
					const $item_nav = creDiv().addClass("recommend_item_nav");
					$item_nav.append($("<button></button>").addClass("recommend_item_prev").attr("type", "button"));
					$item_nav.append($("<button></button>").addClass("recommend_item_next").attr("type", "button"));
					$li.append($swiper);
					$li.append($item_nav);
					$cont.append($li);

					$(".recommend_item_box_02 > ul").append($cont);

					new Swiper($(".recommend_item_box_02 > ul > li[number='" + clickedTabIndex + "']").find(".swiper"), {
						slidesPerView: 5,
						spaceBetween: 20,
						observer: true, //display none 일때 적용
						observeParents: true, //display none 일때 적용
						loop: true,
						navigation: {
							nextEl: ".recommend_item_next",
							prevEl: ".recommend_item_prev",
						}
					});
				}
			});
		}
	});


	if ($(".recommend_item_box>ul>li").length > 0) $(".recommend_item_box>ul>li").eq(0).trigger("click");
}


//찜 아이콘 활성화
function product_wish_toggle() {
	var $product_wish_plus_btn = $('.product_wish');

	$product_wish_plus_btn.click(function () {
		if ($(this).hasClass('on')) {
			//위시 해제
			removeWish(product_info_seq);
			$(this).removeClass('on');
		} else {
			//위시 추가
			addWish(product_info_seq);
			$(this).addClass('on');
		}
	});
}

//상품 옵션별 이미지 슬라이드

//함께 구매하면 좋은 상품 슬라이드
function together_item_slide() {
	var swiper = new Swiper(".together_item_slide", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: ".together_item_nav .together_item_next",
			prevEl: ".together_item_nav .together_item_prev",
		},
	});
}


//묶음배송 가능상품 슬라이드
function bundle_item_slide() {
	var swiper = new Swiper(".bundle_item_slide", {
		slidesPerView: 4,
		spaceBetween: 10,
		//		loop: true,
		navigation: {
			nextEl: ".bundle_item_nav .bundle_item_next",
			prevEl: ".bundle_item_nav .bundle_item_prev",
		},
	});
}


//다른 고객이 함께 본 상품 슬라이드
function buyer_choice_slide() {
	var swiper = new Swiper(".buyer_choice_slide", {
		slidesPerView: 5,
		spaceBetween: 20,
		observer: true, //display none 일때 적용
		observeParents: true, //display none 일때 적용
		navigation: {
			nextEl: ".buyer_choice_next",
			prevEl: ".buyer_choice_prev",
		},
		scrollbar: {
			el: ".choice-scrollbar",
			draggable: true,
		},
	});
}


//상품상세페이지 상품상세이미지 펼치기
function product_detail_img_open() {
	var $img_openBtn = $('.product_detail_image button');
	var $img_box = $('.product_detail_image');

	$img_openBtn.click(function () {


		if ($img_box.hasClass('open')) {
			$img_box.removeClass('open');
		} else {
			$img_box.addClass('open');
		}

	});
}

$(function () {
	product_image_slide();

	product_detail_tab();
	product_viewed_item_tab(); // 최근본상품 클릭이벤트 
	product_wish_toggle();

	together_item_slide();
	bundle_item_slide();
	buyer_choice_slide();
		
	product_detail_img_open();
	//	product_fix_option();
});

//옵션 선택창 고정
//function product_fix_option() {
//  var fix_optionBox = $(".product_detail_box").offset().top;
//		$(window).scroll(function() {
//		  	var window = $(this).scrollTop();
//		
//		    if(fix_optionBox <= window) {
//		      $(".product_fix_option").addClass("fix");
//		    } else {
//		      $(".product_fix_option").removeClass("fix");
//		    }
//		});
//}

function fnMove() {
	var offset = $("#option_place_table").offset();
	$('html, body').animate({
		scrollTop: offset.top
	}, 600);
}

function restockCall(input) {
	const seq = $(input).val();
	const checked = $(input)[0].checked;
	let type = "add";
	if (!checked) type = "remove";

	ajax("POST", "/rest/product/restock/" + type, "json", true, {
		"product_option_seq": seq,
		"product_info_seq": product_info_seq
	}, true, false);

	//전체 다 선택되어있으면 상단 재입고알림 on 추가
	if ($(".detail_price_infoBox").find("input[type='checkbox']:not(:checked)").length == 0) {
		$(".body_wrap .product_restock_alarm").addClass("on");
	} else {
		$(".body_wrap .product_restock_alarm").removeClass("on");
	}
}

