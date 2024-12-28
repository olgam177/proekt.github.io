//перенос данных с авторизации
const name = localStorage.getItem('name');
const dob = localStorage.getItem('dob');


document.getElementById('displayName').textContent = name ? name : 'Не указано';
document.getElementById('displayDob').textContent = dob ? dob : 'Не указано';
