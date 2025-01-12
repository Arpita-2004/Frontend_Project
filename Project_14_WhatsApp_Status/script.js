var users = [
    {
        pic: "https://images.unsplash.com/photo-1733173372615-accf145e3b17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Shikha",
        statustime: '4 hours ago',
    },
    {
        pic: "https://images.unsplash.com/photo-1636784212193-de9b6eb30174?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ronit",
        statustime: '24 hours ago',
    },
    {
        pic: "https://images.unsplash.com/photo-1608302226718-dd9c4bd1ebe4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Prashant",
        statustime: '15 min ago',
    },
    {
        pic: "https://images.unsplash.com/photo-1607474115623-85158b6b5f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Vishal",
        statustime: '5 min ago',
    },
    {
        pic: "https://plus.unsplash.com/premium_photo-1664274132514-ee24a44717b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Piyush",
        statustime: '1 day ago',
    },
    {
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Aarav Sharma",
        statustime: '10 min ago',
    },
    {
        pic: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=2506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ishita Patel",
        statustime: '1 hours ago',
    },
    {
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Rohan Mehta",
        statustime: '30 min ago',
    },
    {
        pic: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ananya Singh",
        statustime: '45 min ago',
    },
    {
        pic: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Kabir Das",
        statustime: '20 min ago',
    },
    {
        pic: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Priya Kapoor",
        statustime: 'just now',
    }
]

var allstatus = document.querySelector(".allstatus")

var sum = ""
users.forEach(function(elem){
    // console.log(elem);
    sum += `<div class="status">
                    <img src=${elem.pic} alt="">
                    <div class="name">
                        <h3>${elem.name}</h3>
                        <h5>${elem.statustime}</h5>
                    </div>
            </div>`
    
})
allstatus.innerHTML = sum