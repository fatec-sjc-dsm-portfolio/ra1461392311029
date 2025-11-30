// Modal pro projeto 1
const modal = document.getElementById('modal');
const projeto1 = document.getElementById('projeto1');
const closeModal = document.getElementById('close-modal');

projeto1.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
});

// Modal pro projeto 2
const modal2 = document.getElementById('modal2');
const projeto2 = document.getElementById('projeto2');
const closeModal2 = document.getElementById('close-modal2');

projeto2.addEventListener('click', () => {
    modal2.style.display = 'block';
});

closeModal2.addEventListener('click', () => {
    modal2.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target == modal2) {
        modal2.style.display = 'none';
    }
});

// Modal pro projeto 3
const modal3 = document.getElementById('modal3');
const projeto3 = document.getElementById('projeto3');
const closeModal3 = document.getElementById('close-modal3');

projeto3.addEventListener('click', () => {
    modal3.style.display = 'block';
});

closeModal3.addEventListener('click', () => {
    modal3.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target == modal3) {
        modal3.style.display = 'none';
    }
});

// Modal pro projeto 4
const modal4 = document.getElementById('modal4');
const projeto4 = document.getElementById('projeto4');
const closeModal4 = document.getElementById('close-modal4');

projeto4.addEventListener('click', () => {
    modal4.style.display = 'block';
});

closeModal4.addEventListener('click', () => {
    modal4.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target == modal4) {
        modal4.style.display = 'none';
    }
});

// Modal pro projeto 5
const modal5 = document.getElementById('modal5');
const projeto5 = document.getElementById('projeto5');
const closeModal5 = document.getElementById('close-modal5');

projeto5.addEventListener('click', () => {
    modal5.style.display = 'block';
});

closeModal5.addEventListener('click', () => {
    modal5.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target == modal5) {
        modal5.style.display = 'none';
    }
});

// Modal pro projeto 6
const modal6 = document.getElementById('modal6');
const projeto6 = document.getElementById('projeto6');
const closeModal6 = document.getElementById('close-modal6');
projeto6.addEventListener('click', () => {
    modal6.style.display = 'block';
}
);

closeModal6.addEventListener('click', () => {
    modal6.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target == modal6) {
        modal6.style.display = 'none';
    }
});

