//перенос данных с авторизации 
document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;


    localStorage.setItem('name', name);
    localStorage.setItem('dob', dob);


    window.location.href = 'index.html';
});