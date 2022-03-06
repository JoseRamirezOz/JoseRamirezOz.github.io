//Declaraciones
const d = document
const main = d.querySelector('.principal')
const block = d.createElement("div")

const containBtns = d.createElement("div")
const btnStart = d.createElement("button")
const btnStop = d.createElement("button")
const title = d.createElement("h1")


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


// ESTILOS GENERALES y Colores
const mainColor = "#030318";
const bgColor = "#0a0a23";
const targets = "#008EFF"
const relevante = "#00F8E6"

const $raiz = d.querySelector(":root")
const $html = d.querySelector("html")
$html.style.setProperty("font-size","62.5%")




//Estilos del componente
main.style.setProperty("background",mainColor)
main.style.setProperty("display","flex")
main.style.setProperty("flex-direction","row")
main.style.setProperty("aling-items","center")
main.style.setProperty("justify-content","center")
main.style.setProperty("aling-content","center")
main.style.setProperty("padding","100px")


const reloj = d.querySelector(".reloj")
reloj.style.setProperty("background",targets)
reloj.style.setProperty("padding","0px")
reloj.style.setProperty("color","white")
reloj.style.setProperty("font-size","10rem")
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
botones[1].style.setProperty("font-size","1.8rem")


const $containbtns = d.querySelector(".contenedorBtns")
$containbtns.style.setProperty("margin-top","-5rem")

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
    
        d.querySelector(".vistaReloj")
        .style.setProperty("padding","1rem")

         
        d.querySelector(".vistaReloj")
        .style.setProperty("font-size","5rem")
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
const containAlarm = document.createElement("article")
const btnStartA = document.createElement("button")
const btnStopA = document.createElement("button")


main.append(containAlarm)
containAlarm.append(btnStartA)
containAlarm.append(btnStopA)





btnStartA.innerText="Start Alarm"
btnStopA.innerText="Stop Alarm"
btnStartA.className="btnAlarm"
btnStopA.className="btnAlarm"



containAlarm.style.setProperty("width","15rem")
containAlarm.style.setProperty("heigth","5rem")
containAlarm.style.setProperty("display","flex")
containAlarm.style.setProperty("flex-direction","column")
containAlarm.style.setProperty("justify-content","center")
containAlarm.style.setProperty("aling-items","center")
containAlarm.style.setProperty("background",targets)
containAlarm.style.setProperty("mar2in-left","2rem")



const btnA = d.querySelectorAll(".btnAlarm")[0]
const btnB = d.querySelectorAll(".btnAlarm")[1]
btnA.style.setProperty("padding","1rem")
btnA.style.setProperty("font-size","1.6rem")
btnA.style.setProperty("background",mainColor)
btnA.style.setProperty("border","none")
btnA.style.setProperty("color","white")
btnA.style.setProperty("border-radius",".3rem")
btnA.style.setProperty("margin","1rem")

btnB.style.setProperty("padding","1rem")
btnB.style.setProperty("font-size","1.6rem")
btnB.style.setProperty("background",mainColor)
btnB.style.setProperty("border","none")
btnB.style.setProperty("color","white")
btnB.style.setProperty("border-radius",".3rem")
btnB.style.setProperty("margin","1rem")


btnA.addEventListener("click", ()=>{
    if(d.querySelector("audio")==undefined){
        const audio = d.createElement("audio")
        containAlarm.append(audio)
        audio.setAttribute("src","../timers/alarm.mp3")
        audio.setAttribute("autoplay","")
        audio.setAttribute("loop","")
    }


})

btnB.addEventListener("click", ()=>{
    const $audio =d.querySelector("audio")
 
    if($audio != undefined){
        $audio.remove()
    }

})





