
var error_m = document.getElementById("error_m");
var error_pwd = document.getElementById("error_pwd");
var email = document.getElementById("inputEmail4");
var pwd = document.getElementById("inputPassword4");



let regexp_m = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
// let regexp_pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/



 function validate(){
 

     // Validation for email
     if(regexp_m.test(email.value))
    {
        return true;
    }
    else
    {
        error_m.innerHTML = "Invalid Email entered, sample abcd@xyz.com or abcd@xyz.co.in";
        error_m.style.color = "red";
        return false;
    }

    //Validation for Password
    // if(pwd.value.length <= 8)
    // {   
    //     progress.removeAttribute("hidden", "true");
    //     strength1.removeAttribute("hidden", "true");
    //     comment.innerText = "Weak Password; Minimum 8 characters required";
    //     result = result && false;
    // }
    // else if(regexp_pwd.test(pwd.value))
    // {
    //     comment.innerText = "Strong Password: Good to go!!";
    //     progress.removeAttribute("hidden", "true");
    //     strength1.removeAttribute("hidden", "true");
    //     strength2.removeAttribute("hidden", "true");
    //     strength3.removeAttribute("hidden", "true");
    //     result = result && true;
    //       }
    // else 
    // {
    //     progress.removeAttribute("hidden", "true");

    //     strength1.removeAttribute("hidden", "true");
    //     strength2.removeAttribute("hidden", "true");

    //     comment.innerText = "Medium Password: Try adding atleast one uppercase, one lower case, one number";
    //     result = result && false;
     // }  
    //    return result;
}









 
