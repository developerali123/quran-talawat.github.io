var play = document.getElementById("play");
var stop = document.getElementById("stop");
var img = document.getElementById("img");
var vol = document.getElementById("volume");
var title = document.getElementById("title");
var audio = document.createElement("audio");
var time = document.getElementById("time");
var song = new Audio();
var isstop = true;
var currentsong = 0;
let curtime = 0;
var playlist = [
  {
    name: "Surah Fatiha",
    src: "https://www.humariweb.com/quran/abd-ar/01-(hamariweb.com).mp3",
  },
  {
    name: "Surah Baqarah",
    src: "https://www.humariweb.com/quran/abd-ar/02-(hamariweb.com).mp3",
  },
  {
    name: "Surah Al Imran",
    src: "https://www.humariweb.com/quran/abd-ar/03-(hamariweb.com).mp3",
  },
  {
    name: "Surah Nisa",
    src: "https://www.humariweb.com/quran/abd-ar/04-(hamariweb.com).mp3",
  },
  {
    name: "Surah Maidah",
    src: "https://www.humariweb.com/quran/abd-ar/05-(hamariweb.com).mp3",
  },
  {
    name: "Surah Anam",
    src: "https://www.humariweb.com/quran/abd-ar/06-(hamariweb.com).mp3",
  },
  {
    name: "Surah Araf",
    src: "https://www.humariweb.com/quran/abd-ar/07-(hamariweb.com).mp3",
  },
  {
    name: "Surah Anfal",
    src: "https://www.humariweb.com/quran/abd-ar/08-(hamariweb.com).mp3",
  },
  {
    name: "Surah Taubah",
    src: "https://www.humariweb.com/quran/abd-ar/09-(hamariweb.com).mp3",
  },
  {
    name: "Surah Yunus",
    src: "https://www.humariweb.com/quran/abd-ar/10-(hamariweb.com).mp3",
  },
  {
    name: "Surah Hud",
    src: "https://www.humariweb.com/quran/abd-ar/11-(hamariweb.com).mp3",
  },
  {
    name: "Surah Yusuf",
    src: "https://www.humariweb.com/quran/abd-ar/12-(hamariweb.com).mp3",
  },
  {
    name: "Surah Ar Rad",
    src: "https://www.humariweb.com/quran/abd-ar/13-(hamariweb.com).mp3",
  },
  {
    name: "Surah Ibrahim",
    src: "https://www.humariweb.com/quran/abd-ar/14-(hamariweb.com).mp3",
  },
  {
    name: "Surah Hijr",
    src: "https://www.humariweb.com/quran/abd-ar/15-(hamariweb.com).mp3",
  },
  {
    name: "Surah Nahl",
    src: "https://www.humariweb.com/quran/abd-ar/16-(hamariweb.com).mp3",
  },
  {
    name: "Surah Isra",
    src: "https://www.humariweb.com/quran/abd-ar/17-(hamariweb.com).mp3",
  },
  {
    name: "Surah Kahf",
    src: "https://www.humariweb.com/quran/abd-ar/18-(hamariweb.com).mp3",
  },
  {
    name: "Surah Maryam",
    src: "https://www.humariweb.com/quran/abd-ar/19-(hamariweb.com).mp3",
  },
  {
    name: "Surah Taha",
    src: "https://www.humariweb.com/quran/abd-ar/20-(hamariweb.com).mp3",
  },
  {
    name: "Surah Anbiya",
    src: "https://www.humariweb.com/quran/abd-ar/21-(hamariweb.com).mp3",
  },
  {
    name: "Surah Hajj",
    src: "https://www.humariweb.com/quran/abd-ar/22-(hamariweb.com).mp3",
  },
  {
    name: "Surah Muminun",
    src: "https://www.humariweb.com/quran/abd-ar/23-(hamariweb.com).mp3",
  },
  {
    name: "Surah Noor",
    src: "https://www.humariweb.com/quran/abd-ar/24-(hamariweb.com).mp3",
  },
  {
    name: "Surah Furqan",
    src: "https://www.humariweb.com/quran/abd-ar/25-(hamariweb.com).mp3",
  },
  {
    name: "Surah Ash Shuara",
    src: "https://www.humariweb.com/quran/abd-ar/26-(hamariweb.com).mp3",
  },
  {
    name: "Surah Naml",
    src: "https://www.humariweb.com/quran/abd-ar/27-(hamariweb.com).mp3",
  },
  {
    name: "Surah Qasas",
    src: "https://www.humariweb.com/quran/abd-ar/28-(hamariweb.com).mp3",
  },
  {
    name: "Surah Ankabut",
    src: "https://www.humariweb.com/quran/abd-ar/29-(hamariweb.com).mp3",
  },
  {
    name: "Surah Rum",
    src: "https://www.humariweb.com/quran/abd-ar/30-(hamariweb.com).mp3",
  },
  {
    name: "Surah Luqman",
    src: "https://www.humariweb.com/quran/abd-ar/31-(hamariweb.com).mp3",
  },
  {
    name: "Surah Sajdah",
    src: "https://www.humariweb.com/quran/abd-ar/32-(hamariweb.com).mp3",
  },
  {
    name: "Surah Ahzab",
    src: "https://www.humariweb.com/quran/abd-ar/33-(hamariweb.com).mp3",
  },
  {
    name: "Surah Saba",
    src: "https://www.humariweb.com/quran/abd-ar/34-(hamariweb.com).mp3",
  },
  {
    name: "Surah Fatir",
    src: "https://www.humariweb.com/quran/abd-ar/35-(hamariweb.com).mp3",
  },
  {
    name: "Surah Yaseen",
    src: "https://www.humariweb.com/quran/abd-ar/36-(hamariweb.com).mp3",
  },
  {
    name: "Surah Saffat",
    src: "https://www.humariweb.com/quran/abd-ar/37-(hamariweb.com).mp3",
  },
  {
    name: "Surah Sad",
    src: "https://www.humariweb.com/quran/abd-ar/38-(hamariweb.com).mp3",
  },
  {
    name: "Surah Zumar",
    src: "https://www.humariweb.com/quran/abd-ar/39-(hamariweb.com).mp3",
  },
  {
    name: "Surah Ghafir",
    src: "https://www.humariweb.com/quran/abd-ar/40-(hamariweb.com).mp3",
  },
  {
    name: "Surah Fussilat",
    src: "https://www.humariweb.com/quran/abd-ar/41-(hamariweb.com).mp3",
  },
  {
    name: "Surah Shura",
    src: "https://www.humariweb.com/quran/abd-ar/42-(hamariweb.com).mp3",
  },
  {
    name: "Surah Zukhruf",
    src: "https://www.humariweb.com/quran/abd-ar/43-(hamariweb.com).mp3",
  },
  {
    name: "Surah Dukhan",
    src: "https://www.humariweb.com/quran/abd-ar/44-(hamariweb.com).mp3",
  },
  {
    name: "Surah Jathiya",
    src: "https://www.humariweb.com/quran/abd-ar/45-(hamariweb.com).mp3",
  },
  {
    name: "Surah Al Ahqaf",
    src: "https://www.humariweb.com/quran/abd-ar/46-(hamariweb.com).mp3",
  },
  {
    name: "Surah Muhammad",
    src: "https://www.humariweb.com/quran/abd-ar/47-(hamariweb.com).mp3",
  },
  {
    name: "Surah Fath",
    src: "https://www.humariweb.com/quran/abd-ar/48-(hamariweb.com).mp3",
  },
  {
    name: "Surah Hujurat",
    src: "https://www.humariweb.com/quran/abd-ar/49-(hamariweb.com).mp3",
  },
  {
    name: "Surah Qaf",
    src: "https://www.humariweb.com/quran/abd-ar/50-(hamariweb.com).mp3",
  },
  {
    name: "Surah Dhariyat",
    src: "https://www.humariweb.com/quran/abd-ar/51-(hamariweb.com).mp3",
  },
  {
    name: "Surah Tur",
    src: "https://www.humariweb.com/quran/abd-ar/52-(hamariweb.com).mp3",
  },
  {
    name: "Surah Najm",
    src: "https://www.humariweb.com/quran/abd-ar/53-(hamariweb.com).mp3",
  },
  {
    name: "Surah Qamar",
    src: "https://www.humariweb.com/quran/abd-ar/54-(hamariweb.com).mp3",
  },
  {
    name: "Surah Rahman",
    src: "https://www.humariweb.com/quran/abd-ar/55-(hamariweb.com).mp3",
  },
  {
    name: "Surah Waqiah",
    src: "https://www.humariweb.com/quran/abd-ar/56-(hamariweb.com).mp3",
  },
  {
    name: "Surah Hadid",
    src: "https://www.humariweb.com/quran/abd-ar/57-(hamariweb.com).mp3",
  },
  {
    name: "Surah Mujadila",
    src: "https://www.humariweb.com/quran/abd-ar/58-(hamariweb.com).mp3",
  },
  {
    name: "Surah Hashr",
    src: "https://www.humariweb.com/quran/abd-ar/59-(hamariweb.com).mp3",
  },
  {
    name: "Surah Mumtahanah",
    src: "https://www.humariweb.com/quran/abd-ar/60-(hamariweb.com).mp3",
  },
  {
    name: "Surah Saff",
    src: "https://www.humariweb.com/quran/abd-ar/61-(hamariweb.com).mp3",
  },
  {
    name: "Surah Jumuah",
    src: "https://www.humariweb.com/quran/abd-ar/62-(hamariweb.com).mp3",
  },
  {
    name: "Surah Munafiqun",
    src: "https://www.humariweb.com/quran/abd-ar/63-(hamariweb.com).mp3",
  },
  {
    name: "Surah Taghabun",
    src: "https://www.humariweb.com/quran/abd-ar/64-(hamariweb.com).mp3",
  },
  {
    name: "Surah Talaq",
    src: "https://www.humariweb.com/quran/abd-ar/65-(hamariweb.com).mp3",
  },
  {
    name: "Surah Tahrim",
    src: "https://www.humariweb.com/quran/abd-ar/66-(hamariweb.com).mp3",
  },
  {
    name: "Surah Mulk",
    src: "https://www.humariweb.com/quran/abd-ar/67-(hamariweb.com).mp3",
  },
  {
    name: "Surah Qalam",
    src: "https://www.humariweb.com/quran/abd-ar/68-(hamariweb.com).mp3",
  },
  {
    name: "Surah Haqqah",
    src: "https://www.humariweb.com/quran/abd-ar/69-(hamariweb.com).mp3",
  },
  {
    name: "Surah MaArij",
    src: "https://www.humariweb.com/quran/abd-ar/70-(hamariweb.com).mp3",
  },
  {
    name: "Surah Nooh",
    src: "https://www.humariweb.com/quran/abd-ar/71-(hamariweb.com).mp3",
  },
  {
    name: "Surah Jinn",
    src: "https://www.humariweb.com/quran/abd-ar/72-(hamariweb.com).mp3",
  },
  {
    name: "Surah Muzammil",
    src: "https://www.humariweb.com/quran/abd-ar/73-(hamariweb.com).mp3",
  },
  {
    name: "Surah Mudassir",
    src: "https://www.humariweb.com/quran/abd-ar/74-(hamariweb.com).mp3",
  },
  {
    name: "Surah Qiyamah",
    src: "https://www.humariweb.com/quran/abd-ar/75-(hamariweb.com).mp3",
  },
  {
    name: "Surah Insan",
    src: "https://www.humariweb.com/quran/abd-ar/76-(hamariweb.com).mp3",
  },
  {
    name: "Surah Mursalat",
    src: "https://www.humariweb.com/quran/abd-ar/77-(hamariweb.com).mp3",
  },
  {
    name: "Surah Naba",
    src: "https://www.humariweb.com/quran/abd-ar/78-(hamariweb.com).mp3",
  },
  {
    name: "Surah Naziat",
    src: "https://www.humariweb.com/quran/abd-ar/79-(hamariweb.com).mp3",
  },
  {
    name: "Surah Abasa",
    src: "https://www.humariweb.com/quran/abd-ar/80-(hamariweb.com).mp3",
  },
  {
    name: "Surah Takwir",
    src: "https://www.humariweb.com/quran/abd-ar/81-(hamariweb.com).mp3",
  },
  {
    name: "Surah Infitar",
    src: "https://www.humariweb.com/quran/abd-ar/82-(hamariweb.com).mp3",
  },
  {
    name: "Surah Mutaffifin",
    src: "https://www.humariweb.com/quran/abd-ar/83-(hamariweb.com).mp3",
  },
  {
    name: "Surah Inshiqaq",
    src: "https://www.humariweb.com/quran/abd-ar/84-(hamariweb.com).mp3",
  },
  {
    name: "Surah Buruj",
    src: "https://www.humariweb.com/quran/abd-ar/85-(hamariweb.com).mp3",
  },
  {
    name: "Surah Tariq",
    src: "https://www.humariweb.com/quran/abd-ar/86-(hamariweb.com).mp3",
  },
  {
    name: "Surah Ala",
    src: "https://www.humariweb.com/quran/abd-ar/87-(hamariweb.com).mp3",
  },
  {
    name: "Surah Ghashiya",
    src: "https://www.humariweb.com/quran/abd-ar/88-(hamariweb.com).mp3",
  },
  {
    name: "Surah Fajr",
    src: "https://www.humariweb.com/quran/abd-ar/89-(hamariweb.com).mp3",
  },
  {
    name: "Surah Balad",
    src: "https://www.humariweb.com/quran/abd-ar/90-(hamariweb.com).mp3",
  },
  {
    name: "Surah Shams",
    src: "https://www.humariweb.com/quran/abd-ar/91-(hamariweb.com).mp3",
  },
  {
    name: "Surah Lail",
    src: "https://www.humariweb.com/quran/abd-ar/92-(hamariweb.com).mp3",
  },
  {
    name: "Surah Duha",
    src: "https://www.humariweb.com/quran/abd-ar/93-(hamariweb.com).mp3",
  },
  {
    name: "Surah Shuara",
    src: "https://www.humariweb.com/quran/abd-ar/94-(hamariweb.com).mp3",
  },
  {
    name: "Surah Tin",
    src: "https://www.humariweb.com/quran/abd-ar/95-(hamariweb.com).mp3",
  },
  {
    name: "Surah Alaq",
    src: "https://www.humariweb.com/quran/abd-ar/96-(hamariweb.com).mp3",
  },
  {
    name: "Surah Qadr",
    src: "https://www.humariweb.com/quran/abd-ar/97-(hamariweb.com).mp3",
  },
  {
    name: "Surah Bayyinah",
    src: "https://www.humariweb.com/quran/abd-ar/98-(hamariweb.com).mp3",
  },
  {
    name: "Surah Zalzalah",
    src: "https://www.humariweb.com/quran/abd-ar/99-(hamariweb.com).mp3",
  },
  {
    name: "Surah Adiyat",
    src: "https://www.humariweb.com/quran/abd-ar/100-(hamariweb.com).mp3",
  },
  {
    name: "Surah Qariah",
    src: "https://www.humariweb.com/quran/abd-ar/101-(hamariweb.com).mp3",
  },
  {
    name: "Surah Takathur",
    src: "https://www.humariweb.com/quran/abd-ar/102-(hamariweb.com).mp3",
  },
  {
    name: "Surah Asr",
    src: "https://www.humariweb.com/quran/abd-ar/103-(hamariweb.com).mp3",
  },
  {
    name: "Surah Humazah",
    src: "https://www.humariweb.com/quran/abd-ar/104-(hamariweb.com).mp3",
  },
  {
    name: "Surah Fil",
    src: "https://www.humariweb.com/quran/abd-ar/105-(hamariweb.com).mp3",
  },
  {
    name: "Surah Quraish",
    src: "https://www.humariweb.com/quran/abd-ar/106-(hamariweb.com).mp3",
  },
  {
    name: "Surah Maun",
    src: "https://www.humariweb.com/quran/abd-ar/107-(hamariweb.com).mp3",
  },
  {
    name: "Surah Kauthar",
    src: "https://www.humariweb.com/quran/abd-ar/108-(hamariweb.com).mp3",
  },
  {
    name: "Surah Kafirun",
    src: "https://www.humariweb.com/quran/abd-ar/109-(hamariweb.com).mp3",
  },
  {
    name: "Surah Nasr",
    src: "https://www.humariweb.com/quran/abd-ar/110-(hamariweb.com).mp3",
  },
  {
    name: "Surah Masad",
    src: "https://www.humariweb.com/quran/abd-ar/111-(hamariweb.com).mp3",
  },
  {
    name: "Surah Ikhlas",
    src: "https://www.humariweb.com/quran/abd-ar/112-(hamariweb.com).mp3",
  },
  {
    name: "Surah Falaq",
    src: "https://www.humariweb.com/quran/abd-ar/113-(hamariweb.com).mp3",
  },
  {
    name: "Surah Nas",
    src: "https://www.humariweb.com/quran/abd-ar/114-(hamariweb.com).mp3",
  },
];
title.innerText ="Surat No "+(currentsong+1)+" "+playlist[currentsong].name;;
var playlistvisible = true;

