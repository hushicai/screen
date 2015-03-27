(function(){
    "use strict";

    var logElement = document.getElementById('log');
    function log(content) {
        logElement.innerHTML += '<p>' + content + '</p>';
    }
    function clear() {
        logElement.innerHTML = '';
    }

    var spans = document.getElementsByTagName("span");
    function cal() {
        for(var i = 0; i < spans.length; i += 1) {
            var c = spans[i].getAttribute('data-code');
            var v = spans[i].innerHTML;
            var n = eval(c);

            if (v !== '' && parseInt(v, 10) !== n) {
                log(c + ' chanaged! old: ' + v + ', new: ' + n);
            };

            spans[i].innerHTML = n;
        }
    }

    window.onresize = function () {
        log('resized');
        // cal();
    };

    cal();

    var input = document.getElementById('input');
    input.onfocus = function () {
        clear();
        cal();
    };
}());