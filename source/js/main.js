window.onload = () => {
  console.log('load')
  const headerToggle = document.getElementById('header__toggle')
  headerToggle.onclick = toggleMenu
}

function toggleMenu () {
  const header = document.getElementById('header')
  header.classList.toggle('menu-open')
}
