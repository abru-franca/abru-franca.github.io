class Eu{
idade
email
conhecimentos

constructor(idade,email,conhecimentos){
this.idade=idade
this.email=email 
this.conhecimentos=conhecimentos 
}
meApresentar(){
    return "oiii tenho"+this.idade+"anos,pode entrar em contato comigo pelo e-mail"+this.email+
    "no momento aprendi sobre:<ul>"+this.aprendizado()+"</ul>"
}

aprendizado(){

    let texto=""
    for(let contador=0;contador<this.conhecimentos.length;contador++){
        texto+="<li>"+this.conhecimentos[contador]+"</li>"
    }
    return texto
}
}

let conhecimentos=[
  "algoritmos (logistica de programação)",
   
]
let minha_pessoa= new Eu(17,"brunafransa007@gmail.com",conhecimentos)
minha_pessoa.conhecimentos.push("github")
document.writeln(minha_pessoa.meApresentar());