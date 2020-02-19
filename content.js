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
        zoom++;
        $(document.body).css('zoom',zoom.toString()+'%');
    }  
    else if(map[17] && map[16] && map[40])
    {
        zoom--;
        $(document.body).css('zoom',zoom.toString()+'%');
    }     
    
    console.log('no work');
};