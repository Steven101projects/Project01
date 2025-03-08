var r = true;
let recordButton = document.getElementById("vbtn");
let recordStr = document.getElementById("recordStore");
let thrcds = document.getElementById("records");
let maxScroll;

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
}
pause.onclick = function(){
    pause.style.display = "none";
    play.style.display  = "block";
}
let slider = document.getElementById("slider");

slider.addEventListener("input", function(){
 slider.style.background = `linear-gradient(to right, #000000 ${slider.value}%, #ffffff 0%)`;  
})