function toggleMode() {
const html = document.documentElement
html.classList.toggle("light")

//pegar a tag img
const img = document.querySelector("#profile img")

// substituir a imagem
 if(html.classList.contains("light")) {
// se tiver light mode, adicinar a imagem light
img.setAttribute("src", "./avatar-light.png")
img.setAttribute( "alt", "Foto de Bruno Anulino")
 } else{


// set tiver sem light mode, manter a imagem normal
img.setAttribute("src", "./avatar.png")
img.setAttribute( "alt", "Foto de Bruno Anulino, com oculos escuro ")
 }
}