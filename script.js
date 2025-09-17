let camposForm = document.querySelectorAll(".formulario__entrada")

camposForm.forEach((campoForm) => {
    console.log(campoForm)
    campoForm.addEventListener("keyup", function () {
        console.log("presionando una tecla...")
    });
});