//위탁정보설정 탭
function consignment_tab() {
    var clickedTab = $(".cons_setting_tab > .on");
    var tabWrapper = $(".cons_setting_cont > li");
    var activeTab = tabWrapper.find(".on");

    activeTab.show();

    $(".cons_setting_tab > li").on("click", function () {

        $(".cons_setting_tab > li").removeClass("on");

        $(this).addClass("on");

        clickedTab = $(".cons_setting_tab .on");

        $(".cons_setting_cont > li").removeClass("on");

        var clickedTabIndex = clickedTab.index();

        $(".cons_setting_cont > li").eq(clickedTabIndex).addClass("on");

        activeTab = $(".cons_setting_cont > li.on");
    });
}


$(function() {
    consignment_tab();
});