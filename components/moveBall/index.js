const d = document
const $main = d.querySelector(".principal")
const $ball = d.createElement("div")
$ball.className="ball"
$main.append($ball)

//Escenario
$main.style.setProperty("background","purple")
$main.style.setProperty("margin","2rem")
$main.style.setProperty("padding","2rem")
$main.style.setProperty("height","20rem")

//Pelota
const $pelota = d.querySelector(".ball")
$pelota.style.setProperty("background","yellow")
$pelota.style.setProperty("width","8rem")
$pelota.style.setProperty("height","8rem")
$pelota.style.setProperty("border-radius","50%")


let x =10 , y=10; 

function moveBall(e){ 
    const escenario = $main.getBoundingClientRect()
    const pelota = $ball.getBoundingClientRect()

    console.warn("Escenario")
    console.log(escenario)
    console.warn("Pelota")
    console.log(pelota)
    
    switch(e.keyCode){
        case 38://arriba
            if(escenario.top<pelota.top)y-=10
            e.preventDefault()
        break;
        case 40://abajo
            if(escenario.bottom>pelota.bottom)y+=10
            e.preventDefault()
        break;
        case 39://derecha
            if(escenario.right>pelota.right) x+=10
            e.preventDefault()
        break;
        case 37://izquierda
            if(escenario.left<pelota.left) x-=10
            e.preventDefault()
        break;
    }


    $pelota.style.setProperty("transform",`
    translate(${x}px,${y}px)`)
}


d.addEventListener("keydown",moveBall)