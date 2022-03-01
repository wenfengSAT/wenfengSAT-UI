import './style/index.scss'
function changeTheme() {
  const theme = document.documentElement.getAttribute('theme')
  if (theme) {
    document.documentElement.removeAttribute('theme');
  } else {
    document.documentElement.setAttribute('theme', 'night');
  }
}

const btn = document.getElementById('change-btn');
btn.addEventListener('click', changeTheme);

