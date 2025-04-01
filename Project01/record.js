var r = true;
var signal = 0;
let recordButton = document.getElementById("vbtn");
let recordStr = document.getElementById("recordStore");
let thrcds = document.getElementById("records");
let maxScroll;

let audio = document.getElementById("audio");

let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");

let home = document.getElementById("home");

home.onclick = function() {
    document.getElementById("rcdPlayer").style.display = "block";
    signal = 0;
}

recordButton.onclick = function() {
    console.log("shshs");
    if (r){
        RecordStore();
    }else {
        recordButton.classList.add("rcdButton");
        recordButton.classList.remove("vbtnActive");
        recordButton.classList.add("recStore");
        recordStr.classList.remove("recStoreOpen");
        StoreContents();
        r = true;
    }
    }
function RecordStore(){
    recordButton.classList.remove("rcdButton");
    recordButton.classList.add("vbtnActive");
    recordButton.classList.remove("recStore");
    recordStr.classList.add("recStoreOpen");
    StoreContents();
    r = false;
    maxScroll = 800;
    window.scrollTo(0, maxScroll);  // Prevent scrolling past the limit
}
window.addEventListener('scroll', function() {
    if(r){
        maxScroll = 150;  // Limit the scroll position to 1000px
        if (window.scrollY > maxScroll) {
            window.scrollTo(0, maxScroll);  // Prevent scrolling past the limit
        }
    }
});

function StoreContents() {
    if(r){
        thrcds.style.whiteSpace = "wrap";
        thrcds.style.paddingLeft = "20px";
    }
    else{
        thrcds.style.whiteSpace = "nowrap";
    thrcds.style.paddingLeft = "0px";
    }
}

let play = document.getElementById("play");
let pause = document.getElementById("pause");

play.onclick = function(){
    pause.style.display = "block";
    play.style.display  = "none";
    document.getElementById("audio").play();
}
pause.onclick = function(){
    pause.style.display = "none";
    play.style.display  = "block";
    document.getElementById("audio").pause();
}
let slider = document.getElementById("slider");

slider.addEventListener("input", function(){
 slider.style.background = `linear-gradient(to right, #000000 ${slider.value}%, #ffffff 0%)`; 
 console.log(slider.value);
 audio.currentTime = (slider.value / 100) * audio.duration;
 console.log(audio.currentTime);
 audio.pause();
})

audio.addEventListener('loadedmetadata', () => {
    slider.max = audio.duration;
    console.log(audio);
    updateTimeDisplay();
  });

audio.addEventListener('timeupdate', () => {
    slider.value = (audio.currentTime / audio.duration) * 100;
    slider.style.background = `linear-gradient(to right, #000000 ${slider.value}%, #ffffff 0%)`; 
    updateTimeDisplay()
  });


  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  function updateTimeDisplay() {
    const current = formatTime(audio.currentTime);
    const duration = audio.duration ? formatTime(audio.duration) : '00:00';
    startTime.textContent = `${current}`;
    endTime.textContent = `${duration}`;
  }

let addTrackbtn = document.getElementById("atBtn");
let hoverOpt = document.getElementById("hoverText");

addTrackbtn.addEventListener("click", function(){
    document.getElementById("rcdPlayer").style.display = "none";
    signal = 1;
})

addTrackbtn.addEventListener('pointerenter', function(){
    console.log("clicked");
    document.getElementById("rcdPlayer").style.display = "none";
    hoverOpt.textContent = "Add a track to your turntable?";
})

addTrackbtn.addEventListener('pointerleave', function(){
    console.log("clicked");
    if(signal === 0){
        document.getElementById("rcdPlayer").style.display = "block";
    } else{
        document.getElementById("rcdPlayer").style.display = "none";
    }
    hoverOpt.textContent = "";
})
