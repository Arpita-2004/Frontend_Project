var btn = document.querySelector("button")
var h2 = document.querySelector("h2")

var flag = 1

btn.addEventListener('click',function(){
    h2.innerHTML = "Request sending..."
    h2.style.color = "yellow"
    btn.innerHTML = "Adding..."

     if(flag==1){
        setTimeout(function(){
            h2.innerHTML = "Friends"
            h2.style.color = "green"
            btn.innerHTML = "Remove Friends"
        },3000)
        
        flag=0
    }else{
        h2.innerHTML = "Strenger"
        h2.style.color = "red"
        btn.innerHTML = "Add Friends"
        flag=1
    }
    
    
})