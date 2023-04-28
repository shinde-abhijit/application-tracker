// username,email,mobile,date,website,password,position,details,submit
// errorUsername,errorEmail,errorMobile,errorDate,errorWebsite,errorPassword,errorPosition,errorDetails,errorSubmit
var errorUsername = document.getElementById("errorUsername");
var errorEmail = document.getElementById("errorEmail");
var errorMobile = document.getElementById("errorMobile");
var errorDate = document.getElementById("errorDate");
var errorWebsite = document.getElementById("errorWebsite");
var errorPassword = document.getElementById("errorPassword");
var errorPosition = document.getElementById("errorPosition");
var errorDetails = document.getElementById("errorDetails");
var errorSubmit = document.getElementById("errorSubmit");


// var iconValid = '<i class="fa-solid fa-circle-check"></i>'; //<- use this if connected to internet

var iconloc;
iconloc.image = './Valid-check.png'; //<-this for offline

function validateusername() {
    var username = document.getElementById("username").value;

    if (username.length == 0) {
        errorUsername.innerHTML = "Required Field.";
        return false;
    }
    if (username.length <= 7) {
        errorUsername.innerHTML = "Atleast 8 Character's.";
        return false;
    }
    
    errorUsername.innerHTML = iconloc;
    return true;
}

function validateemail() {
    var email = document.getElementById("email").value;
    
    if (email.length == 0) {
        errorEmail.innerHTML = "Required Field.";
        return false;
    }
    //if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorEmail.innerHTML = "Not an email address";
        return false;
    }
    errorEmail.innerHTML = iconloc;
    return true;
}

function validatemobile() {
    var mobile = document.getElementById("mobile").value;

    if (mobile.length == 0 && mobile.length !== 10) {
        errorMobile.innerHTML = "Required Field.";
        return false;
    }
    if (!mobile.match(/^[0-9]{10}$/)) {
        errorMobile.innerHTML = "Numeric Only";
        return false;
    }
    errorMobile.innerHTML = iconloc;
    return true;
}



function validatewebsite() {
  var website = document.getElementById("website").value;
    if (website == 0) {
        errorWebsite.innerHTML = "Required Field.";
        return false;
    }
    if (website === 'http://www.') {
        errorWebsite.innerHTML = "http://www.";
        return false;
    }
    if (website.length <= 11) {
        errorWebsite.innerHTML = "";
        return false;
    }
  errorWebsite.innerHTML = iconloc;
  return true;
}

function validatepassword() {
  var password = document.getElementById("password").value;
  if (password.length == 0) {
    errorPassword.innerHTML = "Required Field.";
    return false;
  }
  if (password.length <= 12) {
    errorPassword.innerHTML = "Minimum 12 Character's.";
    return false;
  }
  errorPassword.innerHTML = iconloc;
  return true;
}


function validateposition() {
  var position = document.getElementById("position").value;
  if (position.length == 0) {
    errorPosition.innerHTML = "Required Field.";
    return false;
  }
  if (position.length <= 5) {
    errorPosition.innerHTML = "Enter Post Name.";
    return false;
  }
  errorPosition.innerHTML = iconloc;
  return true;
}


function validatedetails() {
  var details = document.getElementById("details").value;
  var reqChars = 30;
  var leftChars = reqChars - details.length;

  if ( leftChars > 0) {
    errorDetails.innerHTML = leftChars + " remaining chars.";
    return false;
  }
  errorDetails.innerHTML = iconloc;
  return true;
}

function validateform() {
    if (
        !validateusername() || !validateemail() || !validatemobile()
        || !validatewebsite() || !validatepassword()
        || !validateposition() || !validatedetails() ) {
            errorSubmit.style.display = "block";
            errorSubmit.innerHTML = "Fix error's.";
            setTimeout(function () { errorSubmit.style.display = "none"; }, 5000);
            return false;
        }
    }

  