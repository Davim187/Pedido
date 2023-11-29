function fujar(){
    const buttonNao = document.getElementById('Nao')
    
    const larguraJanela = window.innerWidth
    const alturaJanela = window.innerHeight
    
    const maxX = larguraJanela - buttonNao.offsetWidth
    const maxY = alturaJanela - buttonNao.offsetHeight
    
    var aleatorioX = Math.floor(Math.random() * maxX)
    var aleatorioY = Math.floor(Math.random() * maxY)
    
    buttonNao.style.left = aleatorioX - 50 + 'px'
    buttonNao.style.top = aleatorioY + 'px'
}
function Sim(){
    window.location.href = 'https://api.whatsapp.com/send?phone=5585985506250&text=Ola%20meu%20querido%20namorado,%20voce%20fez%20um%20otimo%20pedido%20de%20namoro!!!%20gosto%20muito%20de%20voce%20e%20aceito%20namorar%20voce'

}
