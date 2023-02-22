
const selection = document.querySelector('.selections');
let activeButton;

selection.addEventListener('click', function(e){
    
    const target = e.target;

    if(target.matches('Button')){

       if(activeButton){
        activeButton.style.backgroundColor = '';
        activeButton.style.color = '';
       }

        target.style.backgroundColor = '#979797';
        target.style.color = '#fff';
        activeButton = target;
    }
})


const submit = document.querySelector(".submit");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container-2");
const ratingConfirmation = document.querySelector('#rating-confirmation');



const buttons = document.querySelectorAll('.selections button');
console.log(buttons);
let selectedButton = '';

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        selectedButton = button.textContent;
    })
})






submit.addEventListener('click', function(e){
    container.style.display = 'none';
    container2.style.display = 'block';
    const message = `You selected ${selectedButton} out of 5`;
    
    ratingConfirmation.textContent = message;
    
});