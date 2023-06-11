

//주문목록 탭
function order_list_tab() {
	var clickedTab = $(".order_list_tab > ul > .on");
	var tabWrapper = $(".order_list_tab_cont > ul > li");
	var activeTab = tabWrapper.find(".on");

	activeTab.show();

	$(".order_list_tab > ul > li").on("click", function() {

		$(".order_list_tab > ul > li").removeClass("on");

		$(this).addClass("on");

		clickedTab = $(".order_list_tab .on");

		$(".order_list_tab_cont > ul > li").removeClass("on");

		var clickedTabIndex = clickedTab.index();

		$(".order_list_tab_cont > ul > li").eq(clickedTabIndex).addClass("on");

		activeTab = $(".order_list_tab_cont > ul > li.on");
	});
}


//주문목록 증빙발급내역 서브테이블
function invoice_subTable_toggle() {
	$('.invoice_detail_btn').click(function () {

		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).closest('tr').next('.sub_table').removeClass('on');
		} else {
			$('.invoice_detail_btn, .sub_table').removeClass('on');
			$(this).addClass('on');
			$(this).closest('tr').next('.sub_table').addClass('on');
		}
	});
}

//취소/반품/교환 안내 탭
function refund_attention_tab() {
	var clickedTab = $(".refund_step_tab > .on");
	var tabWrapper = $(".refund_step_cont > li");
	var activeTab = tabWrapper.find(".on");

	activeTab.show();

	$(".refund_step_tab > li").on("click", function() {

		$(".refund_step_tab > li").removeClass("on");

		$(this).addClass("on");

		clickedTab = $(".refund_step_tab .on");

		$(".refund_step_cont > li").removeClass("on");

		var clickedTabIndex = clickedTab.index();

		$(".refund_step_cont > li").eq(clickedTabIndex).addClass("on");

		activeTab = $(".refund_step_cont > li.on");
	});
}

//상품문의 답변 활성화
function inquiry_answer_toggle() {
	var $inquiry_answer_btn = $('.inquiry_state div.answer');

	$inquiry_answer_btn.click(function() {

		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).parent().prev().find('.inquiry_answer_box').removeClass('on');
		} else {
			$(this).addClass('on');
			$(this).parent().prev().find('.inquiry_answer_box').addClass('on');
		}
	});
}

//찜목록 탭
function wish_list_tab() {
	var clickedTab = $(".wishlist_tab > .on");
	var tabWrapper = $(".wishlist_cont > li");
	var activeTab = tabWrapper.find(".on");

	activeTab.show();

	$(".wishlist_tab > li").on("click", function() {

		$(".wishlist_tab > li").removeClass("on");

		$(this).addClass("on");

		clickedTab = $(".wishlist_tab .on");

		$(".wishlist_cont > li").removeClass("on");

		var clickedTabIndex = clickedTab.index();

		$(".wishlist_cont > li").eq(clickedTabIndex).addClass("on");

		activeTab = $(".wishlist_cont > li.on");
	});
}

//주문 상세내역 인쇄버튼 활성화
function print_toggle() {
	var $printBtn = $(".detail_order_print > div button");
	var $printBtn_box = $(".detail_order_print > div ul");

	$printBtn.click(function() {

		if ($printBtn_box.hasClass('on')) {
			$printBtn_box.removeClass('on');
		} else {
			$printBtn_box.addClass('on');
		}
	});
}

//교환/환불탭 파일첨부 파일명 표시
function refund_file_name_view_01() {
	$("#refund_upload_1").on('change', function() {
		var fileName = $("#refund_upload_1").val();
		$("#refund_upload_name_1").val(fileName);
	});
}

function refund_file_name_view_02() {
	$("#refund_upload_2").on('change', function() {
		var fileName = $("#refund_upload_2").val();
		$("#refund_upload_name_2").val(fileName);
	});
}

function refund_file_name_view_03() {
	$("#refund_upload_3").on('change', function() {
		var fileName = $("#refund_upload_3").val();
		$("#refund_upload_name_3").val(fileName);
	});
}

function refund_file_name_view_04() {
	$("#refund_upload_4").on('change', function() {
		var fileName = $("#refund_upload_4").val();
		$("#refund_upload_name_4").val(fileName);
	});
}

//알람페이지 슬라이드버튼 액션
function alam_slideBtn() {
	var $alam_slideBtn = $('.slideBtn');

	$alam_slideBtn.click(function() {

		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
		}
	});
}

