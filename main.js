const inputEmail = document.querySelector(".section-two__input--email");
const inputEmailError = document.querySelector(".section-two__description");
const mainButton = document.querySelector(".section-two__button");

mainButton.addEventListener('click',  (e) => {
        // console.log('click')
    const emailExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    let hasError = false;
    if(emailExp.test(inputEmail.value) === true){
        hasError = false;
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)';
        inputEmailError.innerHTML = '';
    }else{
        hasError = true
        inputEmail.style.border = '1px solid hsl(354, 100%, 66%)';
        inputEmailError.innerHTML = 'Please provide a valid email address'
    }
    // if(!hasError){
        
    // }
})