function taker(step, sort, tags) {
    $.ajax({
        type: 'POST',
        url: '/hunt.php',
        dataType: "html",
        data: {step: step, sort: sort, tags: tags},
        success: function (data) {
            $("#jscode").html(data);
            run_items();
        }
    });
}

function run_items() {
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        itemer(i, obj['id'], obj['code'], obj['date'], obj['likes']);
    }
}

function itemer(order, id, code, date, likes) {
    var newitem = $('#bank .item').clone().appendTo('#feed').attr('data-order', order).attr('data-id', id).attr('data-code', code);
    var c1 = code.substring(0, 6);
    var c2 = code.substring(6, 12);
    var c3 = code.substring(12, 18);
    var c4 = code.substring(18, 24);
    newitem.find('.palette a').attr('href', '/palette/' + id);
    newitem.find('.c1').css('background-color', '#' + c1).find('span').text('#' + c1).attr('onclick', 'copy("' + c1 + '", this)');
    newitem.find('.c2').css('background-color', '#' + c2).find('span').text('#' + c2).attr('onclick', 'copy("' + c2 + '", this)');
    newitem.find('.c3').css('background-color', '#' + c3).find('span').text('#' + c3).attr('onclick', 'copy("' + c3 + '", this)');
    newitem.find('.c4').css('background-color', '#' + c4).find('span').text('#' + c4).attr('onclick', 'copy("' + c4 + '", this)');
    newitem.find('.like span').text(formatThousands(likes));
    newitem.find('.like').attr('onclick', 'like(' + id + ', "' + code + '")');
    if (localStorage.getItem("colorhunt-" + code) != null) {
        $('.item[data-id=' + id + ']').addClass('liked');
    }
    var timeagoInstance = timeago();
    time = timeagoInstance.format(date);
    if (time == "1 day") {
        time = "Yesterday"
    }
    if (time.indexOf("hours") >= "0") {
        time = "Today"
    }
    newitem.find('.date').text(time);
    newitem.css('animation-delay', order * 50 + "ms");
}

function copy(text, target) {
    setTimeout(function () {
        $('#copied_tip').remove();
    }, 1000);
    $(target).parent('.place').append("<div class='tip' id='copied_tip'>Copied!</div>");
    ga('send', 'event', 'interaction', 'copy');
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input)
    return result;
}

function count_likes() {
    likes_count = 0;
    for (var j = 0, len = localStorage.length; j < len; j++) {
        key = localStorage.key(j);
        id = localStorage.getItem(key);
        if (key.length == 24) {
            localStorage.removeItem(key);
            localStorage.setItem("colorhunt-" + key, id);
        }
        if (key.indexOf("colorhunt") != -1) {
            likes_count++
        }
        if (key.indexOf("colorhunt") != -1 && key.length != 34) {
            localStorage.removeItem(key);
        }
    }
}

function like(id, code) {
    if (localStorage.getItem("colorhunt-" + code) == null) {
        localStorage.setItem("colorhunt-" + code, id);
        $('.item[data-id=' + id + ']').addClass('liked');
        $.post("/act.php", {act: 'addlike', id: id}, function (data, status) {
        });
        var curlikes = $('.item[data-id=' + id + ']:last').find('.like span').text().replace(',', '');
        curlikes++;
        curlikes = formatThousands(curlikes);
        $('.item[data-id=' + id + ']').find('.like span').text(curlikes);
        ga('send', 'event', 'interaction', 'like');
        $('.item[data-id=' + id + ']').find('a.like').attr('onclick', '').css('cursor', 'default');
        place_like(id, "colorhunt-" + code);
        $('.palette[data-id=' + id + ']').css('animation-name', 'liked_palettes');
        if ($('#like_tip').length > 0) {
            $('#like_tip').remove();
            ga('send', 'event', 'interaction', 'like_after_tip');
        }
        $('#likes').append("<div class='tip' id='saved_tip'>Saved!</div>");
    } else {
        localStorage.removeItem(code);
        localStorage.removeItem("colorhunt-" + code);
        $('.item[data-id=' + id + ']').removeClass('liked');
        $('.palette[data-id=' + id + ']').remove();
        var curlikes = $('.item[data-id=' + id + ']:last').find('.like span').text().replace(',', '');
        curlikes--;
        curlikes = formatThousands(curlikes);
        $('.item[data-id=' + id + ']').find('.like span').text(curlikes);
        if (likes_count == 0) {
            $('#likes').hide()
        } else {
            $('#likes').show()
        }
    }
    count_likes();
    $('#likes .title span').html(likes_count);
}