//교환/환불신청 팝업 열기
function refund_popup_open_toggle() {
	var $refundBtn = $('.refundBtn');
	var $refundPopup = $('.refund_popup_wrap');

	$refundBtn.click(function() {

		$refundPopup.addClass('on');

	});
}

//교환/환불신청 팝업 닫기
function refund_popup_close_toggle() {
	var $refundPopup = $('.refund_popup_wrap');

	$('.popup_close_btn button, .popup_bg').click(function() {
		$refundPopup.removeClass("on");
	});
}


//결제영수증 팝업 열기
function receipt_popup_open_toggle() {
	var $receiptBtn = $('.receiptBtn');
	var $receiptPopup = $('.receipt_popup_wrap');

	$receiptBtn.click(function() {

		$receiptPopup.addClass('on');

	});
}

//결제영수증 팝업 닫기
function receipt_popup_close_toggle() {
	var $receiptPopup = $('.receipt_popup_wrap');

	$('.popup_close_btn button, .popup_bg').click(function() {
		$receiptPopup.removeClass("on");
	});
}

//증빙신청변경 팝업 열기
function evidence_popup_open_toggle() {
	var $evidenceBtn = $('.evidenceBtn');
	var $evidencePopup = $('.evidence_change_wrap');

	$evidenceBtn.click(function() {

		$evidencePopup.addClass('on');

	});
}

//증빙신청변경 팝업 닫기
function evidence_popup_close_toggle() {
	var $evidencePopup = $('.evidence_change_wrap');

	$('.popup_close_btn button, .popup_bg').click(function() {
		$evidencePopup.removeClass("on");
	});
}

//배송지 설정 팝업 열기
function address_popup_open_toggle() {
	var $addressPopup = $('.address_correct_popup_wrap');

	$addressPopup.addClass('on');
}

//배송지 설정 팝업 닫기
function address_popup_close_toggle() {
	var $addressPopup = $('.address_correct_popup_wrap');

	$('.popup_close_btn button, .address_correct_bg, .address_cancle_btn').click(function() {
		$addressPopup.removeClass("on");
	});
}

//오픈 api ip추가 팝업 열기 
function ip_addPopup_open_toggle() {
	var $addressPopup = $('.ip_add_wrap');

	$addressPopup.addClass('on');
}

//오픈 api ip추가 팝업 닫기
function ip_addPopup_close_toggle() {
	var $addressPopup = $('.ip_add_wrap');

	$('.popup_close_btn button, .popup_bg').click(function() {
		$addressPopup.removeClass("on");
	});
}

//캐시관리 페이지 탭
//주문목록 탭
function cash_page_tab() {
	var clickedTab = $(".cash_tab > ul > .on");
	var tabWrapper = $(".cash_tab_cont > ul > li");
	var activeTab = tabWrapper.find(".on");

	activeTab.show();

	$(".cash_tab > ul > li").on("click", function() {

		$(".cash_tab > ul > li").removeClass("on");

		$(this).addClass("on");

		clickedTab = $(".cash_tab .on");

		$(".cash_tab_cont > ul > li").removeClass("on");

		var clickedTabIndex = clickedTab.index();

		$(".cash_tab_cont > ul > li").eq(clickedTabIndex).addClass("on");

		activeTab = $(".cash_tab_cont > ul > li.on");
	});
}

//금액 선택 버튼
function cash_amount_toggle() {

	$('.select_amount > div').click(function() {

		$(".select_amount > div").removeClass("on");

		$(this).addClass("on");

	});
}

//결제 금액 초기화 버튼
function cash_amount_reset() {
	$(".amount_resetbtn").click(function() {
		$("#cash_amount_form").each(function() {
			$(this).reset();
		});
	});
}

$(function() {
	order_list_tab();
	invoice_subTable_toggle();
	refund_attention_tab();
	inquiry_answer_toggle();
	wish_list_tab();
	print_toggle();
	refund_file_name_view_01();
	refund_file_name_view_02();
	refund_file_name_view_03();
	refund_file_name_view_04();
	alam_slideBtn();
	refund_popup_open_toggle();
	refund_popup_close_toggle();
	
	receipt_popup_open_toggle();
	receipt_popup_close_toggle();
	evidence_popup_open_toggle();
	evidence_popup_close_toggle();
	address_popup_close_toggle();
	ip_addPopup_close_toggle();
	cash_page_tab();
	cash_amount_toggle();
	cash_amount_reset();
});