// retrieve (possibly broken) mp3 url
var element = document.getElementById("podPressPlayerSpace_1")
if(typeof(element) != 'undefined' && element != null) {
} else {
  element = document.getElementById("podPressPlayerSpace_2")
}
const oldMp3Url = element.childNodes[0].src.match("(?<=\/)[^\/\?#]+(?=[^\/]*$)").toString()
const year = oldMp3Url.split("-")[1]
const fixedMp3Url = 'https://media.bitsundso.de/bits/' + year + '/' + oldMp3Url

// remove podpress player
const podPressPlayer = document.getElementsByClassName("podPress_content")[0]
podPressPlayer.remove()

// add plain html5 audio player with fixed mp3 link
const myDiv = document.createElement("div");
myDiv.innerHTML = "<audio style='width:100%;height:50px' controls src='" + fixedMp3Url + "'></audio><br><a href='" + fixedMp3Url + "' target='new'>Download</a>";
const container = document.getElementsByClassName('contentads')[0];
// remove ads gif from css
const contentads = document.querySelector(".contentads");
contentads.classList.remove('contentads');
container.appendChild(myDiv)
