var teclas=document.querySelectorAll('button');

teclas.forEach(tecla => {
    tecla.addEventListener('click',e=>{
        e.preventDefault();
        console.log("cliquei na tecla" + tecla.dataset.nota)
    })
});