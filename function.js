





function agecal(name,year){

    let date = new Date();
    let age = date.getFullYear() - year;
    let resivstatus = agestatus(age);

    return `
    <p class="alert alert-${resivstatus.color} ${resivstatus.color}">Hi,${name} you are ${age} years old & you are ${resivstatus.status}</p>
    
    `
}


function agestatus(age){
    
    if(age > 0 && age <= 12){
        return{
            status : 'baby',
            color : 'primary'
        }
    }else if(age > 13 && age <= 18){
        return{
            status : 'torun',
            color : 'color'
        }
    }else if(age > 19 && age <= 35){
        return{
            status : 'jubok',
            color : 'success'
        }
    }else if(age > 35 && age <= 55){
        return{
            status : 'togboga jubok',
            color : 'info'
        }
    }else if(age > 55 && age <= 60){
        return{
            status : 'boyshko',
            color : 'light'
        }
    }else if(age > 60 && age <= 80){
        return{
            status : 'boyshko',
            color : 'white'
        }
    }
};


