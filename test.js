(function(){
    "use strict";

    var logElement = document.getElementById('log-content');
    function log(content) {
        logElement.innerHTML += '<p>' + content + '</p>';
    }
    function clear() {
        logElement.innerHTML = '';
    }
    var logBtn = document.getElementById('clear');
    logBtn.onclick = clear;

    var spans = document.getElementsByTagName("span");

    function cal() {
        for(var i = 0; i < spans.length; i += 1) {
            var c = spans[i].getAttribute('data-code');
            var v = spans[i].innerHTML;
            var n = eval(c);

            if (v !== '' && v !== n) {
                log(c + ': chanaged!');
            };

            spans[i].innerHTML = n;
        }
    }

    window.onresize = function () {
        log('resized');
        cal();
    };

    cal();
}());