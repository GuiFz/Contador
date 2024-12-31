let number = 0; // variavel usada para guardar e alterar o valor do contador


// ======================= Funções - Início =======================

// Função que aumenta o número - Início
let setTime;
let timer = false;
function numberAdd() {
    if (!timer) {
        if (number >= 999999) {
            timer = true;
            const initialColor = document.documentElement.style.getPropertyValue("--second-color");
            document.documentElement.style.setProperty("--second-color", "#F00");

            clearTimeout(setTime);

            setTime = setTimeout(() => { document.documentElement.style.setProperty("--second-color", initialColor); timer = false; }, 1000);
            return null;
        }

        number++;
        document.getElementById("number").textContent = number;
    }
}
// Função que aumenta o número - Fim

// Função que diminui o número - Início
function numberReduce() {
    if (number != 0) {
        number--;
        document.getElementById("number").textContent = number;
    }
}
// Função que diminui o número - Fim

// ======================= Funções - Fim =======================



// ======================= Tema Escuro/Claro - Início =======================

const themeColor = document.getElementById("themeColor");
let darkMode = false;

themeColor.addEventListener("click", function () {
    if (!darkMode) {
        document.documentElement.style.setProperty("--main-color", "#000");
        document.documentElement.style.setProperty("--second-color", "#FFF");
        darkMode = true;
    } else {
        document.documentElement.style.setProperty("--main-color", "#FFF");
        document.documentElement.style.setProperty("--second-color", "#000");
        darkMode = false;
    }
})

// ======================= Tema Escuro/Claro - Fim =======================


// ======================= PopUp informações - Início =======================
const popup = document.getElementById("infoPopup");

document.getElementById("info").addEventListener("click", function () {
    popup.style.display = "flex";
    popup.showModal();
    document.getElementById("closeBtn").blur();
})

document.getElementById("closeBtn").addEventListener("click", function () {
    popup.close();
    popup.style.display = "none";

})
// ======================= PopUp informações - Início =======================


// ======================= Eventos de Teclado - Início =======================
document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowDown" || event.key === "Backspace" || event.key === "Delete") {
        // Se a tecla for ⬇️ , Backspace, ou Del - diminui o número 
        numberReduce();
    }
    else if (event.key === "ArrowUp" || event.key === "+" || event.key === "Enter" || event.keyCode === 32) {
        // Se a tecla for ⬆️ , + Enter, ou Espaço - aumenta o número 
        numberAdd();
    }
})
// ======================= Eventos de Teclado - Fim =======================
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        console.clear();
        console.log("%c Cuidado! Ações aqui podem danificar a página.", "color:red; font-size: 15px;");
    }, 700);
})