class navBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})

    }

    component(){
    const navMain =  document.createElement("nav")
    navMain.className="navigation"
    navMain.innerHTML=`
        <a href="" class="link-image">JoséRamírezOz 
           <img src="https://galerryoz.netlify.app/imgsClean/Logo.jpg"/>
        </a>

        <div class="barNav">
            <button id="btnShowMenu"  type="button">
                <img src="./burger.png" alt="">
            </button>
            <nav class="menuBurger">
            </nav>
        </div>

        <div class="navDsk">
        <a href="">Perfil</a>
        <a href="">Certificaciones</a>
        <a href="">Proyectos</a>
        <a href="" class="link-image">NotasDev <img src="https://galerryoz.netlify.app/imgsClean/Hack.png"/> </a>
        <a href="" class="link-image--component">Components <img src="https://galerryoz.netlify.app/imgsClean/blocks.png"/></a>
        </div>
        ${this.desing()}
        
    `;


        console.log(document.querySelector(".navigation"));
        return navMain;
    }

    desing(){
        return `
        <style>
        .navigation{
            display:flex;
            flex-direction:row;
            padding:2rem;
            justify-content:space-between;
            align-items: center;
            background:#030318;
            border:dashed .1rem #00F8E6;
        }


        .link-image img{
            width:3rem;
            heigth:3rem;
            vertical-align:middle;
            object-fit:contain;
            margin-left:.5rem;
        }

        .link-image--component img{
            width:3rem;
            heigth:3rem;
            vertical-align:middle;
            object-fit:contain;
            margin-left:.5rem;
            background:white;
        }

        a{
            font-size:30px;
            color:white;
            padding:1rem;
            margin-left:-1rem;
            text-decoration:none;
            background:#030318;
 
        }




        /**Responsive Celulares***/
        @media(max-width:800px){
            .navDsk{
                background:green;
                transform:translate(0%, -1000%);
            }

        </style>
        `;
    }



    connectedCallback(){
        this.shadowRoot.appendChild(this.component())
    }
}

customElements.define('nav-bar', navBar)



