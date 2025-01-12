var btns = document.querySelectorAll('button')
var body = document.querySelector('body')

// console.log(btns);

btns.forEach(function(elm){
    // console.log('heyy');
    elm.addEventListener('click',function(){
        body.style.backgroundColor = elm.innerHTML
    })
    
})




































// var btns = document.querySelectorAll('button')
// var body = document.querySelector("body")

// console.log(btns);

// btns.forEach(function(elm){

//     elm.addEventListener("click",function(){
//         body.style.backgroundColor = elm.innerHTML
//         console.log(elm.innerHTML);
        
//     })
    
// })