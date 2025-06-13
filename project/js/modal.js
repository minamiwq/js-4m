const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('#btn-get')
const closeModalBtn = document.querySelector('.modal_close');


const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow= 'hidden';
}
const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow= '';
}

openModalBtn.onclick = () => openModal();
closeModalBtn.onclick = () => closeModal();
modal.onclick = (event) => {
    if(event.target === modal) {
        closeModal();
    }
};
const endModal = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1) {
        openModal();
        window.removeEventListener('scroll', endModal)
    }
}

window.addEventListener('scroll', endModal)

setTimeout(() =>{
    openModal();
},10000)

