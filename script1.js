//авторизация         
function validateForm() {
const nameInput = document.getElementById("name");
const dobInput = document.getElementById("dob");
const genderInputs = document.getElementsByName("gender");

let isValid = true;
// Проверка имени
if (nameInput.value.trim() === "") {
    document.getElementById("nameError").textContent = "логин должен состоять из 4-10 символов, ";
    isValid = false;
} else {
    document.getElementById("nameError").textContent = "";
}
    
const dob = new Date(dobInput.value);
const today = new Date();
const age = today.getFullYear() - dob.getFullYear();
const monthDiff = today.getMonth() - dob.getMonth();
    
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
}
if (age < 0 || age > 74) {
    alert("Ошибка: Возраст должен быть от 1 до 74 лет.");
    isValid = false;
}
    
const genderSelected = Array.from(genderInputs).some(input => input.checked);
if (!genderSelected) {
    document.getElementById("genderError").textContent = "выберите пол";
    isValid = false;
} else {
    document.getElementById("genderError").textContent = "";
}
    
    return isValid;
}
    
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('goToSecondPage').addEventListener('click', function(event) {
        event.preventDefault();
    if (validateForm()) {
        window.location.href = 'index1.html';
    }
});
});


