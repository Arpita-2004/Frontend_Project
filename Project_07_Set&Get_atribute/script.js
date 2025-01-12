var img1 = document.querySelector('.img1')
var img2 = document.querySelector('.img2')
var btn = document.querySelector('button')


btn.addEventListener('click',function(){
    var img1SRC = img1.getAttribute('src')
    var img2SRC = img2.getAttribute('src')

    img1.setAttribute('src',img2SRC)
    img2.setAttribute('src',img1SRC)

})



// var body = document.querySelector('body')
// var h1 = document.createElement('h1')

// h1.innerHTML = 'Hello guysssss......'
// h1.style.color = 'red'
// h1.style.backgroundColor = 'gray'
// body.appendChild(h1)

 

// var h1 = document.querySelector('h1')
// console.log(h1);

// var first = h1.getAttribute('id')
// console.log(first)

// h1.setAttribute('id','blue')
// h1.innerHTML = 'Helloo Guyssss..'
// var second = h1.getAttribute('h1')
// console.log(second)




