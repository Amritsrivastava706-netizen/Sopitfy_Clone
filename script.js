const songs = [
  { title: "Let Me Love You", artist: "DJ Snake", file: "song/1.mp3", duration: "3:34", emoji: "💚" },
  { title: "Closer", artist: "The Chainsmokers", file: "song/2.mp3", duration: "4:05", emoji: "🔥" },
  { title: "Faded", artist: "Alan Walker", file: "song/3.mp3", duration: "3:32", emoji: "🌊" },
  { title: "Spectre", artist: "Alan Walker", file: "song/4.mp3", duration: "3:46", emoji: "⚡" },
  { title: "Alone", artist: "Alan Walker", file: "song/5.mp3", duration: "2:41", emoji: "🎶" },
  { title: "Darkside", artist: "Alan Walker", file: "song/6.mp3", duration: "3:46", emoji: "🌑" },
  { title: "On My Way", artist: "Alan Walker", file: "song/7.mp3", duration: "3:48", emoji: "🛣️" },
];

let songIndex = 0, isPlaying = false, isShuffle = false, isRepeat = false;
const audio = new Audio();

const masterPlay = document.getElementById('masterPlay');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

function loadSong(i){
  const s = songs[i];
  audio.src = s.file;
}

function playSong(){
  audio.play();
  isPlaying = true;
  masterPlay.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong(){
  audio.pause();
  isPlaying = false;
  masterPlay.innerHTML = '<i class="fas fa-play"></i>';
}

masterPlay.onclick = ()=>{
  if(isPlaying) pauseSong();
  else {
    if(!audio.src) loadSong(songIndex);
    playSong();
  }
};

nextBtn.onclick = ()=>{
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  playSong();
};

prevBtn.onclick = ()=>{
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  playSong();
};