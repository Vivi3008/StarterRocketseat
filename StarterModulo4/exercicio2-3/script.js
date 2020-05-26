let btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    startPreloader()

    let user = document.querySelector('input').value
    let ul = document.querySelector('ul')
    let div = document.getElementById('erro')
    ul.innerHTML = ""
    div.innerHTML = ""

    axios.get(`https://api.github.com/users/${user}/repos`)
     .then((response)=>{
        for(res of response.data){
            loadRepos(res.name)
        }
    })
     .catch((error)=>{
        showError(error)
    })

    .finally(()=>{ 
        EndPreloader() 
     })

    user = ""
})

function loadRepos(repo){
  let ul = document.querySelector('ul')
  let li =  document.createElement('li')
    let text = document.createTextNode(repo)

  ul.appendChild(li)
  li.appendChild(text)
}

function startPreloader(){
    let div = document.getElementById('preloader')
    div.style.display = "block"
}

function EndPreloader(){
    let div = document.getElementById('preloader')
    div.style.display = "none"
}

function showError(er){
    let div = document.getElementById('erro')
    div.innerHTML = `Erro no carregamento: ${er}`
}