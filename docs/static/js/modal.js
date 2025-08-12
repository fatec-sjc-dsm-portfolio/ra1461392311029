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