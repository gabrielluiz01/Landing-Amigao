function openMenu(){
    if(document.querySelector('.menu').style.display === 'flex'){
        document.querySelector('.menu').style.display = 'none'
        document.querySelector('.menu-hamburguer').style.display = 'flex'
        document.querySelector('.button-exit').style.display = 'none'
    }else{
        document.querySelector('.menu').style.display = 'flex'
        document.querySelector('.menu-hamburguer').style.display = 'none'
        document.querySelector('.button-exit').style.display = 'flex'
    }
}
function closeMenu(){
    if(document.querySelector('.menu').style.display === 'flex'){
        document.querySelector('.menu').style.display = 'none'
        document.querySelector('.button-exit').style.display = 'none'
        document.querySelector('.menu-hamburguer').style.display =  'flex'
    }   
}
function openModal(){
    document.querySelector('.modal-adopt').style.display = 'block'
    document.querySelector('.overlayModal').style.display = 'flex'
}

function closeModal(){
    document.querySelector('.modal-adopt').style.display = 'none'
    document.querySelector('.overlayModal').style.display = 'none'
    document.querySelector('.modal-obrigado').style.display = 'none'
}
function changeModal(){
    document.querySelector('.modal-adopt').style.display = 'none'
    document.querySelector('.modal-obrigado').style.display = 'block'
}