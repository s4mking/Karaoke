function retourParole(chanson,callback) {
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          callback(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", chanson+".txt", true);
    xmlhttp.send();
    }

    function callback(data) {
        paroles =  data.split('\n');
        console.log(paroles);
     }
    
  function sToTime(t) {
    return padZero(parseInt((t / (60)) % 60)) + ":" + 
           padZero(parseInt((t) % 60));
  }
  function padZero(v) {
    return (v < 10) ? "0" + v : v;
  }
  function speak (phrase) {
    window.speechSynthesis.speak(new window.SpeechSynthesisUtterance(phrase))
  }

  var e = document.getElementById("choix");
  e.addEventListener('change', function(){
    var choixUser = this.options[this.selectedIndex].value;

    //Renitianilisation du style avant le test des chnaons 
    document.getElementsByTagName("BODY")[0].className='';
    document.getElementById('night').style.opacity='0';
    document.getElementById('nyan').style.display='none';
    document.getElementById('nyan2').style.display='none';
    document.getElementById('nyan3').style.display='none';
    document.getElementById('nyan4').style.display='none';
    document.getElementById('rain_container').style.display='none';
    document.getElementsByTagName("BODY")[0].style.animation='none';
    console.log(choixUser);
      switch(choixUser){
        case 'titanic':
        document.getElementsByTagName("BODY")[0].classList.add('sea');
        break;
        case 'rickroll':
        document.getElementsByTagName("BODY")[0].classList.add('star');
        document.getElementsByTagName("BODY")[0].classList.add('star_night');
        document.getElementById('night').style.opacity='1';
        break;
        case 'november':
        document.getElementsByTagName("BODY")[0].classList.add('rain_body');
        document.getElementById('rain_container').style.display='block';
        break;
        case 'nyan':
        
        document.getElementsByTagName("BODY")[0].classList.add('nyan');
        document.getElementById('nyan').style.display='block';
       document.getElementById('nyan2').style.display='block';
       document.getElementById('nyan3').style.display='block';
       document.getElementById('nyan4').style.display='block';
        document.getElementsByTagName("BODY")[0].style.animation='BGC 1s infinite';
        break;

      }
    var audioPlayer=document.getElementById('audioSource');
    audioPlayer.src=choixUser+'.mp3';
    document.getElementById('audioPlay').load();
    retourParole(choixUser,callback);
  })

    var precedent='';
    var aud= document.getElementById('audioPlay');
    aud.ontimeupdate = function() {myFunction()};
    function myFunction() {
              for(var i=0;i<paroles.length;i++){
                  if(sToTime((aud.currentTime)+4)==paroles[i].substr(1,5)){
                      document.getElementById('parole').innerHTML=paroles[i].substr(10);
                      //  setTimeout(function(){
                          console.log("toto");
                          if(paroles[i].substr(10)!=precedent){
                            speak(paroles[i].substr(10));
                          }
                          precedent=paroles[i].substr(10);
                          setTimeout(function(){
                                      //  },2000)
                            document.getElementById('parole').innerHTML='';
                       },6000);
                       
                  }
              }
        } 