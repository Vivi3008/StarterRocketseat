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
         console.log(response.data)
        for(res of response.data){
            loadRepos(res.name,res.html_url)
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

function loadRepos(repo,url){
  let ul = document.querySelector('ul')
  let li =  document.createElement('li')
  let text = document.createTextNode(repo)
  let a = document.createElement('a')
  let txt = document.createTextNode(' Acessar')
  a.setAttribute('href',url)
  a.setAttribute('target', '_blank')


  ul.appendChild(li)
  li.appendChild(text)
  li.appendChild(a)
  a.appendChild(txt)

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