

const name = document.querySelector('#name');
const year = document.querySelector('#year');
const check = document.querySelector('#check');
const result = document.querySelector('#result');

const keyup = document.querySelector('#keyup');
const keyup2 = document.querySelector('#keyup-2')


check.addEventListener('click', ()=>{
/* 
    let nameValue = name.value;
    let yearValue = year.value; */

    if(name.value ==''){
        name.style.border = '1px solid red'
    }else{
        name.style.border = '1px solid black'
    }
    if(year.value ==''){
        year.style.border = '1px solid red'
    }else{
        year.style.border = '1px solid black'
    }

    if(name.value == '' || year.value == ''){
         result.innerHTML = ' <p class="alert-danger py-2">All Fields are Required</p>'
    }else{
        result.innerHTML = agecal(name.value,year.value);
    }
    
    name.value = '';
    year.value = '';
});


name.addEventListener('keyup', () =>{

   let pattern = /^[a-zA-Z-_]*$/;

    if(name.value == ''){
        keyup.innerHTML = '<p>plz set user name</p>'
    }else if(pattern.test(name.value) == false){
        keyup.innerHTML = '<p style="color:red">number not allow</p>'
    } else{
        keyup.innerHTML =''
   };

});

year.addEventListener('keyup', () =>{
    let pattern2 = /^[0-9]*$/;

    if(year.value == ''){
     keyup2.innerHTML = '<p>plz set yaer</p>'
 }else if(pattern2.test(year.value) == false){
     keyup2.innerHTML = '<p style="color:red">charatar not allow</p>'
 } else{
     keyup2.innerHTML =''
 };
});