function loadsong() {
  title.innerText = "Surat No "+(currentsong+1)+" "+playlist[currentsong].name;
  audio.src = playlist[currentsong].src;
}
function start() {
  play.style.display = "none";
  stop.style.display = "inline-block";
  img.classList.add("rotate");
  if (playlistvisible) {
    loadsong();
    playlistvisible = false;
  }
  audio.play();
  setInterval(updateProgressValue, 500);
}
function end() {
  play.style.display = "inline-block";
  stop.style.display = "none";
  img.classList.remove("rotate");
  audio.pause();
  curtime = formatTime(Math.floor(audio.currentTime));
}
function prev() {
  --currentsong;
  if (currentsong < 0) {
    currentsong += playlist.length;
  }
  playlistvisible = true;
  start();
}
function next() {
  ++currentsong;
  if (currentsong > playlist.length) {
    currentsong = 0;
  }
  playlistvisible = true;
  start();
}
function mute() {
  vol.value = 0;
  audio.volume = 0;
}
function up() {
  vol.value = 1;
  audio.volume = 1;
}
function updateProgressValue() {
  time.max = audio.duration;
  time.value = audio.currentTime;
  document.querySelector(".currentTime").innerHTML = formatTime(
    Math.floor(audio.currentTime)
  );
  document.querySelector(".durationTime").innerHTML = formatTime(
    Math.floor(audio.duration)
  );
}
function forwardsec() {
  audio.currentTime += 10;
  time.value = audio.currentTime;
  document.querySelector(".currentTime").innerHTML = formatTime(
    Math.floor(audio.currentTime)
  );
  document.querySelector(".durationTime").innerHTML = formatTime(
    Math.floor(audio.duration)
  );
}
function backwardsec() {
  audio.currentTime -= 10;
  time.value = audio.currentTime;
  document.querySelector(".currentTime").innerHTML = formatTime(
    Math.floor(audio.currentTime)
  );
  document.querySelector(".durationTime").innerHTML = formatTime(
    Math.floor(audio.duration)
  );
}

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
  audio.currentTime = time.value;
}
function changevol() {
  audio.volume = vol.value;
}
audio.addEventListener("ended", function () {
  next();
});
