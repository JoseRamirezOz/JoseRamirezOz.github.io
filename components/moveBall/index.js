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



function moveBall(e){
    $pelota.style.setProperty(
        "transform","translate(50px,50px)")
}


d.addEventListener("keydown",moveBall)