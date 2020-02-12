import { disablePageScroll, enablePageScroll } from '../src/index';

const disableButton: HTMLInputElement = document.querySelector('#disable');
const enableButton: HTMLInputElement = document.querySelector('#enable');

disableButton.onclick = () => {
    disablePageScroll();
    disableButton.disabled = true;
    enableButton.disabled = false;
};

enableButton.onclick = () => {
    enablePageScroll();
    disableButton.disabled = false;
    enableButton.disabled = true;
};
