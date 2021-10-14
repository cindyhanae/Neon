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

