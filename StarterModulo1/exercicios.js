//exercicio 1
var endereco = {
    rua:"Rua dos Pinheiros",
    numero:"2345",
    bairro:"Centro",
    cidade:"São paulo",
    uf:"SP"
}

console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com número ${endereco.numero}.`)

//exercicio 2
function pares(x,y){

    for (i=x; i<=y; i++) {
        if ((i%2)==0) {
        console.log(i)
        }
    }

}

pares(1,20)

//exercicio 3

var skills = ["Javascript","NodeJs", "React", "React Native"]

function temHabilidades(sk){

   if(sk.indexOf("Javascript")==-1){
       console.log(false)
   }
   else{
       console.log(true) 
   }
   
}

temHabilidades(skills)

//exercicio 4

function experiencia(anos){
    if(anos<=1) console.log("Iniciante")
    if(anos>=1 & anos<=3) console.log("Intermediário")
    if(anos>3 & anos<=6) console.log("Avançado")
    if(anos>=7) console.log("Jedi Master")
}

experiencia(7)

//exercicio 5

var usuarios = [
    {
        nome:"Diego",
        habilidades:["Javascript", "React", "Redux"]
    },
    {
        nome:"Viviane",
        habilidades:["Javascript","Nodejs","CSS"]
    }
]

for(user of usuarios){
    console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}.`)
}