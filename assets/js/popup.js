// Video popup
let play = document.querySelector('.pulse-button');
let video = document.querySelector('.video-frame');
let close = document.querySelector('.close');
let videoClip = document.querySelector('.video');
let vid = document.querySelector('.video');
let hero = document.querySelector('.blaze-hero h1');
let heroPara = document.querySelector('.blaze-hero p');
let heroPara2 = document.querySelector('.blaze-p');
var pulseBtn = document.querySelector('.pulse-area');

play.onclick = function () {
    play.classList.add('play-active');
    video.classList.add('video-active');
    videoClip.play();
    videoClip.currentTime = 0;
    hero.style.opacity = "0";
    heroPara.style.opacity = "0";
    pulseBtn.style.opacity = "0";
    // document.body.style.top = `-${window.scrollY}px`;
    // document.body.style.position = 'fixed';
}

close.onclick = function () {
    play.classList.remove('play-active');
    video.classList.remove('video-active');
    videoClip.pause();
    hero.style.opacity = "1";
    heroPara.style.opacity = "1";
    pulseBtn.style.opacity = "1";

    // const scrollY = document.body.style.top;
    // document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
