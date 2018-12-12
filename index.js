function retourParole(callback) {
    var xmlhttp = new XMLHttpRequest(); 
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          callback(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", "november.txt", true);
    xmlhttp.send();
    }

    function callback(data) {
        paroles =  data.split('\n');
     }
     retourParole(callback);
    
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