//кнопка выхода
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('vvv').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

//2-я кнопка выхода 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('vvv2').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
//вывод даты 
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('ru-RU', options);
document.getElementById('date').textContent = formattedDate;


//кнопка очищения
function clearForm() {
    document.getElementById("testForm").reset();
}


document.gatEllementById('proverka').onclick=function(){
    const result=document.getElementById('result').value;
    sessionStorage.setItem('result',result);
    window.location.href='index4.html';
    }


