function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = '15'
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha-250.png'
        window.document.body.style.background = '#f9d487'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde-250.png'
        window.document.body.style.background = '#fcbea4'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite-250.png'
        window.document.body.style.background = '#193d4b'
    }
}
