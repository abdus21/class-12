
const formName = document.querySelector('#form-name');
const formEmail = document.querySelector('#form-email');
const formUname = document.querySelector('#form-uname');
const formResult = document.querySelector('#form-result');
const form_submit = document.querySelector('#form-submit');
const result_1 = document.querySelector('#result-1');
const result_2 = document.querySelector('#result-2');
const result_3 = document.querySelector('#result-3');
const card_body = document.querySelector('.card-body');
const card_body_p = card_body.firstElementChild;
const password = document.querySelector('#password');
const result_4 = document.querySelector('#result-4');


form_submit.addEventListener('submit', (e) =>{

    e.preventDefault();

    let formNamevalue = formName.value;
    let formEmailvalue = formEmail.value;
    let formResultvalue = formUname.value;
    let passwordvalue = password.value;

    if(formNamevalue == '' || formEmailvalue == '' || formResultvalue == ''){
        card_body_p.innerHTML = '<p class="alert alert-danger">All fields are required</p>' 
    }

    if(formName.value == ''){
        formName.style.border = '1px solid red'
    }else{
        formName.style.border = '1px solid black'
    };

    if(formEmailvalue == ''){
        formEmail.style.border = '1px solid red'
    }else{
        formEmail.style.border = '1px solid black'
    };

    if(formResultvalue == ''){
        formUname.style.border = '1px solid red'
    }else{
        formUname.style.border = '1px solid black'
    }
    if(passwordvalue == ''){
        password.style.border = '1px solid red'
    }else{
        password.style.border = '1px solid black'
    }
    formName.value = '';
    formEmail.value = '';
    formUname.value = '';
})

formName.addEventListener('keyup', () =>{

    let pattern = /^[a-zA-Z-_]*$/;
    let formNamevalue = formName.value;

    if(formNamevalue == ''){
        result_1.innerHTML = '<p>PLZ Set a Name</p>';
    }else if(pattern.test(formNamevalue) == false){
        result_1.innerHTML = '<p style="color:red">number not allow</p>';
    }
    else{
        result_1.innerHTML = '';
    }

});

formEmail.addEventListener('keyup', () =>{

    let pattern2 = /^[a-z0-9\.\_\-]*@[a-z0-9]*\.[a-z]{2,5}$/;

    let formEmailvalue = formEmail.value;

    if(formEmailvalue == ''){
        result_2.innerHTML = '<p>PLZ Set a Email</p>';
    }else if(pattern2.test(formEmailvalue) == false){
        result_2.innerHTML = '<p style="color:red">not charrekt</p>';
    }else{
        result_2.innerHTML = '';
    }
});

password.onkeyup = () =>{
    let pattern2 = /^[a-zA-Z0-9\@\#\.\%\,:\;\']{8,}$/;
    if(password.value == ''){
        result_4.innerHTML = '<p>PLZ Set a Password</p>';
    }else if(pattern2.test(password.value) == false){
        result_4.innerHTML = '<p>minimam </p>';
    }else{
        result_4.innerHTML = '';
    };

}

formUname.onkeyup = () =>{

    let formResultvalue = formUname.value;
    if(formResultvalue == ''){
        result_3.innerHTML = '<p>PLZ Set a username</p>';
    }else{
        result_3.innerHTML = '';
    }

}

