var r = true;
let recordButton = document.getElementById("vbtn");
let recordStr = document.getElementById("recordStore");

recordButton.onclick = function() {
    console.log("shshs");
    if (r){
        RecordStore();
    }else {
        recordButton.classList.add("rcdButton");
        recordButton.classList.remove("vbtnActive");
        recordButton.classList.add("recStore");
        recordStr.classList.remove("recStoreOpen");
        r = true;
    }
    }
function RecordStore(){
    recordButton.classList.remove("rcdButton");
    recordButton.classList.add("vbtnActive");
    recordButton.classList.remove("recStore");
    recordStr.classList.add("recStoreOpen");
    r = false;
}