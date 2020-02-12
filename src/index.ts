const blockName = 'disable-page-scroll';
const blockNameIOS = 'disable-page-scroll_ios';

const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

let marginLeft = '';
let marginTop = '';

let scrollX = 0;
let scrollY = 0;

export function disablePageScroll() {
    const body = document.body;
    body.classList.add(blockName);

    if (isIOS) {
        scrollX = window.scrollX;
        scrollY = window.scrollY;

        marginLeft = body.style.marginLeft;
        marginTop = body.style.marginTop;

        body.style.marginLeft = `-${scrollX}px`;
        body.style.marginTop = `-${scrollY}px`;

        body.classList.add(blockNameIOS);
    }
}

export function enablePageScroll() {
    const body = document.body;
    body.classList.remove(blockName);

    if (isIOS) {
        body.classList.remove(blockNameIOS);

        body.style.marginLeft = marginLeft;
        body.style.marginTop = marginTop;

        window.scrollTo(scrollX, scrollY);
    }
}
