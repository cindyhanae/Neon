// DROPDOWN
const btnDropdown = document.querySelector('.js-btn-dropdown')
const dropdown = document.querySelector('.js-dropdown')

function openDropdown(event){
  event.preventDefault()

  dropdown.classList.toggle('active')
}

// firstElementChild para eu acessar o <a> dentro de <li> do menu.
btnDropdown.firstElementChild.addEventListener('click', openDropdown)

// fecha dropdown quando mouse deixa área
dropdown.addEventListener('mouseleave', openDropdown)



// MENU FIXO
const headerSite = document.querySelector('#js-header')

function fixedMenu(){
  // preciso pegar a posição de onde está o scroll da página e adicionar uma classe ao menu
  // .pageYOffset é uma propriedade do window que retorna a posição do scroll em px.
  if (window.pageYOffset > 80) {
    headerSite.classList.add('fixed-menu')

  } else {
    headerSite.classList.remove('fixed-menu')

  }
}

// o evento precisa ser adicionado ao window
window.addEventListener('scroll', fixedMenu)


