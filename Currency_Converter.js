

const input_amount = document.querySelector('#amount');
const select_convert = document.querySelector('#convert');
const curr_convert =document.querySelector('#curr-convert');
const curre_output = document.querySelector('#curre-output');

curr_convert.onclick = () => {

    let inputamount = input_amount.value;
    let selectconvert = select_convert.value;

    if(inputamount == ''){
        input_amount.style.border = '1px solid red'
    }

    curre_output.innerHTML = `${inputamount * selectconvert}`;
}

select_convert.onchange = () =>{

    let inputamount = input_amount.value;
    let selectconvert = select_convert.value;

    curre_output.innerHTML = `${inputamount * selectconvert}`;

}


































