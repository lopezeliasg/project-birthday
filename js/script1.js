// Preguntas y respuestas
const questions = [
    { question: "Pregunta 1: La palabra que estas buscando se encuentra en el 7mo párrafo de la cancion 'no me olvides' del pelado... esta palabra se repite 2 veces", answer: "en", styleClass: "page1", url: "pagina1.html" },
    { question: "Pregunta 2: Resolver la siguiente ecuación: 2x=550+3462", answer: "2006", styleClass: "page2", url: "pagina2.html" },
    { question: "Pregunta 3: Muchas veces fui preso y muchas veces llore ___ vos", answer: "por", styleClass: "page3", url: "pagina3.html" },
    { question: "Pregunta 4: Para ____ ver a Cavani con el uniforme de nuestro club es un sueño - JRR, el ultimo10", answer: "mi", styleClass: "page4", url: "pagina4.html" },
    { question: "Pregunta 5: papá de mi mamá es?", answer: "abuelo", styleClass: "page5", url: "pagina5.html" },
    { question: "Pregunta 6: “There are two big days in any love story: the day you meet the girl of your dreams ____ the day you marry her.” (in spanish please)", answer: "y", styleClass: "page6", url: "pagina6.html" },
    { question: "Pregunta 7: le decía a mi abuelo que como no había argentinos, elegía a _____ porque también hablaba español", answer: "alonso", styleClass: "page7", url: "pagina7.html" }
];


// Identificar el índice de la pregunta actual basado en la clase del <body>
const currentQuestionIndex = parseInt(document.body.className.replace('page', '')) - 1;

// Elementos del DOM
const questionText = document.getElementById("question"); // Si cada página muestra la pregunta
const inputWord = document.getElementById("inputWord");
const validateBtn = document.getElementById("validateBtn");
const errorMsg = document.getElementById("errorMsg");

// Verificar si el índice es válido
if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];

    // Validar la respuesta
    validateBtn.addEventListener("click", function() {
        const userInput = inputWord.value.trim();

        // Comparar respuesta
        if (userInput.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            if (currentQuestionIndex < questions.length - 1) {
                // Redirigir a la siguiente página
                window.location.href = questions[currentQuestionIndex + 1].url;
            } else {
                // Final del cuestionario
                alert("¡Has completado todas las preguntas, cara de verga!");
                window.location.href = "paginafinal.html"; // Redirigir a una página final si existe
            }
        } else {
            // Mostrar mensaje de error
            errorMsg.textContent = "La palabra ingresada es incorrecta. Intenta nuevamente.";
            inputWord.value = ""; // Limpiar el campo de texto
            inputWord.focus(); // Enfocar el campo de texto
        }
    });
} else {
    console.error("El índice de la pregunta actual es inválido.");
}