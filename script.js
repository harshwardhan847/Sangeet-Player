console.log("Welcome to Sangeet");
//initialize the variable
let songIndex = 0;
let audioElement = new Audio('./songs/Besharam Rang Song  Pathaan  Shah Rukh Khan, Deepika Padukone  Vishal & Sheykhar  Shilpa, Kumaar.mp3')
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
masterSongName.innerHTML= "Besharam Rang";
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.querySelector('.volumeGif');
let songItems = Array.from(document.getElementsByClassName('songItem'));




let songs = [
    {
        songName:"Besharam Rang",
        filePath:"./songs/Besharam Rang Song  Pathaan  Shah Rukh Khan, Deepika Padukone  Vishal & Sheykhar  Shilpa, Kumaar.mp3",
        coverPath:"./cover/huxhqphtDrM-HD.jpg"
    },
    {
        songName:"Chandni Raat",
        filePath:"./songs/Harnoor Chandni Raat  Mxrci  Karan T  Sukh Sanghera Official Video  New Punjabi Song 2022.mp3",
        coverPath:"./cover/Gu9SWPA_k0U-HD.jpg"
    },
    {
        songName:"Jee Jeha Karda",
        filePath:"./songs/Jee Jeha Karda  Jasmine Sandlas  Official Music Video  Latest Punjabi song 2022.mp3",
        coverPath:"./cover/QA3vkQrSUgs-HD.jpg"
    },
    {
        songName:"Kyaa Baat Haii 2.0",
        filePath:"./songs/Kyaa Baat Haii 2.0  Govinda Naam Mera  Vicky, Kiara  Harrdy, Tanishk, Nikhita, Jaani, B Praak.mp3",
        coverPath:"./cover/7CNeqA9PBYE-HD.jpg"
    },
    {
        songName:"Matching",
        filePath:"./songs/Matching  Kulwinder Billa (Official Video) The Boss  Latest Punjabi Songs 2022.mp3",
        coverPath:"./cover/JWEkWMuPqPQ-HD.jpg"
    },
    {
        songName:"Gall Mukk Gyi",
        filePath:"./songs/Nimrat Khaira - Gall Mukk Gyi (Official Video)  Latest Punjabi Songs 2022  T-Series.mp3",
        coverPath:"./cover/_pRjsZ6g43U-HD.jpg"
    },
    {
        songName:"Rooh",
        filePath:"./songs/Rooh (Official Music Video)  Noor Chahal  Nirmaan  Enzo  YouTube Foundry Class of 2022.mp3",
        coverPath:"./cover/oVSRF7e0PsE-HD.jpg"
    },
    {
        songName:"Same Same",
        filePath:"./songs/Same Same - Official Video  Singga  Mix Singh  Humble Music.mp3",
        coverPath:"./cover/3cZ7BmHQl2c-HD.jpg"
    },
    {
        songName:"White Brown Black",
        filePath:"./songs/White Brown Black - Avvy Sra  Karan Aujla  Jaani  Arvindr Khaira  Desi Melodies.mp3",
        coverPath:"./cover/BtQp2U6hJII-HD.jpg"
    },
    {
        songName:"WOH",
        filePath:"./songs/WOH (Official Video) - Ikka x Dino James x Badshah  Def Jam India.mp3",
        coverPath:"./cover/EbyAoYaUcVo-HD.jpg"
    }
]

songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName

})


audioElement.addEventListener('timeupdate', ()=>{
    //updaate seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value/100)*audioElement.duration;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play')
        element.classList.remove('fa-pause')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');


        // console.log(audioElement);
        
        // container.style.backgroundImage =  "url('songs[songIndex].coverPath')";
        // let bacImg = songs[songIndex].coverPath;
        // console.log(bacImg);
        // let container = document.getElementById('container');
        // container.setAttribute("style", "background : url('songs[songIndex].coverPath'); ");
        // container.append();
        // console.log(songs[songIndex].coverPath)
        
        
        
        
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerHTML = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    })
})

//handle play pause click
// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
            audioElement.pause();
            masterPlay.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
            gif.style.opacity = 0;

        }
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex++;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

    
    masterSongName.innerHTML = songs[songIndex].songName;
    gif.style.opacity = 1;

    if(songIndex =='0'){
        document.getElementById('0').classList.add('fa-pause')
        document.getElementById('0').classList.remove('fa-play')
        document.getElementById(songs.length-1).classList.add('fa-play')
        document.getElementById(songs.length-1).classList.remove('fa-pause')
    }
    else{
        document.getElementById(songIndex).classList.add('fa-pause')
        document.getElementById(songIndex).classList.remove('fa-play')
        document.getElementById(songIndex-1).classList.add('fa-play')
        document.getElementById(songIndex-1).classList.remove('fa-pause')
    }
    
    

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex--;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');

    masterSongName.innerHTML = songs[songIndex].songName;
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
    if(songIndex=='9'){
        document.getElementById(songIndex).classList.remove('fa-play')
        document.getElementById(songIndex).classList.add('fa-pause')
        document.getElementById('0').classList.add('fa-play')
        document.getElementById('0').classList.remove('fa-pause')
    }
    else{
        document.getElementById(songIndex).classList.add('fa-pause')
        document.getElementById(songIndex).classList.remove('fa-play')
        document.getElementById(songIndex+1).classList.add('fa-play')
        document.getElementById(songIndex+1).classList.remove('fa-pause')
    }
    
})
