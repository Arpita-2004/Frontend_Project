var body = document.querySelector('body')
var btn = document.querySelector('button')
var images = ['https://plus.unsplash.com/premium_photo-1723622429467-0ba746897e62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1673454201378-3867e051dca7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1723624968143-29973f211b64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1673455210092-0ae382d19a72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1694270553677-22680efa4d56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

btn.addEventListener('click',function(){

    // var x = Math.floor(Math.random()*100) 
    // var y = Math.floor(Math.random()*100)

    // var img = document.createElement('img')
    // img.setAttribute('src','https://images.unsplash.com/photo-1727529117214-d3db857fdc3c?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

    var num = Math.floor(Math.random()*images.length)
    // console.log(num);
    
    var x = Math.floor(Math.random()*90)
    var y = Math.floor(Math.random()*90)
    var rotate = Math.random()*360
    
    var img = document.createElement('img')
    img.setAttribute('src',images[num])

    img.style.height = '200px'
    img.style.position = 'absolute'
    img.style.left = x + '%'
    img.style.top = y + '%'
    img.style.rotate = rotate + 'deg'

    body.appendChild(img)

})

