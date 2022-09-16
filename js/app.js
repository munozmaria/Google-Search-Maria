let recherche = document.querySelector('.recherche')
let search = document.querySelector('.search')
const Body = document.querySelector("body")
const BotonDark = document.querySelector(".btnChange")

//seulement avec le bouton de rechercher
search.onclick = () => {
    let url = "https://www.google.fr/search?q=" + recherche.value
    window.open(url, '_self')
}

//avec l'enter
recherche.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        let url = "https://www.google.fr/search?q=" + recherche.value
				window.open(url, "_self")
    }
})

//changer couleur
BotonDark.onclick = () => {
	Body.classList.toggle("dark")

	if (Body.classList.contains("dark")) {
		localStorage.setItem("ModoDarkAgregado", "true")
	} else {
		localStorage.setItem("ModoDarkAgregado", "false")
	}
}

if (localStorage.getItem("ModoDarkAgregado") === "true") {
	Body.classList.add("dark")
} else {
	Body.classList.remove("dark")
}