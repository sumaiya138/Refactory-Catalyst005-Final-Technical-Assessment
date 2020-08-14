// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
const clientdetailsform=document.getElementById('formreg')
// Defining a function to validate form 
clientdetailsform.addEventListener('submit' ,(event)=>{

// Defining a function to validate form 
// function validateForm() {
    // Retrieving the values of form elements 
    var surname = document.form.surname.value;
    var givenname = document.form.givenname.value;
    var dateofbirth = document.form.dateofbirth.value;
    var placeofbirth = document.form.placeofbirth.value;
    var occupation = document.form.occupation.value;
    var nattionality = document.form.nationality.value;
    

    // Defining error variables with a default value
    var surnameErr =  gievenErr = dateofbirthErr = paceofbirthErr = occupationErr = nationalityErr = true;
    
    // Validate sur name
    if(surname == "") {
        printError("surnameErr", "This field is required");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(surname) === false) {
            printError("surnameErr", "This field is required");
        } else {
            printError("surErr", "");
            surnameErr = false;
        }
    }

//     // // Validate sur name
//     // if(surname == "") {
//     //     printError("surnameErr", "Please enter your sur name");
//     // } else {
//     //     var regex = /^[a-zA-Z\s]+$/;                
//     //     if(regex.test(surname) === false) {
//     //         printError("surnameErr", "Please enter a valid sur name");
//     //     } else {
//     //         printError("surnameErr", "");
//     //         surnameErr = false;
//     //     }
//     // }

//     // Validate email address
//     if(email == "") {
//         printError("emailErr", "Please enter your email address");
//     } else {
//         // Regular expression for basic email validation
//         var regex = /^\S+@\S+\.\S+$/;
//         if(regex.test(email) === false) {
//             printError("emailErr", "Please enter a valid email address");
//         } else{
//             printError("emailErr", "");
//             emailErr = false;
//         }
//     }
    
//     // // Validate phone number
//     // if(phonenumber == "") {
//     //     printError("phonenumberErr", "Please enter your phone number");
//     // } else {
//     //     var regex = /^[1-9]\d{9}$/;
//     //     if(regex.test(phonenumber) === false) {
//     //         printError("phonenumberErr", "Please enter a valid 10 digit phone number");
//     //     } else{
//     //         printError("phonenumberErr", "");
//     //         phonenumberErr = false;
//     //     }
//     // }
    
    
    
//     // Prevent the form from being submitted if there are any errors
// //     if((firstnameErr || surnameErr || emailErr || phonenumberErr) == true) {
// //       // return false;
// //     // } else
// // };

// // Prevent the form from being submitted if there are any errors
if(
    //(firstnameErr || surnameErr || emailErr || usernameErr) == true
    (surtnameErr) == true) {
    //return false; 
    event.preventDefault()
 } else {
     event.currentTarget.submit()
 }
// }
});