const $menu = document.querySelector('.menuBurger')
const $btnShowMenu = document.querySelector('.btnShowMenu')


const createMenu = `
		<ul class='menu'>
			<li><a href="#seccion1">Seccion 1</a></li>
			<li><a href="#seccion2">Seccion 2</a></li>
			<li><a href="#seccion3">Seccion 3</a></li>
			<li><a href="#seccion4">Seccion 4</a></li>
		</ul>`


function consulta (){
	const create = document.querySelector('.menuBurger')
	const remove = document.querySelector('.menu')
	if(create != undefined){
		create.innerHTML=createMenu
	} 
	if(remove != undefined ){
		document.querySelector('.menu').remove()
	}
}


$btnShowMenu.addEventListener('click',consulta)





		

