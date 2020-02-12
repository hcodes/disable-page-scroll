'use strict';

var blockName = 'disable-page-scroll';
var blockNameIOS = 'disable-page-scroll_ios';
var isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
var marginLeft = '';
var marginTop = '';
var scrollX = 0;
var scrollY = 0;
function disablePageScroll() {
    var body = document.body;
    body.classList.add(blockName);
    if (isIOS) {
        scrollX = window.scrollX;
        scrollY = window.scrollY;
        marginLeft = body.style.marginLeft;
        marginTop = body.style.marginTop;
        body.style.marginLeft = "-" + scrollX + "px";
        body.style.marginTop = "-" + scrollY + "px";
        body.classList.add(blockNameIOS);
    }
}
function enablePageScroll() {
    var body = document.body;
    body.classList.remove(blockName);
    if (isIOS) {
        body.classList.remove(blockNameIOS);
        body.style.marginLeft = marginLeft;
        body.style.marginTop = marginTop;
        window.scrollTo(scrollX, scrollY);
    }
}

var disableButton = document.querySelector('#disable');
var enableButton = document.querySelector('#enable');
disableButton.onclick = function () {
    disablePageScroll();
    disableButton.disabled = true;
    enableButton.disabled = false;
};
enableButton.onclick = function () {
    enablePageScroll();
    disableButton.disabled = false;
    enableButton.disabled = true;
};
