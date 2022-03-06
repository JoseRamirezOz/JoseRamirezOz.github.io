const d = document



/*Creando un ShortCut*/
function shortcuts(e){
   
    if(e.code == "KeyA" && e.altKey == true){
        alert("Alerta!!!!")
    }
}
d.addEventListener("keydown", shortcuts)


