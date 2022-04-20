const nombre = document.getElementById("name")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    if(nombre.value.length <6){
        warnings += `Error, uno de los datos es érroneo <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `Error, uno de los datos es érroneo <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Iniciando sesión"
    }
})

const searchUsuario = event => {
    event.preventDefault();
    const { value } = event.target.examen;
fetch(`https://localhost:3000/clientes${value.toUsuario()}`)
    .then(data => data.json())
    .then(response => renderUsuarioData(response))
    .catch(err => renderNotFound())
}

