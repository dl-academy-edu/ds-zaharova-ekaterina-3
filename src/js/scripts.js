let header = document.querySelector('.header');
let headerMobile = document.querySelector('.header-mobile');
let headerOpenBtn = document.querySelector('.menu-btn');
let headerOverlay = document.querySelector('.header-overlay');
let headerCloseBtn = document.querySelector ('.header-mobile__close-button');
let registerModal = document.querySelector('.register-wrapper');
let registerOpenBtn = document.querySelector('.registerBtnOpen');
let registerMobileOpenBtn = document.querySelector('.mobileRegisterBtnOpen');
let registerOverlay = document.querySelector('.register-overlay');
let registerCloseBtn = document.querySelector ('.register-wrapper__close-btn');
let signOpenBtn = document.querySelector('.signBtnOpen');
let signMobileOpenBtn = document.querySelector('.mobileSignBtnOpen');
let signModal = document.querySelector('.sign-wrapper');
let signOverlay = document.querySelector('.sign-overlay');
let signCloseBtn = document.querySelector ('.sign-wrapper__close-btn');
let messageOpenBtn = document.querySelector('.modalOpenBtn');
let messageModal = document.querySelector('.message-wrapper');
let messageOverlay = document.querySelector('.message-overlay');
let messageCloseBtn = document.querySelector ('.message-wrapper__close-btn');

function headerOpen() {
    header.classList.add('header-none');
    headerMobile.classList.add('open');
    headerOverlay.classList.add('open');
    window.addEventListener('keydown', function(evt){
        if (evt.code === "Escape") {
            header.classList.remove('header-none');
            headerMobile.classList.remove('open');
            headerOverlay.classList.remove('open');
        }
    })
}
function headerClose() {
    header.classList.remove('header-none');
    headerMobile.classList.remove('open');
    headerOverlay.classList.remove('open');
}
function registerOpen() {
    registerModal.classList.add('open');
    registerOverlay.classList.add('open');
    headerMobile.classList.remove('open');
    headerOverlay.classList.remove('open');
    window.addEventListener('keydown', function(evt){
        if (evt.code === "Escape") {
            registerModal.classList.remove('open');
            registerOverlay.classList.remove('open');
        }
    })
}
function registerClose() {
    registerModal.classList.remove('open');
    registerOverlay.classList.remove('open');
}
function signOpen() {
    signModal.classList.add('open');
    signOverlay.classList.add('open');
    headerMobile.classList.remove('open');
    headerOverlay.classList.remove('open');
    window.addEventListener('keydown', function(evt){
        if (evt.code === "Escape") {
            signModal.classList.remove('open');
            signOverlay.classList.remove('open');
        }
    })
}
function signClose() {
    signModal.classList.remove('open');
    signOverlay.classList.remove('open');
}
function messageOpen() {
    messageModal.classList.add('open');
    messageOverlay.classList.add('open');
    window.addEventListener('keydown', function(evt){
        if (evt.code === "Escape") {
            messageModal.classList.remove('open');
            messageOverlay.classList.remove('open');
        }
    })
}
function messageClose() {
    messageModal.classList.remove('open');
    messageOverlay.classList.remove('open');
} 
headerOpenBtn.addEventListener ('click', function(){
    headerOpen() 
})
headerCloseBtn.addEventListener('click', function(){
    headerClose()
})
registerOpenBtn.addEventListener ('click', function(){
    registerOpen()
})
registerMobileOpenBtn.addEventListener ('click', function(){
    registerOpen()
})
registerCloseBtn.addEventListener('click', function(){
    registerClose()
})

signOpenBtn.addEventListener ('click', function(){
    signOpen() 
})
signCloseBtn.addEventListener('click', function(){
    signClose()
})
messageOpenBtn.addEventListener ('click', function(){
    messageOpen() 
})
messageCloseBtn.addEventListener('click', function(){
    messageClose()
})
