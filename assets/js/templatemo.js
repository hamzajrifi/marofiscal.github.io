'use strict';

//star nav bar
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      var navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});
/** end nav bar **/

/** star wizard **/

// Current tab is set to be the first tab (0)
// Display the current tab
var currentTab;
function showTab(n) {
  currentTab = n;
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Suivant";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // this from textbox Nature du rendez-vous //
  var securityQuestionElement = document.getElementById('Naturedurendezvous');
  if (!securityQuestionElement.value) {
    window.alert('You must select a Nature du rendez-vous');
    securityQuestionElement.value = ''
    return false;
  }
  // this from textbox Vousetes //
  var securityQuestionElement = document.getElementById('Vousetes');
  if (!securityQuestionElement.value) {
    window.alert('You must select a Vous etes');
    securityQuestionElement.value = ''
    return false;
  }

  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}


/** end wizard **/


function onTypeOfMeetingchange(event,typeOfMeeting) {
  document.getElementById('meeting-type-id').innerHTML = typeOfMeeting[event.value].text;
}

// function message_autre(event,typeOfMeeting) {
//   document.getElementById('meeting-type-id').innerHTML = typeOfMeeting[event.value].text;
// }

// this function from visble message box autre 
function message_autre(event,whoAreYou) {
  // var status = document.getElementById("Vousetes");
  // if (status.value == "833") {
  //   document.getElementById("Message_autre").style.display = "block";
  // }
  // else {
  //   document.getElementById("Message_autre").style.display = "none";
  // }

  document.getElementById('who-are-id').innerHTML = whoAreYou[event.value].text; 
}