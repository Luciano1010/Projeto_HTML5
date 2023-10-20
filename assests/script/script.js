
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nome = document.querySelector('#nome')
nomeOk = false
emailOk = false
assuntoOk = false
let mapa = document.querySelector('#mapa')








function verificarCampos(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Preenchimento dos campos é Obrigatório ")
    }else{
        alert("Sucesso ao enviar os Dados")
    }
}

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
       txt.innerHTML = 'Nome Invalido'
       
       
    }else{
        txt.innerHTML = ''
        nomeOk = true
        
    }

}

function validaEmail(){
    
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@') == 1 || email.value.indexOf('.') == 1){
        txtEmail.innerHTML = ''
        emailOk = true
    }
    else if(email.value.length == 0){
        txtEmail.innerHTML = 'Não pode ser Vazio'
        
    }
    else{
        txtEmail.innerHTML = 'E-mail inválido'
        
       
    }
    
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 300){
        txtAssunto.innerHTML = 'Digite no maximo 100 caracteres'   
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
    
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulario Enviado com Sucesso !!!')
    }else{
        alert('Preencha corretamente o formulario')
    }
}

function mapaZoom(){
 mapa.style.width = '500px'
 mapa.style.height = '300px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}



