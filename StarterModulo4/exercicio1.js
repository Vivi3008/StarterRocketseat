function checaIdade(idade){
    return new Promise((resolve,reject)=>{
        if (idade>=18) {
            resolve('Maior de idade')
        }else{
            reject('Menor de idade')
        }
    })
}

checaIdade(56)
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })