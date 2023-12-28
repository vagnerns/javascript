function contar() {
    let ini = window.document.getElementById('itxti')
    let fim = window.document.getElementById('itxtf')
    let passo = window.document.getElementById('itxtp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR], Faltam dados!')
    }
}