var fname = document.getElementById("inputfirstname");
var sname = document.getElementById("inputsecondname");
var error_n = document.getElementById("error_n");
var error_m = document.getElementById("error_m");
var error_p = document.getElementById("error_p");
var error_pwd = document.getElementById("error_pwd");
var email = document.getElementById("inputEmail4");
var phone = document.getElementById("inputmobileno");
var pwd = document.getElementById("inputPassword4");
var strength1 = document.getElementById("strength1");
var strength2 = document.getElementById("strength2");
var strength3 = document.getElementById("strength3");
var comment = document.getElementById("comment");
var progress = document.getElementById("progress");
var RetypePassword = document.getElementById("RetypePassword");


// Validation for first name & second name
let regexp_n = /^([A-Za-z]+)$/
let regexp_m = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
let regexp_p = /^([0-9]{3})([\.-\s])?([0-9]{3})([\.-\s])?([0-9]{4})$/
let regexp_pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
var result;


 function validate(){
     if(regexp_n.test(fname.value) && regexp_n.test(sname.value)){
        result = true;
     }
     else{
         error_n.innerText="Invalid Enter only alphabets";
         error_n.style.color = "red";
         result= false;
     }

     // Validation for email
     if(regexp_m.test(email.value))
    {
        result =result && true;
    }
    else
    {
        error_m.innerHTML = "Invalid Email entered, sample abcd@xyz.com or abcd@xyz.co.in";
        error_m.style.color = "red";
        result =result && false;
    }

    //Validation for Phone Number
    if(regexp_p.test(phone.value))
        {
            result =result && true;
        }
        else
        {
            error_p.innerHTML = "Invalid phone number, try XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX, XXXXXXXXXX";
            error_p.style.color = "red";
            result =result && false;
        }

    //Validation for Password
    if(pwd.value.length <= 8)
    {   
        progress.removeAttribute("hidden", "true");
        strength1.removeAttribute("hidden", "true");
        comment.innerText = "Weak Password; Minimum 8 characters required";
        result = result && false;
    }
    else if(regexp_pwd.test(pwd.value))
    {
        comment.innerText = "Strong Password: Good to go!!";
        progress.removeAttribute("hidden", "true");
        strength1.removeAttribute("hidden", "true");
        strength2.removeAttribute("hidden", "true");
        strength3.removeAttribute("hidden", "true");
        result = result && true;
        
        
        
        // strength1.style.color="red";
        // strength2.style.color="orange";
        // strength3.style.color="green";

    }
    else 
    {
        progress.removeAttribute("hidden", "true");

        strength1.removeAttribute("hidden", "true");
        strength2.removeAttribute("hidden", "true");

        comment.innerText = "Medium Password: Try adding atleast one uppercase, one lower case, one number";
        result = result && false;
        
        // strength1.style.color="red";
        // strength2.style.color="orange";
    }
    

    // Validation for retype password
    if(RetypePassword.value != pwd.value){
        error_pwd.innerText = "Passwords Don't Match";
        result = result && false;
    }
    else
    {    
        error_pwd.innerText = "Passwords Match";
        result = result && true;
    }

       return result;
}









 
