document.querySelector('body')
var img = document.querySelector('img')
 
var movex = 0
var movey = 0

document.addEventListener('keydown',function(dets){
    // console.log(dets.code);

    if(dets.code == 'ArrowRight'&& movex < 81){
        movex++
        img.style.left = movex + '%'
        // console.log(movex)
    }
    else if(dets.code == 'ArrowLeft' && movex > 0){
        movex--
        img.style.left = movex + '%'
        // console.log(movex)
    }
    else if(dets.code == 'ArrowUp' && movey > 0 ){
        movey--
        img.style.top = movey + '%'
        // console.log(movey)
    }
    else if(dets.code == 'ArrowDown' && movey < 50){
        movey++
        img.style.top = movey + '%'
        // console.log(movey)
    }
    else{
        console.log(dets.code + ' othres');
    }

    
})
