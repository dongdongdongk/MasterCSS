let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButton = document.querySelectorAll('.plan button');
let togg

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click',function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}