function list_likes() {
    for (var j = 0, len = localStorage.length; j < len; j++) {
        key = localStorage.key(j);
        id = localStorage.getItem(key);
        if (key != null && key.indexOf("colorhunt") != -1) {
            $('#side #main').remove();
            place_like(id, key);
        }
    }
}

function place_like(id, code) {
    $('#side #main').remove();
    var newitem = $('#bank .palette').clone();
    $('#likes .list').prepend(newitem);
    var c1 = code.substring(10, 16);
    var c2 = code.substring(16, 22);
    var c3 = code.substring(22, 28);
    var c4 = code.substring(28, 34);
    newitem.attr('data-id', id);
    newitem.attr('data-code', code);
    newitem.find('a').attr('href', '/palette/' + id);
    newitem.find('.place span').remove();
    newitem.find('.c1').css('background-color', '#' + c1);
    newitem.find('.c2').css('background-color', '#' + c2);
    newitem.find('.c3').css('background-color', '#' + c3);
    newitem.find('.c4').css('background-color', '#' + c4);
    count_likes();
    $('#likes .title span').html(likes_count);
    if (likes_count == 0) {
        $('#likes').hide()
    } else {
        $('#likes').show()
    }
    new_remove_button = $('#bank .remove').clone().appendTo(newitem);
    code = code.replace("colorhunt-", "");
    new_remove_button.attr('onclick', 'like(' + id + ', "' + code + '")');
}

function formatThousands(n, dp) {
    var s = '' + (Math.floor(n)), d = n % 1, i = s.length, r = '';
    while ((i -= 3) > 0) {
        r = ',' + s.substr(i, 3) + r;
    }
    return s.substr(0, i + 3) + r + (d ? '.' + Math.round(d * Math.pow(10, dp || 2)) : '');
}

function select_sort_button(current) {
    $('#header').find('[data-button=' + current + ']').addClass('selected');
}

function select_menu_button(current) {
    $('#header').find('[data-button=' + current + ']').addClass('selected');
}

function like_first_palette_tip() {
    count_likes();
    if (likes_count == 0 && $('.focus').length > 0) {
        $('.focus').append("<div class='tip' id='like_tip'>Like this palette?</div>");
    }
}

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

function focus(focusTags) {
    $('.focus').append('<div class="button light_button save_image" onclick="save_image()"><img src="/img/colorhunt-palettes-icon-save-image.png" width="16px" />Image</div> ')
    $('.focus').append('<div class="button light_button copy_link" onclick="copy_link()"><img src="/img/colorhunt-palettes-icon-link.png" width="16px" />Link</div> ')
    $('.focus').append('<div class="item_tags"></div>')
    focusTags = focusTags.split(" ");
    if (focusTags != "") {
        for (var i = 0; i < focusTags.length; i += 1) {
            $('.item_tags').append('<a href="/palettes/' + focusTags[i].toLowerCase() + '" onclick="ga(\'send\', \'event\',\'interaction\', \'tag_click\');">#' + focusTags[i].toLowerCase() + '</a>');
        }
    }
}

function save_image() {
    id = $('.focus').attr('data-id');
    html2canvas($('.focus .palette').get(0)).then(function (canvas) {
        saveAs(canvas.toDataURL(), '{{ site.name }} Palette ' + id + '.png');
    });
    ga('send', 'event', 'interaction', 'save_image');
}

function copy_link() {
    id = $('.focus').attr('data-id');
    setTimeout(function () {
        $('#copied_tip').remove();
    }, 1000);
    $('.button.copy_link').append("<div class='tip' id='copied_tip'>Copied!</div>");
    ga('send', 'event', 'interaction', 'copy_link');
    var input = document.createElement('input');
    input.setAttribute('value', 'https://colorhunt.co/palette/' + id);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input)
    return result;
}

