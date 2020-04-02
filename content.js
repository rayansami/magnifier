/*    
    Control = 17
    Shift = 16
    Up-Arrow = 38
    Down-Arrow = 40

    To Zoom-in Press: Ctrl + Shift + Up-Arrow 
    To Zoom-out Press: Ctrl + Shift + Down-Arrow 
*/

let map = [];

//TODO: Will get the current zoom level dynamically later. Setting hard coded value for zoom to 100%.
let zoom = 100;
$(document.body).css('zoom', zoom.toString()+'%');

document.onkeydown = document.onkeyup = function (e) {
    e = e || window.event;
    
    console.log(e.keyCode);
    map[e.keyCode] = e.type == 'keydown';

    if( map[17] && map[16] && map[38]){        
        increaseMagnification();
    }  
    else if(map[17] && map[16] && map[40])
    {    
        decreaseMagnification();
    }     
    
    console.log('no work');
};

function increaseMagnification(){
    zoom++;
    $(document.body).css('zoom',zoom.toString()+'%');
}

function decreaseMagnification(){
    zoom--;
    $(document.body).css('zoom',zoom.toString()+'%');
}

// For controlling zoom from extension UI. 
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.zoom == "Plus"){
        increaseMagnification();
      }
      
      if(request.zoom == "Minus"){
        decreaseMagnification();
      }            
      
      if (request.zoom == "Plus" || request.zoom == "Minus")
        sendResponse({farewell: "working"});
    });
