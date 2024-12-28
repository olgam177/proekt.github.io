//тест 
    const testForm = document.getElementById('testForm');
    const resultsDiv = document.getElementById('result');

document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

const correctAnswers = {
    answer1: "Москва", 
    answer2: "Пруд",
    question3: "b", 
    question4: "a", 
    question5: "c", 
    question6: "b"  
};

let score = 0;

if (document.getElementById('answer1').value !== correctAnswers.answer1) {
    document.getElementById("answerError").textContent = "Правильный ответ-Москва";
    isValid = false;
} else {
    document.getElementById("answerError").textContent = "Правильный ответ";
}

if (document.getElementById('answer2').value.toLowerCase() !== correctAnswers.answer2) {
    document.getElementById("answerError2").textContent = "Правильный ответ-Пруды";
    isValid = false;
} else {
    document.getElementById("answerError").textContent = "Правильный ответ";
}

for (let i = 1; i <= 4; i++) {
    const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
    
if (selectedOption && selectedOption.value === correctAnswers[`question${i}`]) {
    score++;
}
}

document.getElementById("result").textContent = `Вы набрали ${score} из 6 баллов.`;
});



