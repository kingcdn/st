
        // 就一个这个方法，直接调用就好
        function replaceImages(selector){
            if(!selector)selector = '.ximg';
            // 最大同时下载3个
            var maxDownload = 3;
            // 需要初始化的图片
            if(!window.__tasks)window.__tasks = [];
            // 正在初始化的图片
            if(!window.__runings)window.__runings = [];

            // 放入缓存中等待加载
            var images = document.querySelectorAll(selector);
            for(var i=0;i<images.length;i++){
                var img = images[i];
                if(img.done)continue;
                var url = img.getAttribute('img-data');
                if(!url)continue;
                if(window.__tasks.indexOf(url) !== -1)continue;
                if(window.__runings.indexOf(url) !== -1)continue;
                window.__tasks.push(url);
            }

            function go(){
                while(window.__runings.length < maxDownload && window.__tasks.length > 0){
                    var url = window.__tasks.splice(0, 1)[0];
                    window.__runings.push(url);
                    run(url);
                }
            }

            function done(img){
                var ind = window.__runings.indexOf(img);
                if(ind !== -1)window.__runings.splice(ind, 1);
                go();
            }

            function run(url){
                getSrcByUrl(url, function(err, data){
                    console.log('发起请求', url)
                    var images = document.querySelectorAll(selector);
                    for(var i=0;i<images.length;i++){
                        var img = images[i];
                        var tmp = img.getAttribute('img-data');
                        if(!tmp)continue;

                        if(tmp === url){
                            img.style.backgroundImage = 'url('+data+')';
                            img.done = true;
                        }
                    }

                    done(url);
                });

                setTimeout(function(){
                    done(url);
                }, 10000);
            }

            function ajax(url, cb){
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'arraybuffer';
                xhr.open('GET', url);
                // xhr.setRequestHeader('Cache-Control', 'private');
                // xhr.setRequestHeader('Cache-Control', 'max-age=999999999');
                // xhr.setRequestHeader('Cache-Control', 'max-stale');
                xhr.onload = function(resp){
                    cb(null, resp.target.response);
                }
                xhr.onerror = function(){
                    cb(new Error('现在图片失败'));
                }
                xhr.send(null);
            }

            function convert(data) {
                var arrInt8 = new Uint8Array(data)
                for (var index = 0; index < arrInt8.length; index++) {
                    var item = arrInt8[index]
                    if (index < 9) {
                        item = item ^ 0x12
                    }
                    arrInt8[index] = item
                }
                var blob = new Blob([arrInt8], { type: 'image/jpeg' })
                return blob
            }

            function getSrcByUrl(url, cb){
                ajax(url, function(err, buffer){
                    if(err){
                        console.log(err);
                        return;
                    }

                    var d = convert(buffer);
                    var fr = new FileReader();
                    fr.readAsDataURL(d);
                    fr.addEventListener('load', function(event){
                        cb(null, event.target.result);
                    });

                    fr.addEventListener('error', function(event){
                        console.log('生成图片失败');
                        cb(new Error('生成图片失败'))
                    });
                });
            }


            go();
        }