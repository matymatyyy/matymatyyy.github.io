function iniciar(){
    const botones=document.getElementById("boton")
    const botones1=document.getElementById("boton1")
    const botones2=document.getElementById("boton2")
    const botones3=document.getElementById("boton3")
    const ini=document.getElementById("Inicio")
    const pro=document.getElementById("Proyectos")
    const exper=document.getElementById("Experiencia")
    const sobre=document.getElementById("SobreMi")
    const close=document.querySelector(".offcanvas")
    const butonNav=document.querySelector(".navbar-toggler")
    const botonclose=document.getElementById("close")
    var nombreBoton

    botones.addEventListener("click", joga)
    botones1.addEventListener("click", joga)
    botones2.addEventListener("click", joga)
    botones3.addEventListener("click", joga)

    pro.style.display="none"
    exper.style.display="none"
    sobre.style.display="none"

    function joga(){
        nombreBoton=event.target.textContent;
        if(nombreBoton=="Inicio"){
            ini.style.display="flex"
            pro.style.display="none"
            exper.style.display="none"
            sobre.style.display="none"
            ocultar()
        }
        else if(nombreBoton=="Proyectos"){
            ini.style.display="none"
            exper.style.display="none"
            sobre.style.display="none"
            pro.style.display="flex"
            ocultar()
        }
        else if(nombreBoton=="Experiencia"){
            ini.style.display="none"
            exper.style.display="flex"
            sobre.style.display="none"
            pro.style.display="none"
            ocultar()
        }
        else if(nombreBoton=="Educacion"){
            ini.style.display="none"
            exper.style.display="none"
            sobre.style.display="flex"
            pro.style.display="none"
            ocultar()
        }
        else{
            console.log(":C")
        }
    }

    function ocultar(){
        botonclose.click()

    }
    
}

window.addEventListener("load", iniciar)