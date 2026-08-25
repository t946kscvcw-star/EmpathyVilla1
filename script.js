const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

if (menu) {
  menu.addEventListener('click', () => {
    const visible = getComputedStyle(links).display !== 'none';
    links.style.display = visible ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.right = '20px';
    links.style.top = '70px';
    links.style.padding = '18px';
    links.style.background = 'rgba(30,30,25,.92)';
    links.style.borderRadius = '12px';
    links.style.zIndex = '10';
  });
}