!function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(root);
        module.exports['default'] = module.exports;
    } else
        root.timeago = factory(root);
}(typeof window !== 'undefined' ? window : this, function () {
    var indexMapEn = 'second_minute_hour_day_week_month_year'.split('_'), indexMapZh = '秒_分钟_小时_天_周_月_年'.split('_'),
        locales = {
            'en': function (number, index) {
                if (index === 0) return ['just now', 'right now'];
                var unit = indexMapEn[parseInt(index / 2)];
                if (number > 1) unit += 's';
                return [number + ' ' + unit, 'in ' + number + ' ' + unit];
            }, 'zh_CN': function (number, index) {
                if (index === 0) return ['刚刚', '片刻后'];
                var unit = indexMapZh[parseInt(index / 2)];
                return [number + unit + '前', number + unit + '后'];
            }
        }, SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12], SEC_ARRAY_LEN = 6, ATTR_DATA_TID = 'data-tid', timers = {};

    function toDate(input) {
        if (input instanceof Date) return input;
        if (!isNaN(input)) return new Date(toInt(input));
        if (/^\d+$/.test(input)) return new Date(toInt(input));
        input = (input || '').trim().replace(/\.\d+/, '').replace(/-/, '/').replace(/-/, '/').replace(/(\d)T(\d)/, '$1 $2').replace(/Z/, ' UTC').replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2');
        return new Date(input);
    }

    function toInt(f) {
        return parseInt(f);
    }

    function formatDiff(diff, locale, defaultLocale) {
        locale = locales[locale] ? locale : (locales[defaultLocale] ? defaultLocale : 'en');
        var i = 0, agoin = diff < 0 ? 1 : 0, total_sec = diff = Math.abs(diff);
        for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY_LEN; i++) {
            diff /= SEC_ARRAY[i];
        }
        diff = toInt(diff);
        i *= 2;
        if (diff > (i === 0 ? 9 : 1)) i += 1;
        return locales[locale](diff, i, total_sec)[agoin].replace('%s', diff);
    }

    function diffSec(date, nowDate) {
        nowDate = nowDate ? toDate(nowDate) : new Date();
        return (nowDate - toDate(date)) / 1000;
    }

    function nextInterval(diff) {
        var rst = 1, i = 0, d = Math.abs(diff);
        for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY_LEN; i++) {
            diff /= SEC_ARRAY[i];
            rst *= SEC_ARRAY[i];
        }
        d = d % rst;
        d = d ? rst - d : rst;
        return Math.ceil(d);
    }

    function getDateAttr(node) {
        return getAttr(node, 'data-timeago') || getAttr(node, 'datetime');
    }

    function getAttr(node, name) {
        if (node.getAttribute) return node.getAttribute(name);
        if (node.attr) return node.attr(name);
    }

    function setTidAttr(node, val) {
        if (node.setAttribute) return node.setAttribute(ATTR_DATA_TID, val);
        if (node.attr) return node.attr(ATTR_DATA_TID, val);
    }

    function Timeago(nowDate, defaultLocale) {
        this.nowDate = nowDate;
        this.defaultLocale = defaultLocale || 'en';
    }

    Timeago.prototype.doRender = function (node, date, locale) {
        var diff = diffSec(date, this.nowDate), self = this, tid;
        node.innerHTML = formatDiff(diff, locale, this.defaultLocale);
        timers[tid = setTimeout(function () {
            self.doRender(node, date, locale);
            delete timers[tid];
        }, Math.min(nextInterval(diff) * 1000, 0x7FFFFFFF))] = 0;
        setTidAttr(node, tid);
    };
    Timeago.prototype.format = function (date, locale) {
        return formatDiff(diffSec(date, this.nowDate), locale, this.defaultLocale);
    };
    Timeago.prototype.render = function (nodes, locale) {
        if (nodes.length === undefined) nodes = [nodes];
        for (var i = 0, len = nodes.length; i < len; i++) {
            this.doRender(nodes[i], getDateAttr(nodes[i]), locale);
        }
    };
    Timeago.prototype.setLocale = function (locale) {
        this.defaultLocale = locale;
    };

    function timeagoFactory(nowDate, defaultLocale) {
        return new Timeago(nowDate, defaultLocale);
    }

    timeagoFactory.register = function (locale, localeFunc) {
        locales[locale] = localeFunc;
    };
    timeagoFactory.cancel = function (node) {
        var tid;
        if (node) {
            tid = getAttr(node, ATTR_DATA_TID);
            if (tid) {
                clearTimeout(tid);
                delete timers[tid];
            }
        } else {
            for (tid in timers) clearTimeout(tid);
            timers = {};
        }
    };
    return timeagoFactory;
});