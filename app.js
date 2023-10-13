const wrapper = document.querySelector(".wrapper");
const musicImg = wrapper.querySelector("img");
const musicName = wrapper.querySelector(".name");
const musicArtist = wrapper.querySelector(".artist");
const playPauseBtn = wrapper.querySelector(".play-pause");
const prevBtn = wrapper.querySelector("#prev");
const nextBtn = wrapper.querySelector("#next");
const mainAudio = wrapper.querySelector("#main-audio");
const progressArea = wrapper.querySelector(".progress-area");
const progressBar = progressArea.querySelector(".progress-bar");
const musicCurrenttime = wrapper.querySelector(".current-time");
const musicDuration = wrapper.querySelector(".max-duration");

let musicIndex = Math.floor(Math.random() * allMusic.length);
let isMusicPaused = true;

function loadMusic(index) {
    musicName.innerText = allMusic[index].name;
    musicArtist.innerText = allMusic[index].artist;
    musicImg.src = `assets/images/${allMusic[index].img}.jpg`;
    mainAudio.src = `assets/songs/${allMusic[index].src}.mp3`;
}

function playMusic() {
    wrapper.classList.add("paused");
    musicImg.classList.add('rotate');
    playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    mainAudio.play();
}

function pauseMusic() {
    wrapper.classList.remove("paused");
    musicImg.classList.remove('rotate'); 
    playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    mainAudio.pause();
}

function preMusic() {
    musicIndex--;
    musicIndex = (musicIndex < 0) ? allMusic.length - 1 : musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function nextMusic() {
    musicIndex++;
    musicIndex = (musicIndex >= allMusic.length) ? 0 : musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

playPauseBtn.addEventListener("click", () => {
    isMusicPaused ? playMusic() : pauseMusic();
    isMusicPaused = !isMusicPaused;
});

prevBtn.addEventListener("click", preMusic);

nextBtn.addEventListener("click", nextMusic);

mainAudio.addEventListener("timeupdate", () => {
    const currentTime = mainAudio.currentTime;
    const duration = mainAudio.duration;
    const progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    musicDuration.textContent = formatTime(duration);
    musicCurrenttime.textContent = formatTime(currentTime);
});

progressArea.addEventListener("click", (e) => {
    const progressWidth = progressArea.clientWidth;
    const clickedOffsetX = e.offsetX;
    const songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
});

mainAudio.addEventListener("ended", nextMusic);

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${(seconds < 10) ? '0' : ''}${seconds}`;
}

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});







// const wrapper = document.querySelector(".wrapper"),
//     musicImg = wrapper.querySelector("img"),
//     musicName = wrapper.querySelector(".name"),
//     musicArtist = wrapper.querySelector(".artist"),
//     playPauseBtn = wrapper.querySelector(".play-pause"),
//     prevBtn = wrapper.querySelector("#prev"),
//     nextBtn = wrapper.querySelector("#next"),
//     mainAudio = wrapper.querySelector("#main-audio"),
//     progressArea = wrapper.querySelector(".progress-area"),
//     progressBar = progressArea.querySelector(".progress-bar");


// let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
// isMusicPaused = true;


// window.addEventListener("load", () => {
//     loadMusic(musicIndex);
// });

// function loadMusic(indexNumb){
//     musicName.innerText = allMusic[indexNumb - 1].name;
//     musicArtist.innerText = allMusic[indexNumb - 1].artist;
//     musicImg.src = `assets/images/${allMusic[indexNumb - 1].src}.jpg`;
//     mainAudio.src = `assets/songs/${allMusic[indexNumb -1].src}.mp3`;
// }

// function playMusic (){
//     wrapper.classList.add("paused");
//     musicImg.classList.add('rotate');
//     playPauseBtn.innerHTML = `<i class= "fa-solid fa-pause"></i>`;
//     mainAudio.play();
// }
// function pauseMusic() {
//     wrapper.classList.remove("paused");
//     musicImg.classList.remove('rotate');
//     playPauseBtn.innerHTML = `<i class= "fa-solid fa-play"></i>`;
//     mainAudio.pause();
// }

// function preMusic() {
//     musicIndex--;
//     musicIndex = musicIndex < 0 ? allMusic.length - 1 : musicIndex;
//     loadMusic(musicIndex);
//     playMusic();
// }

// function nextMusic() {
//     musicIndex++;
//     musicIndex = musicIndex >= allMusic.length ? 0 : musicIndex;
//     loadMusic(musicIndex);
//     playMusic();
// }

// playPauseBtn.addEventListener("click", () => {
//     const ismusicplay = wrapper.classList.contains("paused");
//     ismusicplay ? pauseMusic() : playMusic();
// })

// prevBtn.addEventListener("click",() => {
//     preMusic();
// } )

// nextBtn.addEventListener("click",() => {
//     nextMusic();
// } )

// mainAudio.addEventListener("timeupdate", (e) => {
//     const currentTime = e.target.currentTime;
//     const duration = e.target.duration;
//     let progressWidth = (currentTime / duration)* 100;
//     progressBar.computedStyleMap.width = `${progressWidth}%`;

//     let musicCurrenttime = wrapper.querySelector(".current-time"),
//     musicDuration = wrapper.querySelector(".max-duration");
//     mainAudio.addEventListener("loadeddata", () => {
//         let mainAdDuration = mainAudio.duration;
//         let totalMin = Math.floor(mainAdDuration/60);
//         let totalSec = Math.floor(mainAdDuration%60);
//         if(totalSec < 10){
//             totalSec = `0${totalSec}`;
           
//         }
//         musicDuration.innerText = `${totalMin}:${totalSec}`;
//     });
//     let currentMin = Math.floor(currentTime /60);
//     let currentSec = Math.floor(currentTime %60);
//     if(currentSec <10 ){
//         currentSec = `0${currentSec}`;
//     }
//     musicCurrenttime.innerText = `${currentMin}:${currentSec}`;
// })


// progressArea.addEventListener("click", (e) =>{
//     let progressWidth = progressArea.clientWidth;
//     let clickedOffsetX = e.offsetX;
//     let songDuration = mainAudio.duration;

//     mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
//     playMusic();
// });


// mainAudio.addEventListener("ended", () => {
//     nextMusic();
// })