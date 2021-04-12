const open = document.getElementById('openbtn');
console.log(openbtn);
const close = document.getElementById('closebtn');
const addShowModal= document.querySelector('.modal-background');
console.log(addShowModal);
open.addEventListener('click',()=> {
    addShowModal.classList.add('show-modal');
});
close.addEventListener('click',()=> {
    addShowModal.classList.remove('show-modal');
});

  