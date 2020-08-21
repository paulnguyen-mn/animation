
const box = document.querySelector('#magicBox');
if (box) {
  box.addEventListener('click', (e) => {
    // box.classList.add('active');
    box.classList.toggle('active');
  });
}