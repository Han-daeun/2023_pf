//공지사항 내용 활성화
function notice_answer_toggle() {
    var $notice_list = $('.notice_title');

    $notice_list.click(function () {

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).next().removeClass('on');
        } else {
            $(this).addClass('on');
            $(this).next().addClass('on');
        }
    });
}

//문의내역 확인 답변 활성화
function help_inquiry_answer_toggle() {
    var $help_inquiry_answer_btn = $('.help_list_wrap table tbody tr td:nth-child(5) span');

    $help_inquiry_answer_btn.click(function () {

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).parent().parent().next().removeClass('on');
        } else {
            $(this).addClass('on');
            $(this).parent().parent().next().addClass('on');
        }
    });
}

$(function() {
    notice_answer_toggle();
    help_inquiry_answer_toggle();
});