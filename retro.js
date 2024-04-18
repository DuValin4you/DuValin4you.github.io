const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkTheme.matches) {
    document.body.classList.add("dark");
    localStorage.setItem('prefersDarkTheme', 'true');
}

if (localStorage.getItem('prefersRetro') === null) {
    localStorage.setItem('prefersRetro', 'true');
}

if (localStorage.getItem('prefersRetro') === 'true') {
    document.body.classList.add('retro');
} else {
    document.body.classList.remove('retro');
}

if (localStorage.getItem('prefersDarkTheme') === 'true') {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

document.getElementById("retro").addEventListener("click", () => {
    document.body.classList.toggle("retro");
    if (localStorage.getItem('prefersRetro') === 'true') {
        localStorage.setItem('prefersRetro', 'false');
    } else {
        localStorage.setItem('prefersRetro', 'true');
    }
});

document.getElementById("dark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (localStorage.getItem('prefersDarkTheme') === 'true') {
        localStorage.setItem('prefersDarkTheme', 'false');
    } else {
        localStorage.setItem('prefersDarkTheme', 'true');
    }
});
document.getElementById('BotonCopiar').addEventListener('click', copiarAlPortapapeles);
function copiarAlPortapapeles(ev) {
    // Obtener contenido del div oculto
    let contenido = document.getElementById('TextoACopiar').textContent;
    // Crear input
    let input = document.createElement('input');
    // Asignar contenido
    input.value = contenido;
    // Agregar input a documento
    document.body.appendChild(input);
    // Seleccionar contenido
    input.select();
    // Copiar
    document.execCommand('copy');
    // Eliminar input
    input.remove();
}
