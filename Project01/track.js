
var tracks = [];
//SECTION: ADD TRACKER
class Track {
    constructor (title, coverArt,year, artist, source){
    this.title = title;
    this.coverArt = coverArt;
    this.source = source;
    this.year = year;
    this.artist = artist;
    }
}

home.onclick = function (){
    InitProject01();
};

function Saver(){
        const jsonStr = JSON.stringify(tracks, null, 2);
        console.log(jsonStr);
        localStorage.setItem('records', JSON.stringify(tracks));     
}

function InitProject01(){
    const storedData = localStorage.getItem('records');
    tracks = JSON.parse(storedData);
    console.log(tracks);
    for(let track of tracks){
        PlaceTrack(track);
    }
}

document.getElementById("upload").addEventListener("click", function (e){
    e.preventDefault();
    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value;
    let artist = document.getElementById("artist").value;
    let coverImg = document.getElementById("image-input").files[0].name;
    let source = document.getElementById("audio-input").files[0].name;
    let track = new Track(title, coverImg, year, artist, source);   
    tracks.push(track);
    PlaceTrack(track);
    console.log(tracks);
    Saver();
})

document.getElementById("audio-input").addEventListener("change", function(){
    const file = this.files[0];
    document.getElementById("audioInp").textContent = file.name;
})

document.getElementById("image-input").addEventListener("change", function(){
    const file = this.files[0];
    document.getElementById("albumCover").style.backgroundImage = `url(` + `${file.name}` + `)`;
    document.getElementById("imgInp").textContent = "";
    console.log(file);
})
   
function PlaceTrack(track){
 let cassette = document.createElement("img");
 cassette.classList.add("rd");
 cassette.setAttribute("draggable", "true");
 cassette.src = `${track.coverArt}`;
 cassette.alt = "track";
 document.getElementById("records").appendChild(cassette);
}
document.getElementById("vinyl").addEventListener("dragover", function (e) {
    e.preventDefault(); // Allow the drop // Indicate that the drop area is active
  });
  
document.getElementById("vinyl").addEventListener("drop", function(e){
    const droppedId = e.dataTransfer.getData("text/plain");
    const fileName = droppedId.substring(droppedId.lastIndexOf('/') + 1);
    console.log(fileName);

    for(let track of tracks){
        if(fileName === track.coverArt){
            document.getElementById("vinyl").style.backgroundImage = `url(` + `${droppedId}` + `)`;
            document.getElementById("audio").src = track.source;
            document.getElementById("songTitle").textContent = track.title;
            document.getElementById("albumTitle").textContent = track.title;
            document.getElementById("albumYear").textContent = `Year: ${track.year}`;
            document.getElementById("albumArtist").textContent = `Artist: ${track.artist}`;
            break;
        }
    }
})
