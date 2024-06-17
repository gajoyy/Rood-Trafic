document.querySelectorAll('.right-side__content').forEach(item => {
    item.addEventListener('click', event => {
        const isActive = item.classList.toggle('active');
        const icon = item.querySelector('.icon');
        if (isActive) {
            icon.src = './assets/icon/arrow-up.svg';
        } else {
            icon.src = './assets/icon/arrow-down.svg';
        }
    });
});

document.querySelectorAll('.input__container input').forEach(input => {
    input.addEventListener('click', function () {
        const container = this.parentElement;
        container.classList.toggle('active');
    });
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
        const input = this.closest('.input__container').querySelector('input');
        input.value = this.textContent;
        this.closest('.input__container').classList.remove('active');
    });
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.input__container')) {
        document.querySelectorAll('.input__container').forEach(container => {
            container.classList.remove('active');
        });
    }
});

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

AOS.init({
    duration: 600,
    easing: 'ease-out',
    once: true
});