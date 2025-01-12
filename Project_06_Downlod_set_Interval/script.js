var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var growth = document.querySelector('.growth')


var grow = 0
var flag = 1

btn.addEventListener('click',function(){

    var num = Math.floor(Math.random()*100)
    console.log(num);

        var growInterval = setInterval(function(){
            // console.log("helloooo..");
            grow++
            // console.log(grow);
            h2.innerHTML = grow + '%'
            growth.style.width = grow + '%'
            
        },num)

        setTimeout(function(){

            clearInterval(growInterval)
            btn.innerHTML = 'Downloding'
            btn.style.opacity = 0.2
            btn.style.pointerEvents = "none"

        },num*100)

    
})