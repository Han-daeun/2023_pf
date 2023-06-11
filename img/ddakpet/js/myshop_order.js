//판매자배송 별 총금액 상세보기
function client_price_detail_toggle() {
	
	$('.client_moreBtn').click(function() {
		
		if ($(this).hasClass("on")) {
			$(this).removeClass("on");
			$('.cart_client_sum_detail').removeClass("on");
			
		} else {
			$(this).addClass("on");
			$('.cart_client_sum_detail').addClass("on");
		}
	});
	
}

//장바구니 고정 레이아웃
function cart_fix_toggle() {
	$(window).scroll(function(){
		var window_top = $(window).scrollTop();
	   	var detail_top = $('.payment_list_box').position().top + 190;
	   	var detail_bottom = detail_top + $('.payment_list_box').height() - window.innerHeight + 100;
		
		if($('.payment_right_box').hasClass("fix")) {
			if(window_top > detail_bottom) {
		      	$('.payment_right_box').removeClass('fix');
				$('.payment_right_box').addClass('bottom');
			}else if(window_top <= detail_top) {
		   		$('.cart_list_top').removeClass('fix');
		      	$('.payment_right_box').removeClass('fix');
		   	}
		}else {
			if (window_top > detail_top && window_top < detail_bottom){
				$('.payment_right_box').removeClass('bottom');
		      	$('.cart_list_top').addClass('fix');
		      	$('.payment_right_box').addClass('fix');
		   	}
		}
	});
}

//배송주소록 팝업 열기
function address_popup_open_toggle() {
	var $addressBtn = $('.address_bookBtn');
	var $addressPopup = $('.address_popup_wrap.address_list');


	$addressBtn.click(function() {
		$addressPopup.addClass('on');
	});
}

//배송주소록 팝업 열기
function address_popup_add_open_toggle() {
	var $addressWhen = $('.address_popup_wrap.address_list');
	var $addressBtn = $($addressWhen).find('.saveBtn');
	var $addressPopup = $('.address_popup_wrap.address_add');


	$addressBtn.click(function() {
		$addressWhen.removeClass("on");
		$addressPopup.addClass('on');
	});
}

//배송주소록 닫기
function address_popup_close_toggle() {
	$('.popup_close_btn button, .popup_bg, .closeBtn').click(function() {
		const $addressPopup = $(this).closest(".address_popup_wrap");
		$addressPopup.removeClass("on");
		
		if($addressPopup.hasClass("address_add")) {
			$addressPopup.removeClass("on");
			//배송지 추가 모달창을 꺼버리면 기존 배송지 목록 나오게 함

			const $addressWhen = $('.address_popup_wrap.address_list');
			$addressWhen.addClass('on');
		}else if($addressPopup.hasClass("address_modify")){
			$addressPopup.removeClass("on");
			//배송지 추가 모달창을 꺼버리면 기존 배송지 목록 나오게 함

			const $addressWhen = $('.address_popup_wrap.address_list');
			$addressWhen.addClass('on');
		}
	});
}

//견적서 출력 팝업 열기
function estimate_popup_open_toggle() {
	var $estimateBtn = $('.estimate_printBtn');
	var $estimatePopup = $('.estimate_print_wrap');


	$estimateBtn.click(function() {
		const productList = new Object(); let index = 0;
		$.each($(".cart_body").find(".table_row"), function(){
			const sellerName = $(this).find("li[data-id]").text().trim();
			let deliveryAdd = false;
			$.each($(this).find(".cart_item"), function(){
				const checkbox = $(this).find("[name='sc_ft_soldOut']")[0].checked;
				if(checkbox) {
					
					const productName = $(this).find(".op_p_name").text();
					$.each($(this).find(".cart_prod_option"), function(){
						const quantity = Number($(this).find(".option_count").val());
						if(quantity>0) {
							//선택한 상품만 표시되도록 함
							deliveryAdd = true;
							
							const optionName = $(this).find(".cart_color").text();
							const optionPrice = Number($(this).find(".option_count").attr("price"));
							
							productList["productList["+index+"].product_name"] = productName;
							productList["productList["+index+"].option_all_name"] = optionName;
							productList["productList["+index+"].sale_shop_name"] = sellerName;
							productList["productList["+index+"].price"] = optionPrice;
							productList["productList["+index+"].quantity"] = quantity;
							
							index++;
						}
					});
				}
			});
			
			if(deliveryAdd) {
				const deliveryPrice = Number(uncomma($(this).find(".d_tp").text().trim()));
				if(deliveryPrice>0) {
					productList["productList["+index+"].product_name"] = "배송비";
					productList["productList["+index+"].sale_shop_name"] = sellerName;
					productList["productList["+index+"].price"] = deliveryPrice;
					
					index++;
				}
			}
		});
		
		
		const $form = $("<form action='/dp/order/bill' method='post' target='billPopup'></form>");
		for(const name in productList){
			$form.append("<input type='hidden' name='"+name+"' value='"+productList[name]+"'>");
		}
		
		$("body").append($form);
		
		window.open('', 'billPopup', 'width=830,height=1000,resizeable,scrollbars');
		$form.submit();
		
		
		
	});
}

