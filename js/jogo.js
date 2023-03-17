var widhtBody = 0 
var heightBody = 0
var life = 1
var chrRmng = 15
var points = 0

function sizeFix() {
	heightBody = window.innerHeight
     widhtBody = window.innerWidth

}
sizeFix()

function posRnd() {   
    
    if (document.getElementById('idPng')) {
        document.getElementById('idPng').remove()
        
        if (life > 4) {
            window.location.href = 'win.html'
          
        } else {

            document.getElementById('lf' + life).src = ("img/life_over.png")
            document.getElementById('lf' + life).className = 'life_over'
            life++
        }
    }
    
    var posX = Math.floor(Math.random() * widhtBody) - 120
    var posY = Math.floor(Math.random() * heightBody) - 120
    console.log(posX, posY)
    
    posX = posX < 120 ? 120 : posX 
    posY = posY < 120 ? 120 : posY
    

    const ghostPng = ["img/ghost_1.png", "img/ghost_2.png"]
    var rndGhost = Math.floor(Math.random() * ghostPng.length)
    var ghost = document.createElement('img')
    ghost.src = ghostPng[rndGhost]
    ghost.className = 'ghosts animation'
    ghost.style.left = posX + 'px'
    ghost.style.top = posY + 'px'
    ghost.style.position = 'absolute'
    ghost.id = 'idPng'
    document.body.appendChild(ghost)  
    ghost.onmouseover = function () {
        this.remove()
        points++
    }
    document.getElementById('points').innerHTML = points
}
var chr = setInterval(function () {
    chrRmng -= 1

    if (chrRmng < 0) {
        clearInterval(chr)
        window.location.href = 'win.html'
    } else {
        document.getElementById('chr').innerHTML = chrRmng
        
    }
}, 1000)
