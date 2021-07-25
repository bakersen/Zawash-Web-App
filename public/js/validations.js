// Test connection
let connect = 'Validation file connecting';
console.log(connect);


//REGISTER WASHER VALIDATIONS
const generalError = document.querySelectorAll('.general-error')

//Washer name
const washername = document.getElementById('washername');
const washError =  document.getElementById('washname-error');

//Phone number
const phonenumber = document.getElementById('phonenumber');
const phoneError =  document.getElementById('phonenumber-error');

//National ID
const nationalid = document.getElementById('nin');
const ninError =  document.getElementById('nin-error');

//Zawash ID
const zawashid = document.getElementById('zawashid');
const zawashidError =  document.getElementById('zawashid-error');

//D.O.B
const dob = document.getElementById('dob');
const dobError =  document.getElementById('dob-error');

//Gender
const gender = document.getElementById('gender');
const genderError =  document.getElementById('gender-error');

//Residence
const residence = document.getElementById('residence');
const resiError =  document.getElementById('residence-error');


//Submit Button sumbit-washer
const buttonWasher = document.getElementById('sumbit-washer');


//Check for empty fields
let checkEmpty =()=> {
       
    requiredInputs = [washername, phonenumber, nationalid, zawashid, dob, gender, residence]
    errorCounter = 0

    for(let i=0; i<requiredInputs.length; i++){
         if(requiredInputs[i].value==""){
             errorCounter ++
             requiredInputs[i].style.border="1px solid red"
             generalError[i].textContent='Please Enter Required Field';
         }         
    }

    if(errorCounter === 0){
        buttonWasher.setAttribute("type", "submit")
    }

    console.log(errorCounter);
}


//  buttonWasher.addEventListener('submit', checkEmpty)


//Validate Washer Name
 let namefocusin =()=> {
    washername.style.border="1px solid #ced4da"
    generalError[0].textContent=''
}