//견적서 출력 팝업 닫기
function estimate_popup_close_toggle() {
	var $estimatePopup = $('.estimate_print_wrap');

	$('.popup_close_btn button, .popup_bg').click(function() {
		$estimatePopup.removeClass("on");
	});
}

//옵션 추가/변경 팝업 열기
function option_popup_open_toggle() {
	var $optionChangeBtn = $('.cart_prod_text > li:nth-child(3) button');
	//var $optionChangePopup = $('.option_change_wrap');


	$optionChangeBtn.click(function() {
		const item = $(this).closest(".cart_item");
		const seq = $(item).attr("info-seq");
		
		ajax("POST", "/rest/product/cart/option", "text", true, {"seq":seq} , true, false, function() {
			const $html = jQuery("<div>").html(this+"");
			const contents = $("<div>").append($html.html());
			
			$(".content").append(contents);
			
			
			const options = $(item).find(".cart_prod_option");
			$.each(options, function(){
				const seq = $(this).attr("seq");
				const count = $(this).find(".option_count").val();
				const add = addProductOption(seq);
				$(contents).find(".option_result_list[option-seq='"+seq+"']").find(".option_count").val(count).trigger("blur");
			});
			
			setTimeout(function(){
    			$(contents).find(".popup_wrap").addClass("on");
    		}, 100);
		});
		
	});
}

//장바구니 묶음배송 가능상품 열기
function cart_bundle_toggle() {
	$('.cart_bundle button').click(function() {
		
		if ($(this).hasClass("on")) {
			$(this).removeClass("on");
			$(this).closest('.cart_sum_box').next().removeClass("on");
			
		} else {
			const bundle = $(this).closest('.cart_sum_box').next();
			const button = $(this);
			if($(bundle).find("li").length>0) {
				$(button).addClass("on");
				$(bundle).addClass("on");
			}else {
				//해당 묶음배송과 함께 묶어 판매될 수 있는 상품 목록 요청
				const key = $(bundle).attr("for");
				const table_row = $(".cart_body").find(".table_row[key='"+key+"']");
				const productList = new Object(); let index = 0;
				$.each($(table_row).find(".cart_item"), function(){
					const seq = $(this).attr("info-seq");
					productList["productList["+index+"].product_info_seq"] = seq;
					index++;
				});
				
				ajax("POST", "/rest/product/cart/bundle", "text", true, productList, true, false, function() {
					const $html = jQuery("<div>").html(this+"");
					const contents = $("<div>").append($html.html());
					
					if($(contents).find("li").length>0) {
						$(bundle).find("ul").append(contents.find(">li"));
						
						new Swiper($(bundle).find(".swiper"), {
					        slidesPerView: 3, 
							spaceBetween: 0,
							loop: true,
							observer: true, //display none 일때 적용
					        observeParents: true, //display none 일때 적용
					        navigation: {
					            nextEl: $(bundle).find(".bundle_item_next"),
					            prevEl: $(bundle).find(".bundle_item_prev"),
					        },
					    });
						
						
						$(button).addClass("on");
						$(bundle).addClass("on");
						
						
					}else {
						//묶음배송 상품이 추가로 없음
					}
					
				});
				
			}
		}
	});
}

//장바구니 묶음배송 가능상품 슬라이드
function cart_bundle_slide() {
//	var swiper = new Swiper(".cart_bundle_slide_ddak", {
//        slidesPerView: 3, 
//		spaceBetween: 0,
//		loop: true,
//		observer: true, //display none 일때 적용
//        observeParents: true, //display none 일때 적용
//        navigation: {
//            nextEl: ".cate_ddak_bundle_item_nav .bundle_item_next",
//            prevEl: ".cate_ddak_bundle_item_nav .bundle_item_prev",
//        },
//    });
//	
//	//테이블이 반복되어 들어가기떄문에 개별 설정 불가. 처리 필요
//	var swiper = new Swiper(".cart_bundle_slide", {
//        slidesPerView: 3, 
//		spaceBetween: 0,
//		loop: true,
//		observer: true, //display none 일때 적용
//        observeParents: true, //display none 일때 적용
//        navigation: {
//            nextEl: ".cate_bundle_item_nav .bundle_item_next",
//            prevEl: ".cate_bundle_item_nav .bundle_item_prev",
//        },
//    });
}

//주문결제 페이지 결제내역 상세보기 팝업
function payment_detail_popup_open() {
	$('.payment_sum_detail').addClass('on');
}

function payment_detail_popup_close() {
	$('.payment_sum_detail').removeClass('on');
}


$(function() {
	client_price_detail_toggle();
	cart_fix_toggle();
	
	cart_bundle_toggle();
	cart_bundle_slide();
	
	address_popup_open_toggle();
	address_popup_close_toggle();
	address_popup_add_open_toggle();
	
	estimate_popup_open_toggle();
	estimate_popup_close_toggle()
	option_popup_open_toggle();
});