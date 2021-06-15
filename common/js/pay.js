$(function () {
    var userInfoDump = localStorage.getItem("_d")
    var userInfo = undefined;
    var menuDom = $('.menu-reg')
    if (userInfoDump) {
        userInfo = Base64.decode(userInfoDump);
        userInfo = JSON.parse(userInfo);
        userInfo.is_vip = false;
        userInfo.vip_left_days = 0;
        if (userInfo.vip_end_time !== -1) {
            var timeNow = Math.ceil((new Date()).getTime() / 1000)
            userInfo.is_vip = userInfo.vip_endtime > timeNow
            userInfo.vip_left_days = Math.ceil((userInfo.vip_endtime - timeNow) / (24 * 60 * 60))
        }
    }
    if (userInfo) {
        console.log(userInfo);
        if (userInfo.is_vip) {
            menuDom.append("<a href=\"/user.html\" class='button'><div>VIP中心</div></a>")
            $('#tag_user_type').text("VIP用户 （剩余" + userInfo.vip_left_days + "天）");
            $('.state-check-login').css("display", "none");
            $('.state-check-vip').css("display", "none");
            $('.state-default').css("display", "block");

        } else {
            menuDom.append("<a href=\"/user.html\"  class='button'><div>升级VIP看所有视频</div></a>")
            $('#tag_user_type').text("免费用户");
            $('.state-check-vip').css("display", "block");
            $('.state-check-login').css("display", "none");
        }
        $('#tag_user_name').text(userInfo.user_name);
    } else {
        menuDom.append("<a href=\"/register.html\"  class='button'><div>注册</div></a><a href=\"/login.html\"  class='button'><div>登录</div></a>")
        // $('.state-default').css("display", "none");
        $('.state-check-vip').css("display", "none");
    }
    $('.state-preview').css("display", "block");
    $('#menu_logout').click(function () {
        localStorage.removeItem("_d");
        window.location = "/login.html";
    });
    $('.pay_action').click(function () {
        var pay_id = $(this).attr("data-pay-id")
        var goods_id = $(this).attr("data-goods-id")
        $.getJSON("/api/pay", {"pay_id": pay_id, "goods_id": goods_id, "uid": userInfo.uid}, function (data) {
            console.log(data)
            if (data.pay_url) {
                window.open(data.pay_url, "_blank", 'width=600,height=600');
                setTimeout(function () {
                    window.location = "/api/pay_" + userInfo.uid
                }, 1000)
            } else {
                alert("无法获取有效支付通道，请稍后再试")
            }
        })
    });
    $("#check_btn").click(function () {
        var check_btn = $(this);
        if (window.check_pay) {
            return
        }
        window.check_pay = true;
        var old_val = check_btn.text()
        check_btn.text("正在检查支付状态...")
        $.getJSON("/api/pay_check", {"uid": userInfo.uid}, function (data) {
            if (data.errno === 0) {
                check_btn.val("支付已完成，正在跳转到VIP中心")
                window.location = "/user.html"
            } else {
                check_btn.text(old_val)
                alert(data.msg + "，请完成支付后再点击本按钮检查")
            }
            window.check_pay = false;
        })
    });
    $('#reopen_btn').click(function () {
        window.open($(this).attr("url"), "_blank", 'width=600,height=600');
    })
})