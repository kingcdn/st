var snprot=location.protocol;$(function(){var c=$(window).width();$(window).resize(function(){c=$(window).width()});if($(".pager").length){if(!$(".pager a").length){$(".pager").hide()}}var cd=SN_getCookie("searchway2");if(cd==5){U(5)}else if(cd==4){U(4)}else if(cd==3){U(3)}else if(cd==2){U(2)}else if(cd==1){U(1)}else if(cd==0){U(0)}if(cd==null){$(".serch-box .btns button.ascbg").prepend('<i class="fa fa-check-square"></i>')}function U(c){$(".serch-box .btns button:eq("+c+")").addClass("ascbg").prepend('<i class="fa fa-check-square"></i>').siblings().removeClass("ascbg").find(".fa").remove();var cd=$(".serch-box .btns button:eq("+c+")").text();$("#top-box .serch-box .sint").attr("placeholder","请输入"+cd+"关键词")}$(".serch-box .btns button").click(function(){var c=$(this).find(".fa").length;var cd=$(this).index();var U=$(this).text();SN_setCookie("searchway2",cd);if(c<1){$(this).addClass("ascbg").prepend('<i class="fa fa-check-square"></i>').siblings().removeClass("ascbg").find(".fa").remove()}var e=$(".serch-box .sint").val();var R=$(this).attr("data-url");if(e!=""){if(cd==0){location.href=R+e}else{window.open(R+e)}}else{$(".serch-box .sint").focus();$("#top-box .serch-box .sint").attr("placeholder","请输入"+U+"关键词")}});function e(){var c=$(".serch-box .btns button.ascbg").index();var cd=$(".serch-box .sint").val();var U=$(".serch-box .btns button.ascbg").attr("data-url");if(cd!=""){if(c==0){location.href=U+cd}else{window.open(U+cd)}}else{$(".serch-box .sint").focus()}}$(".serch-box .sbtn").click(function(){e()});$(".serch-box .sint").focus(function(){document.getElementById("serchwd").onkeydown=function(c){c=c?c:window.event;if(13==c.keyCode){e()}}});$(".main-nav>ul>li").append('<i class="dot"></i>');$(".main-nav>ul>li:has('ul')").mouseenter(function(){$(this).children("ul").stop(true,true).slideDown(200)}).mouseleave(function(){$(this).children("ul").stop(true,true).slideUp(200)});if($(".sn_navico").length){var R=$(".sn_navico").text().split("|");$(".main-nav>ul>li").each(function(c){if(R[c]!=""&&R[c]!=undefined){$(this).children("a").prepend('<i class="fa '+R[c]+'"></i>')}})}if($("#sitenav_from").length){$.getScript(snprot+"//ip.ws.126.net/ipquery",function(){$("#sitenav_from").mouseenter(function(){$(this).html("查看天气")}).mouseleave(function(){e()});var c="北京",cd="";if(typeof lc!="undefined"){c=lc}var U=0;$("#sitenav_from").click(function(){i(".sn-box-weather",c+"天气预报");if(!U){eN();U=1}});function e(){if(c!=cd&&typeof lo!="undefined"){cd=lo}$("#sitenav_from").html("<span>"+cd+c+"</span><span>查看天气</span>")}if($("#sitenav_from").length){e();function R(){var c=document.getElementById("sitenav_from");c.appendChild(c.firstChild)}setInterval(R,5e3)}function eN(){var cd=snprot+"//api.map.baidu.com/telematics/v3/weather?location="+c+"&output=json&callback=?&ak=ulSRoKwP2C1Wrmer5xWX2GCa";$.getJSON(cd,function(cd){var U=cd.date;var e=cd.results[0].pm25;var R='体感<span class="red">'+cd.results[0].index[0].zs+"</span>，";var eN='<span class="red">'+cd.results[0].index[2].zs+"</span>感冒，";var eO='<span class="red">'+cd.results[0].index[3].zs+"</span>运动，";var b='紫外线<span class="red">'+cd.results[0].index[4].zs+"</span>";var V=cd.results[0].weather_data;$.each(V,function(cd,V){var cM=V.date;var eG=cM.substr(0,2);var f=eG+" "+U.split("-")[1]+"月"+(parseInt(U.split("-")[2])+cd)+"日";var D="";if(cM.indexOf("实时")>=0){D=cM.split("：")[1].replace("℃)","")}var g="";if(D!=""){g='<div class="wetoday">'+c+"今日天气： <strong>"+V.weather+"&emsp;"+V.wind+"</strong><br>空气质量："+e+"&emsp;温度："+V.temperature+"（实时："+D+"℃）<br>"+R+eN+eO+b+"</div>"}else{g='<div class="wetlist"><b>'+f+"</b>"+'<p><img src="'+V.dayPictureUrl+'"></p>'+"<p>"+V.weather+"</p>"+"<p>"+V.temperature+"</p>"+"<p>"+V.wind+"</p></div>"}$(g).appendTo($(".sn-box-weather"))})})}})}var eN=calendar.solar2lunar();if($("#j_date").length){$("#j_date").html(eN.cYear+"年"+eN.cMonth+"月"+eN.cDay+"日 "+eN.ncWeek).attr("title","农历"+eN.IMonthCn+eN.IDayCn+" 点击查看更多")}$("#j_date").click(function(){i(".sn-box-date","查看日历");$(".sn-box-date .d1").html(eN.cYear+"年"+eN.cMonth+"月"+eN.cDay+"日（"+eN.astro+"）&nbsp;"+eN.ncWeek+"<br>农历"+eN.lYear+"年"+eN.IMonthCn+eN.IDayCn+"&emsp;"+eN.gzYear+"年&nbsp;"+eN.gzMonth+"月&nbsp;"+eN.gzDay+"日【"+eN.Animal+"年】")});var eO=$(".header_rt .htt");var b;eO.hover(function(){clearInterval(b)},function(){b=setInterval(function(){V(eO)},3e3)}).trigger("mouseout");function V(c){var cd=c.find("ul:first");var U=cd.find("li:first").height();cd.animate({"margin-top":-U+"px"},600,function(){cd.css({"margin-top":"0px"}).find("li:first").appendTo(cd)})}if($(".sn_cmstii").length){var cM=$(".sn_cmstii").text().split("|");$(".list-index").each(function(c){if(cM[c]!=""&&cM[c]!=undefined){$(this).find(".hat .ti i").replaceWith('<i class="fa '+cM[c]+'"></i>')}})}var eG="此处精彩已折叠，点击这里展开&rarr;";$(".list-index .hat .arr").click(function(){var c=$(this).parent().parent().index();var cd=SN_getCookie("snc"+c);if(cd!=1||cd==null){$(this).addClass("cu").prev().hide();$(this).parent().append('<div class="tip">'+eG+"</div>");$(this).parent().next().slideUp();$(this).find("i").addClass("rot");SN_setCookie("snc"+c,1)}else{$(this).removeClass("cu").prev().show();$(this).parent().find(".tip").remove();$(this).parent().next().slideDown();$(this).find("i").removeClass("rot");SN_setCookie("snc"+c,0)}});var f=[];var D=$(".list-index").length;for(var g=0;g<=D;g++){f[g]=SN_getCookie("snc"+g);if(f[g]!=1||f[g]==null){$(".list-index:eq("+g+") .hat ul").show();$(".list-index:eq("+g+") .hat").find(".tip").remove();$(".list-index:eq("+g+") .hat").next().show();$(".list-index:eq("+g+") .hat .arr").removeClass("cu").find("i").removeClass("rot")}else{$(".list-index:eq("+g+") .hat ul").hide(0);$(".list-index:eq("+g+") .hat").append('<div class="tip">'+eG+"</div>");$(".list-index:eq("+g+") .hat").next().hide(0);$(".list-index:eq("+g+") .hat .arr").addClass("cu").find("i").addClass("rot")}}$(".index-hot .item li:has(div), .list-index .item li:has(div)").mouseenter(function(){$(this).addClass("cu").find("div").fadeIn(300)}).mouseleave(function(){$(this).removeClass("cu").find("div").fadeOut(100)});$(".top-show a,.list-box .item li a,.post-content .ma").click(function(){var c=$(this).attr("onclick");if(typeof c!="undefined"){return false}});$(".list-box .item li .io").append('<i class="fa fa-angle-right"></i>');var G=SN_getCookie("fstatus");var d=0;if(G==1){d=1;$(".fixside").addClass("normal")}if(c>=1080){$(".fixside").mouseenter(function(){$(this).children(".fa").fadeIn(200)}).mouseleave(function(){$(this).children(".fa").fadeOut(200)})}$(".fixside>.fa").click(function(){$(this).hide();if(d==0){$(this).parent().addClass("normal");SN_setCookie("fstatus",1);d=1}else{$(this).parent().removeClass("normal");SN_setCookie("fstatus",0);d=0}});$(".fixside li:first a").click(function(){$("html, body").animate({scrollTop:0},300)});$(".fixside li:last a").click(function(){$("html, body").animate({scrollTop:document.body.clientHeight},300)});$(".fixside li:not(#s_login) a").click(function(){return false});$(".fixside #s_nav a").click(function(){var c=$(this).find("span").text();i(".sn-box-nav",c)});$(".fixside #s_admin a").click(function(){var c=$(this).find("span").text();i(".sn-box-admin",c)});$(".fixside #s_share a").click(function(){var c=$(this).find("span").text();i(".sn-box-share",c);$("#pageurl").val(window.location.href)});$(".sn-box-share .copyurl").click(function(){$("#pageurl").select();document.execCommand("Copy");alert("已复制！")});function i(c,cd){var U=$(c).prev(".fa").length;$("body").append('<div class="sn-over-bg"></div>');$(c).parent().animate({top:0,opacity:1},500);if(!U){$(c).parent().prepend('<div class="sn-box-ti">'+cd+'</div><i class="fa fa-times-circle"></i>')}}$("body").on("click",".sn-over-bg,.sn-box .fa-times-circle,.sn-box-con a",function(){$(".sn-box").animate({top:"-100%",opacity:0},800);$(".sn-over-bg").remove()});var a=["#333","#f06","#F3A745","#E2C93E","#666","#69B33B","#0593B9","#B0CF2D","#2BAFAE","#06f","#3DABB6","#333"];$(".sn-box-nav .foot-tags a").each(function(){var c=getRandomNum(0,a.length);$(this).css({color:a[c]})});var P=$(".list-box .item li a").length;var df=getRandomNum(0,P);var gG=$(".list-box .item li:eq("+df+")").html();$(".fixside #s_rand a").replaceWith(gG);$(".fixside #s_rand a").removeAttr("style").html('<i class="fa fa-random" title="随机访问"></i><span>随机访问</span>');$(".fixside #s_rand").find("div").remove();$(".fixside #s_rand a").click(function(){var c=$(this).attr("onclick");if(typeof c!="undefined"){return false}else{return true}});$(".foot-wrap ul").each(function(){if($(this).has("li").length){$(this).prepend("<li>友情链接：</li>")}else{$(this).hide()}});if($("#divCommentPost").length){var dZ=$("#divCommentPost").offset().top;$(".fixside #s_msg a").click(function(){$("html, body").animate({scrollTop:dZ},300);$("#txaArticle").focus()});$(".cpost .fa-plus").click(function(){$("#txaArticle").animate({height:"+=100px"},300)});$(".cpost .fa-reply").click(function(){$("#txaArticle").val("").focus().animate({height:"80px"},300)});document.getElementById("txaArticle").onkeydown=function(c){c=c?c:window.event;if(c.ctrlKey&&13==c.keyCode){zbp.comment.post()}}}else{$(".fixside #s_msg").hide()}});function getRandomNum(c,cd){return Math.floor(Math.random()*(cd-c))+c}function SN_Go(c){window.open(c)}function SN_setCookie(c,cd){var U=new Date;U.setTime(U.getTime()+900*24*60*60*1e3);document.cookie=c+"="+escape(cd)+";expires="+U.toGMTString()+";path=/"}function SN_getCookie(c){var cd,U=new RegExp("(^| )"+c+"=([^;]*)(;|$)");if(cd=document.cookie.match(U))return cd[2];else return null}zbp.plugin.unbind("comment.reply","system");zbp.plugin.on("comment.reply","SiteNav",function(c){$("#inpRevID").val(c);var cd=$("#divCommentPost"),U=$("#cancel-reply"),e=$("#temp-frm");var R=document.createElement("div");R.id="temp-frm";R.style.display="none";cd.before(R);$("#AjaxComment"+c).before(cd);cd.addClass("reply-frm");U.show();U.click(function(){$("#inpRevID").val(0);var c=$("#temp-frm"),cd=$("#divCommentPost");if(!c.length||!cd.length)return;c.before(cd);c.remove();$(this).hide();cd.removeClass("reply-frm");return false});try{$("#txaArticle").focus()}catch(c){}return false});zbp.plugin.on("comment.get","SiteNav",function(c,cd){$("span.commentspage").html("Waiting...")});zbp.plugin.on("comment.got","SiteNav",function(c,cd,U,e){$("#AjaxCommentBegin").nextUntil("#AjaxCommentEnd").remove();$("#AjaxCommentEnd").before(cd);$("#cancel-reply").click()});zbp.plugin.on("comment.postsuccess","SiteNav",function(){$("#cancel-reply").click()});var calendar={lunarInfo:[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],Gan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Zhi:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Animals:["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],solarTerm:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],sTermInfo:["9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","9778397bd19801ec9210c965cc920e","97b6b97bd19801ec95f8c965cc920f","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd197c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bcf97c3598082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd19801ec9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bd07f1487f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b97bd197c36c9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b70c9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","977837f0e37f149b0723b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0723b06bd","7f07e7f0e37f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f595b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e37f14998083b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14898082b0723b02d5","7f07e7f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66aa89801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e26665b66a449801e9808297c35","665f67f0e37f1489801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722"],nStr1:["日","一","二","三","四","五","六","七","八","九","十"],nStr2:["初","十","廿","卅"],nStr3:["正","二","三","四","五","六","七","八","九","十","冬","腊"],lYearDays:function(c){var cd,U=348;for(cd=32768;cd>8;cd>>=1){U+=calendar.lunarInfo[c-1900]&cd?1:0}return U+calendar.leapDays(c)},leapMonth:function(c){return calendar.lunarInfo[c-1900]&15},leapDays:function(c){if(calendar.leapMonth(c)){return calendar.lunarInfo[c-1900]&65536?30:29}return 0},monthDays:function(c,cd){if(cd>12||cd<1){return-1}return calendar.lunarInfo[c-1900]&65536>>cd?30:29},solarDays:function(c,cd){if(cd>12||cd<1){return-1}var U=cd-1;if(U==1){return c%4==0&&c%100!=0||c%400==0?29:28}else{return calendar.solarMonth[U]}},toGanZhiYear:function(c){var cd=(c-3)%10;var U=(c-3)%12;if(cd==0)cd=10;if(U==0)U=12;return calendar.Gan[cd-1]+calendar.Zhi[U-1]},toAstro:function(c,cd){var U="魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";var e=[20,19,21,21,21,22,23,23,23,23,22,22];return U.substr(c*2-(cd<e[c-1]?2:0),2)+"座"},toGanZhi:function(c){return calendar.Gan[c%10]+calendar.Zhi[c%12]},getTerm:function(c,cd){if(c<1900||c>2100){return-1}if(cd<1||cd>24){return-1}var U=calendar.sTermInfo[c-1900];var e=[parseInt("0x"+U.substr(0,5)).toString(),parseInt("0x"+U.substr(5,5)).toString(),parseInt("0x"+U.substr(10,5)).toString(),parseInt("0x"+U.substr(15,5)).toString(),parseInt("0x"+U.substr(20,5)).toString(),parseInt("0x"+U.substr(25,5)).toString()];var R=[e[0].substr(0,1),e[0].substr(1,2),e[0].substr(3,1),e[0].substr(4,2),e[1].substr(0,1),e[1].substr(1,2),e[1].substr(3,1),e[1].substr(4,2),e[2].substr(0,1),e[2].substr(1,2),e[2].substr(3,1),e[2].substr(4,2),e[3].substr(0,1),e[3].substr(1,2),e[3].substr(3,1),e[3].substr(4,2),e[4].substr(0,1),e[4].substr(1,2),e[4].substr(3,1),e[4].substr(4,2),e[5].substr(0,1),e[5].substr(1,2),e[5].substr(3,1),e[5].substr(4,2)];return parseInt(R[cd-1])},toChinaMonth:function(c){if(c>12||c<1){return-1}var cd=calendar.nStr3[c-1];cd+="月";return cd},toChinaDay:function(c){var cd;switch(c){case 10:cd="初十";break;case 20:cd="二十";break;break;case 30:cd="三十";break;break;default:cd=calendar.nStr2[Math.floor(c/10)];cd+=calendar.nStr1[c%10]}return cd},getAnimal:function(c){return calendar.Animals[(c-4)%12]},solar2lunar:function(c,cd,U){if(c<1900||c>2100){return-1}if(c==1900&&cd==1&&U<31){return-1}if(!c){var e=new Date}else{var e=new Date(c,parseInt(cd)-1,U)}var R,eN=0,eO=0;var c=e.getFullYear(),cd=e.getMonth()+1,U=e.getDate();var b=(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())-Date.UTC(1900,0,31))/864e5;for(R=1900;R<2101&&b>0;R++){eO=calendar.lYearDays(R);b-=eO}if(b<0){b+=eO;R--}var V=new Date,cM=false;if(V.getFullYear()==c&&V.getMonth()+1==cd&&V.getDate()==U){cM=true}var eG=e.getDay(),f=calendar.nStr1[eG];if(eG==0){eG=7}var D=R;var eN=calendar.leapMonth(R);var g=false;for(R=1;R<13&&b>0;R++){if(eN>0&&R==eN+1&&g==false){--R;g=true;eO=calendar.leapDays(D)}else{eO=calendar.monthDays(D,R)}if(g==true&&R==eN+1){g=false}b-=eO}if(b==0&&eN>0&&R==eN+1){if(g){g=false}else{g=true;--R}}if(b<0){b+=eO;--R}var G=R;var d=b+1;var i=cd-1;var a=calendar.toGanZhiYear(D);var P=calendar.getTerm(c,cd*2-1);var df=calendar.getTerm(c,cd*2);var gG=calendar.toGanZhi((c-1900)*12+cd+11);if(U>=P){gG=calendar.toGanZhi((c-1900)*12+cd+12)}var dZ=false;var aT=null;if(P==U){dZ=true;aT=calendar.solarTerm[cd*2-2]}if(df==U){dZ=true;aT=calendar.solarTerm[cd*2-1]}var dd=Date.UTC(c,i,1,0,0,0,0)/864e5+25567+10;var gT=calendar.toGanZhi(dd+U-1);var gN=calendar.toAstro(cd,U);return{lYear:D,lMonth:G,lDay:d,Animal:calendar.getAnimal(D),IMonthCn:(g?"闰":"")+calendar.toChinaMonth(G),IDayCn:calendar.toChinaDay(d),cYear:c,cMonth:cd,cDay:U,gzYear:a,gzMonth:gG,gzDay:gT,isToday:cM,isLeap:g,nWeek:eG,ncWeek:"星期"+f,isTerm:dZ,Term:aT,astro:gN}},lunar2solar:function(c,cd,U,e){var e=!!e;var R=0;var eN=calendar.leapMonth(c);var eO=calendar.leapDays(c);if(e&&eN!=cd){return-1}if(c==2100&&cd==12&&U>1||c==1900&&cd==1&&U<31){return-1}var b=calendar.monthDays(c,cd);var V=b;if(e){V=calendar.leapDays(c,cd)}if(c<1900||c>2100||U>V){return-1}var cM=0;for(var eG=1900;eG<c;eG++){cM+=calendar.lYearDays(eG)}var f=0,D=false;for(var eG=1;eG<cd;eG++){f=calendar.leapMonth(c);if(!D){if(f<=eG&&f>0){cM+=calendar.leapDays(c);D=true}}cM+=calendar.monthDays(c,eG)}if(e){cM+=b}var g=Date.UTC(1900,1,30,0,0,0);var G=new Date((cM+U-31)*864e5+g);var d=G.getUTCFullYear();var i=G.getUTCMonth()+1;var a=G.getUTCDate();return calendar.solar2lunar(d,i,a)}};function xyMonth(c){var cd=function(){var c=new Date;return{getDate:function(){return c},setDate:function(cd){c=cd}}}();U();e();R();function U(){var cd=document.getElementById(c);var U=document.createElement("div");var e=document.createElement("div");U.className="calendar-title-box";U.innerHTML="<span class='prev-month' id='prevMonth'></span>"+"<span class='calendar-title' id='calendarTitle'></span>"+"<span id='nextMonth' class='next-month'></span>";cd.appendChild(U);e.className="calendar-body-box";var R="<tr>"+"<th>日</th>"+"<th>一</th>"+"<th>二</th>"+"<th>三</th>"+"<th>四</th>"+"<th>五</th>"+"<th>六</th>"+"</tr>";var eN="";for(var eO=0;eO<6;eO++){eN+="<tr>"+"<td></td>"+"<td></td>"+"<td></td>"+"<td></td>"+"<td></td>"+"<td></td>"+"<td></td>"+"</tr>"}e.innerHTML="<table id='calendarTable' class='calendar-table'>"+R+eN+"</table>";cd.appendChild(e)}function e(){var c=cd.getDate().getFullYear();var U=cd.getDate().getMonth()+1;var e=V(cd.getDate());var R=document.getElementById("calendarTitle");var eN=e.substr(0,4)+"年"+e.substr(4,2)+"月";R.innerText=eN;var eO=document.getElementById("calendarTable");var b=eO.getElementsByTagName("td");var cM=new Date(c,U-1,1);for(var eG=0;eG<b.length;eG++){var f=new Date(c,U-1,eG+1-cM.getDay());var D=V(f);b[eG].innerText=f.getDate();b[eG].setAttribute("data",D);if(D==V(new Date)){b[eG].className="currentDay"}else if(D.substr(0,6)==V(cM).substr(0,6)){b[eG].className="currentMonth"}else{b[eG].className="otherMonth"}}}function R(){var c=document.getElementById("prevMonth");var cd=document.getElementById("nextMonth");eN(c,"click",eO);eN(cd,"click",b);var U=document.getElementById("calendarTable");var e=U.getElementsByTagName("td");for(var R=0;R<e.length;R++){eN(e[R],"click",function(c){console.log(c.target.getAttribute("data"))})}}function eN(c,cd,U){if(c.addEventListener){c.addEventListener(cd,function(c){U(c)})}else if(c.attachEvent){c.attachEvent("on"+cd,function(c){U(c)})}else{c["on"+cd]=function(c){U(c)}}}function eO(){var c=cd.getDate();cd.setDate(new Date(c.getFullYear(),c.getMonth()-1,1));e()}function b(){var c=cd.getDate();cd.setDate(new Date(c.getFullYear(),c.getMonth()+1,1));e()}function V(c){var cd=c.getFullYear();var U=c.getMonth()+1;var e=c.getDate();U=U>9?""+U:"0"+U;e=e>9?""+e:"0"+e;return cd+U+e}}var SN_jsload={head:document.getElementsByTagName("body")[0]||document.documentElement,Myload:function(c,cd){this.done=false;c.onload=c.onreadystatechange=function(){if(!this.done&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){this.done=true;cd();c.onload=c.onreadystatechange=null;if(this.head&&c.parentNode){this.head.removeChild(c)}}}},getScript:function(c,cd,U){var e=function(){};if(cd!=undefined){e=cd}var R=document.createElement("script");R.setAttribute("type","text/javascript");R.setAttribute("src",c);R.setAttribute("charset",U);this.head.appendChild(R);this.Myload(R,e)}};if(document.getElementById("myFocus")){SN_jsload.getScript(bloghost+"zb_users/theme/SiteNav/js/myfocus-2.0.4.min.js",function(){myFocus.set({id:"myFocus",pattern:"mF_liquid"})},"utf-8")}if(document.getElementById("serchwd")){SN_jsload.getScript(snprot+"//www.baidu.com/js/opensug.js",function(){},"gbk")}if(window.console&&window.console.log){console.log("\n %c ZBlogPHP SiteNav %c  尔今作品 \n","color:#fff;background:#f80;padding:5px 0;","color:#fff;background:#333;padding:5px 0;");console.log("%c https://app.zblogcn.com/?id=1130","")}