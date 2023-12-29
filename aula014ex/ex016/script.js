function contar() {
    let ini = window.document.getElementById('itxti')
    let fim = window.document.getElementById('itxtf')
    let passo = window.document.getElementById('itxtp')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERROR], Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert = ('Passo invalido! Considerando passo 1')
            p = 1
        }
        if (1 < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } 
        res.innerHTML += `\u{1f3c1}`   
        
    }
}