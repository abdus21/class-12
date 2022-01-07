





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




let agecal2 = function(name,yearr,gander){
    let data = new Date();
    let age = data.getFullYear() - yearr;
  
    return `<p class="alert alert-${agecheck(age,gander).attri}">Hi, ${name} you are ${age} years old & ${agecheck(age,gander).statuss} </p>`
  } 
  
   function agecheck(age,gander){
  
    if(age > 0 && age <= 12){
      if(gander == 'male'){
        return {
          statuss : 'tumi jubok',
          attri : 'info'
        }
      }else if(gander == 'female'){
        return {
          statuss : 'tumi juboti',
          attri : 'info'
       }
      }
    }else if(age >= 13 && age <= 17){
  
      if(gander == 'male'){
        return{
          statuss : 'tumi torun',
          attri : 'danger'
        }
      }else if(gander == 'female'){
        return{
          statuss : 'tumi toruni',
          attri : 'danger'
       }
      }
    }else if(age >= 18 && age <= 30){
      if(gander == 'male'){
        return{
          statuss : 'tumi jubok',
          attri : 'success'
      }
     }else if(gander == 'female'){
      return{
        statuss : 'tumi juboti',
        attri : 'success'
     }
    }
    }else if(age >= 31 && age <= 45){
  
    if(gander == 'male'){
      return{
        statuss : 'tumi purush',
        attri : 'primary'
    }
    }else if(gander == 'female'){
      return{
        statuss : 'tumi mohila',
        attri : 'primary'
    }
    }
  }else if(age >= 46 && age <= 80){
  
    if(gander == 'male'){
      return{
        statuss : 'apni buro purush',
        attri : 'warning'
    }
    }else if(gander == 'female'){
      return{
        statuss : 'apni buri mohila',
        attri : 'warning'
    }
    }
  }else if(age >= 81 && age <= 120){
  
    if(gander == 'male'){
      return{
        statuss : 'apni norbora buro purush',
        attri : 'danger',
        bgcolor : 'dark'
    }
    }else if(gander == 'female'){
      return{
        statuss : 'apni norbora buri mohila',
        attri : 'danger',
        bgcolor : 'dark'
    }
    }
  }
  }

