//Declaraciones
const d = document
const main = d.querySelector('.principal')
const block = d.createElement("div")

const containBtns = d.createElement("div")
const btnStart = d.createElement("button")
const btnStop = d.createElement("button")


//Declaracion de clases
block.className="reloj"
btnStart.className="boton"
btnStop.className="boton"
containBtns.className="contenedorBtns"


//Union de elementos
main.append(block)
block.append(containBtns)
containBtns.append(btnStart)
containBtns.append(btnStop)
btnStart.innerText="Show Time Now"
btnStop.innerText="Unwatch Oclock"



//Estilos
const mainColor = "#030318"
main.style.setProperty("background","green")
main.style.setProperty("display","flex")
main.style.setProperty("flex-direction","row")
main.style.setProperty("aling-items","center")
main.style.setProperty("justify-content","center")
main.style.setProperty("aling-content","center")
main.style.setProperty("padding","100px")


const reloj = d.querySelector(".reloj")
reloj.style.setProperty("background","purple")
reloj.style.setProperty("padding","0px")
reloj.style.setProperty("color","white")
reloj.style.setProperty("font-size","100px")
reloj.style.setProperty("font-weight","bold")
reloj.style.setProperty("font-style","italic")

reloj.style.setProperty("display","flex")
reloj.style.setProperty("flex-direction","column")
reloj.style.setProperty("justify-content","center")
reloj.style.setProperty("align-items","center")



const botones = d.querySelectorAll(".boton")
botones[0].style.setProperty("border","none")   
botones[0].style.setProperty("background",mainColor)
botones[0].style.setProperty("margin","1rem")
botones[0].style.setProperty("border-radius","1rem")
botones[0].style.setProperty("color","white")
botones[0].style.setProperty("width","200px")
botones[0].style.setProperty("height","100px")
botones[0].style.setProperty("font-size","25px")


botones[1].style.setProperty("border","none")
botones[1].style.setProperty("background",mainColor)
botones[1].style.setProperty("margin","1rem")
botones[1].style.setProperty("border-radius","1rem")
botones[1].style.setProperty("color","white")
botones[1].style.setProperty("width","200px")
botones[1].style.setProperty("height","100px")
botones[1].style.setProperty("font-size","25px")



//L o g i c a
function watchClock(){
    const $verificador = document.querySelector(".vistaReloj")
    if($verificador == null){
        const ref = document.querySelector(".contenedorBtns")
        const nodoG = document.querySelector(".reloj") 

        const viewClock = d.createElement("p")
        viewClock.className="vistaReloj"

        nodoG.insertBefore(viewClock, ref)

        let update = ()=>{
            let clock = new Date()
            let timeCurrent = clock.toLocaleTimeString()
            viewClock.innerText=`${timeCurrent}`
        
        }
        
        setInterval(() => {
            update()
        }, 1000);

        document.querySelectorAll(".boton")[0].setAttribute("disabled","")
        document.querySelectorAll(".boton")[1].removeAttribute('disabled')
    } else{
        console.warn("Nothing")
    } 
   
}

function unwatchClock(){
    const existClock = document.querySelector(".vistaReloj")
    
    existClock == null ? 
    alert("Ejecuta al menos una vez el reloj"):
    console.log("Que")

    existClock.remove()
    document.querySelectorAll(".boton")[0].removeAttribute('disabled')
    document.querySelectorAll(".boton")[1].setAttribute("disabled","")

}


botones[0].addEventListener("click", watchClock)
botones[1].addEventListener("click",unwatchClock)



/*A L A R M A */