import Modal from './modal.js'

const modal = Modal()



//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach( button => {
    // Adicionar a escuta
    button.addEventListener("click", event => {
        //Abrir modal
        modal.open()
    })
})

const deleteButton = document.querySelectorAll(".actions a.delete")

// Quando o botão delete for clicado, ele abre a modal
deleteButton.forEach( button => {
    // Adicionar a escuta
    button.addEventListener('click',event=>{
        modal.open()
    } )
})