let nameInput =()=> {
    const nameEx = /^([A-Z][a-z])|([A-Z][a-z]+\s[A-Z][a-z]+)|([A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+)$/  

    if((washername.value.length > 8) && (nameEx.test(washername.value))) {
       washError.innerHTML='Looks fine';
       washError.style.color='green';
       washername.style.border="1px solid green"

    } else {
        washError.innerHTML='Must be 8 characters min starting with capital letter';
        washError.style.color='red';
        washername.style.border="1px solid red"
               
    }
}

let namefocusOut =()=> {
    washername.style.border="1px solid #ced4da"
    washError.innerHTML='';
}

washername.addEventListener('focusin', namefocusin)
washername.addEventListener('input', nameInput)
washername.addEventListener('focusout', namefocusOut)


//Validate Phone Number
 let phonefocusin =()=> {
    phonenumber.style.border="1px solid #ced4da"
    generalError[1].textContent=''
}

let phoneInput =()=> {
    const phoneEx = /^(07|03|04)[0-9]*$/

    if((phonenumber.value.length===10) && (phoneEx.test(phonenumber.value))) {
       phoneError.innerHTML='Looks fine';
       phoneError.style.color='green';
       phonenumber.style.border="1px solid green"
       
    } else {
        phoneError.innerHTML='Enter valid phone number e.g 077xxxxxxx';
        phoneError.style.color='red';
        phonenumber.style.border="1px solid red"     
         
    }
}

let phonefocusOut =()=> {
    phonenumber.style.border="1px solid #ced4da"
     phoneError.innerHTML='';
}

phonenumber.addEventListener('focusin', phonefocusin)
phonenumber.addEventListener('input', phoneInput)
phonenumber.addEventListener('focusout', phonefocusOut)


//Validate National ID
 let ninfocusin =()=> {
    nationalid.style.border="1px solid #ced4da"
    generalError[2].textContent=''
}

let ninInput =()=> {
    const ninRegex = /^C([A-Z]{1})([0-9A-Z])+$/

    if((nationalid.value.length===14) && (ninRegex.test(nationalid.value))) {
       ninError.innerHTML='Looks fine';
       ninError.style.color='green';
       nationalid.style.border="1px solid green"
    } else {
        ninError.innerHTML='Enter valid NIN number';
        ninError.style.color='red';
        nationalid.style.border="1px solid red"         
    }
}

let ninfocusOut =()=> {
    nationalid.style.border="1px solid #ced4da"
    ninError.innerHTML='';
}

nationalid.addEventListener('focusin', ninfocusin)
nationalid.addEventListener('input', ninInput)
nationalid.addEventListener('focusout', ninfocusOut)

//Validate Zawash Employee ID
 let zafocusin =()=> {
    zawashid.style.border="1px solid #ced4da"
    generalError[3].textContent=''
}

let zaInput =()=> {
    const zwashRegex = /^Zwash+[0-9]{3}$/

    if(zwashRegex.test(zawashid.value)) {
       zawashidError.innerHTML='Looks fine';
       zawashidError.style.color='green';
       zawashid.style.border="1px solid green"

    } else {
        zawashidError.innerHTML='Enter valid Employer ID e.g Zwashxxx';
        zawashidError.style.color='red';
        zawashid.style.border="1px solid red"
         
    }
}

let zafocusOut =()=> {
    zawashid.style.border="1px solid #ced4da"
    zawashidError.innerHTML='';
}

zawashid.addEventListener('focusin', zafocusin)
zawashid.addEventListener('input', zaInput)
zawashid.addEventListener('focusout', zafocusOut)


//Validate Date
 let datefocusin =()=> {
    dob.style.border="1px solid #ced4da"
    generalError[4].textContent=''
}

let datefocusOut =()=> {
    dob.style.border="1px solid #ced4da"
    dobError.innerHTML='';
}

dob.addEventListener('focusin', datefocusin)
dob.addEventListener('focusout', datefocusOut)

//Validate gender
 let genderFocusin =()=> {
    gender.style.border="1px solid #ced4da"
    generalError[5].textContent=''
}

let genderInput =()=> {
    if(gender.value!='') {
       genderError.innerHTML='Looks fine';
       genderError.style.color='green';
       gender.style.border="1px solid green" 
    } else {
        genderError.innerHTML='Choose Gender'
        gender.style.color='red';         
    }
}

let genderfocusOut =()=> {
    gender.style.border="1px solid #ced4da"
    genderError.innerHTML='';
}

gender.addEventListener('focusin', genderFocusin)
gender.addEventListener('focusin', genderInput)
gender.addEventListener('focusout', genderfocusOut)

//Validate Residence
 let resiFocusin =()=> {
    residence.style.border="1px solid #ced4da"
    generalError[6].textContent=''
}

let resiInput =()=> {
    const resiEx = /^[A-Za-z]+$/  

    if((residence.value.length > 5) && (resiEx.test(resiEx.value))) {
       resiError.innerHTML='Looks fine';
       resiError.style.color='green';
       residence.style.border="1px solid green"  
    } else {
        resiError.innerHTML='Must be atleast 5 characters starting with capital letter';
        resiError.style.color='red';
        residence.style.border="1px solid red"          
    }
}

let resifocusOut =()=> {
    residence.style.border="1px solid #ced4da"
    resiError.innerHTML='';
}

residence.addEventListener('focusin', resiFocusin)
residence.addEventListener('input', resiInput)
residence.addEventListener('focusout', resifocusOut)


//REGISTER CAR VALIDATIONS

//Number Plate
const numberplate = document.getElementById('numberplate');
const numplateError =  document.getElementById('numberplate-error');

//Car type
const cartype = document.getElementById('cartype');
const cartypeError =  document.getElementById('cartype-error');

//Date of Arrival
const doa = document.getElementById('doa');
const doaError =  document.getElementById('doa-error');

//Time Of Arrival
const toa= document.getElementById('toa');
const toaError =  document.getElementById('toa-errorr');

//Package
const package = document.getElementById('select-package');
const packageError =  document.getElementById('package-error');

//Assigne Washer
const assigned = document.getElementById('assigned')
const assignedError =  document.getElementById('assigned-error')

//Submit Button sumbit-washer
const buttonCar = document.getElementById('submit-car')

const carError = document.querySelectorAll('.car-error')


//Check for empty fields
let checkEmptyField =()=> {
       
    required = [numberplate, cartype, doa, toa, package, assigned]
    errorCounter = 0

    for(let i=0; i<required.length; i++){
         if(required[i].value==""){
             errorCounter ++
             required[i].style.border="1px solid red"
             carError[i].textContent='Please Enter Required Field';
         }         
    }

    if(errorCounter === 0){
        buttonCar.setAttribute("type", "submit")
    }

    console.log(errorCounter);
}

//Validate Number Plate
 let numFocusIn =()=> {
    numberplate.style.border="1px solid #ced4da"
    carError[0].textContent=''
}

let numInput =()=> {
    const numbRegex = /^U([A-E]{1})([A-Z]{1})[0-9]{3}[A-Z]$/

    if(numbRegex.test(numberplate.value)) {
       numplateError.innerHTML='Looks fine'
       numplateError.style.color='green'
       numberplate.style.border="1px solid green"

    } else {
        numplateError.innerHTML='Enter valid number plate e.g UAAxxxH'
        numplateError.style.color='red'
        numberplate.style.border="1px solid red"
               
    }
}

let numfocusOut =()=> {
    numberplate.style.border="1px solid #ced4da"
    numplateError.innerHTML='';
}

numberplate.addEventListener('focusin', numFocusIn)
numberplate.addEventListener('input', numInput)
numberplate.addEventListener('focusout', numfocusOut)

//Validate Car Type
let carFocusin =()=> {
    cartype.style.border="1px solid #ced4da"
    carError[1].textContent=''
}

let carInput =()=> {
    const cartypeEx = /^[A-Za-z]+\s[A-Za-z]$/ 

    if(cartypeEx.test(cartype.value)) {
       cartypeError.innerHTML='Looks fine';
       cartypeError.style.color='green';
       cartype.style.border="1px solid green"  
    } else {
        cartypeError.innerHTML='Should start with capital letter';
        cartypeError.style.color='red';
        cartype.style.border="1px solid red"          
    }
}

let carfocusOut =()=> {
    cartype.style.border="1px solid #ced4da"
    cartypeError.innerHTML='';
}

cartype.addEventListener('focusin', carFocusin)
cartype.addEventListener('input', carInput)
cartype.addEventListener('focusout', carfocusOut)

//Validate Date of Arrival
 let doaFocusIn =()=> {
    doa.style.border="1px solid #ced4da"
    carError[2].textContent=''
}

let doafocusOut =()=> {
    doa.style.border="1px solid #ced4da"
    doaError.innerHTML='';
}

doa.addEventListener('focusin', doaFocusIn)
doa.addEventListener('focusout', doafocusOut)

//Validate Time of Arrival
 let toaFocusIn =()=> {
    toa.style.border="1px solid #ced4da"
    carError[3].textContent=''
}

let toafocusOut =()=> {
    toa.style.border="1px solid #ced4da"
    toaError.innerHTML='';
}

toa.addEventListener('focusin', toaFocusIn)
toa.addEventListener('focusout', toafocusOut)

//Validate packages
 let packageFocusIn =()=> {
    package.style.border="1px solid #ced4da"
    carError[4].textContent=''
}

let packageInput =()=> {
     if(package.value==='') {
        packageError.innerHTML='Must be atleast 5 characters starting with capital letter';
        packageError.style.color='red';
        package.style.border="1px solid red"   
    } else {
        packageError.innerHTML='Looks fine';
        packageError.style.color='green';
        package.style.border="1px solid green"  
    }       
}

let packagefocusOut =()=> {
    package.style.border="1px solid #ced4da"
    packageError.innerHTML='';
}

package.addEventListener('focusin', packageFocusIn)
package.addEventListener('input', packageInput)
package.addEventListener('focusout', packagefocusOut)


//Validate Select
 let assignFocusIn =()=> {
    assigned.style.border="1px solid #ced4da"
    carError[5].textContent=''
}

let assignInput =()=> {
     if(assigned.value==='') {
        assignedError.innerHTML='Must be atleast 5 characters starting with capital letter';
        assignedError.style.color='red';
        assigned.style.border="1px solid red"   
    } else {
        assignedError.innerHTML='Looks fine';
        assignedError.style.color='green';
        assigned.style.border="1px solid green"  
    }       
}

let assignfocusOut =()=> {
    assigned.style.border="1px solid #ced4da"
    assignedError.innerHTML='';
}

assigned.addEventListener('focusin', assignFocusIn)
assigned.addEventListener('input', assignInput)
assigned.addEventListener('focusout', assignfocusOut)