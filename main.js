document.querySelector('.menu-btn').addEventListener('click', function() {
    this.classList.toggle('close');
    document.querySelector('.menu').classList.toggle('show');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.menu-btn').classList.remove('close');
    document.querySelector('.menu').classList.remove('show');
});
