const d = document
const $main = d.querySelector(".principal")
const $ball = d.createElement("div")
$ball.className="ball"
$main.append($ball)


$main.style.setProperty("background","purple")
$main.style.setProperty("margin","2rem")
$main.style.setProperty("padding","2rem")

const $pelota = d.querySelector(".ball")
$pelota.style.setProperty("background","yellow")
$pelota.style.setProperty("width","5rem")
$pelota.style.setProperty("height","5rem")
$pelota.style.setProperty("border-radius","50%")


const x =100 , y=100; 

function moveBall(e){ 
    console.log(e.keyCode)
    switch(e.keyCode){
        case 38://arriba
        break;
        case 40://abajo
        break;
        case 39://derecha
        break;
        case 37://izquierda
        break;
    }

    $pelota.style.setProperty("transform",`
    translate(${x}px,${y}px)`)
}


d.addEventListener("keydown",moveBall)