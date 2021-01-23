window.onload = () => {
  const headerToggle = document.getElementById('header__toggle')
  headerToggle.onclick = toggleMenu
  addRank()
}

function toggleMenu () {
  const header = document.getElementById('header')
  header.classList.toggle('menu-open')
}

function addRank () {
  const box = document.getElementById('popular-posts-box')
  const items = Array.from(box.getElementsByClassName('popular-posts-item'))
  items.forEach((item, i) => {
    const rankElement = document.createElement('div')
    rankElement.classList = 'popular-posts__rank'
    rankElement.innerHTML = i + 1
    item.append(rankElement)
  })
}
