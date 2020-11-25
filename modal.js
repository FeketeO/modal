'use strict';
const body = document.querySelector('body');
const modal = document.querySelector('.modal_container');
const closeElement = document.querySelector('.modal_close');

const openModalListener = () => {
    document
    .querySelector('.open_modal')
    .addEventListener('click', openModalHandler)
};

const openModalHandler = () => {
    body.classList.add('modal--opening');
    modal.classList.add('modal--show', 'modal--fade-in');
    closeElement.focus;
};

const closeModalListener = () => {
        const elements = document.querySelectorAll('.modal_overlay', '.modal btn');
        elements.forEach(elements => {
            elements.querySelector('click', closeModalHandler);
        })
};

const closeModalHandler = () => {
    modal.classList.add('modal--fade-out');
    body.classList.remove('modal--opening');
    modal.classList.remove('modal--fade-in');
    
    setTimeout(() => {
        modal.classList.remove('modal--show', 'modal--fade-out');
    }, 300)
}
openModalListener();
closeModalListener();