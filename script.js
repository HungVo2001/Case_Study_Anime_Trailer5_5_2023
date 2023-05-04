

let arrVideo = [
    {
        title: "Movie Akaza",
        sumary: "Solo Leveling Is A Modern Fantasy Story",
        videoUrl: "video/demonslayer2.mp4"
    },
    {
        title: "Kimetusu no yaiba",
        sumary: "Solo Leveling Is A Modern Fantasy Story",
        videoUrl: "video/Kimetsu no yaiba.mp4"
    },
    {
        title: "Solo Loveling",
        sumary: "Solo Leveling Is A Modern Fantasy Story",
        videoUrl: "video/videoplayback2.mp4"
    },
    {
        title: "Akaza movie",
        sumary: "Solo Leveling Is A Modern Fantasy Story",
        videoUrl: "video/jujustukaisen.mp4"
    },
    {
        title: "Black Clover",
        sumary: "Solo Leveling Is A Modern Fantasy Story",
        videoUrl: "video/demon.mp4"
    },
    {
        title: "Fate Heaven's Feel",
        sumary: "Solo Leveling Is A Modern Fantasy Story",
        videoUrl: "video/sabel alter.mp4"
    }

];
let videoElem = document.getElementById('videos');

let arrVideoLength = arrVideo.length;

let str = '';
let active = 'active';

for (let i = 0; i < arrVideoLength; i++) {
    str += drawVideo(arrVideo[i].title, arrVideo[i].sumary, arrVideo[i].videoUrl, active);
    active = '';
}

videoElem.innerHTML = str;






function drawVideo(title, sumary, videoUrl, active) {
    return `
        <div class="slide-container ${active}">
            <div class="slide">
                <div class="content">
                    <h3>${title}</h3>
                    <p>${sumary}</p>
                    <a href="#" class="btn">Next movie</a>
                </div>
                <video src="${videoUrl}" muted autoplay loop></video>
                
            </div>
        </div>
    `;
}

var vid = document.getElementById("videos"); 

function playVid() { 
  vid.play(); 
}

// function renderVideos (obj) {
//     return `
//     <div class="slide-container ${obj.active}">
//     <div class="slide">
//         <div class="content">
//             <h3>${obj.title}</h3>
//             <p>${obj.sumary}</p>
//             <a href="#" class="btn">Next movie</a>
//         </div>
//         <video src="${obj.videoUrl}" muted autoplay loop></video>
//         <button onclick="removeVideos(${obj.title})">
//              Delete
//          </button>
//     </div>
//     </div> 
//     `
// }
// function removeVideos(title) {
//     arrVideo = arrVideo.filter(item => item.title != title);
//     let elem = document.querySelector('.slide-container');
//     elem.innerHTML = "";
//     drawVideo();

// }
// function drawVideo() {
//     let elem = document.querySelector('.slide-container');
//     arrVideo.forEach (item => {
//         let str = renderVideos(item);
//         elem.innerHTML += str;
//     })
// }
// drawVideo();

