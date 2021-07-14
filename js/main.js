const save = document.querySelector('.save');
const form = document.querySelector('form');
const getName = document.querySelector('#email-input');
const submitBtn = document.querySelector('#submit');


form.addEventListener('submit', function(e) {
    e.preventDefault();
})

submitBtn.addEventListener('click', function() {
    localStorage.setItem('email', getName.value);
    document.location.href='confirm.html';
})
