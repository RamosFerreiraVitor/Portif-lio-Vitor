//1. criamos uma variavel contador para controlar
//qual imagem deve aparecer
let contador =1;

//2. A função setinterval' de 5000 milisegundos (5 segundos)
//Ele vai executar a 'proxImg' repetidamente a cada 5000 milesegundos
//(5 segundos)
setInterval(function() {
        proxImg();
},5000);

//3. esta e função responsavel por trocar nossas imagens.
function proxImg() {
    //Toda vez que a função roda somamos +1 no contador.
    contador++;
    //logica de repetição
    //como agora usamos 4 imagens, reiniciamos para 1 e o carrossel voltara
    // para o inicio (loop)
    if (contador >4)
       contador =1
 {
    //MANIPULAÇÃO DO HTML (DOM)
    //Aqui o java sciprt proucura o html, o elemento que tem  o id "radio"
    //+ o numero do contador.
    //O ' .checked = true' marca aqueles inputs de radio automaticamente
    //Quando o radio é marcado o css que configuramos ira mudar automaticamente.
    }
}