/*
PRE VALIDATION
Meeting form requirements before you submit.
*/
(function(){

  // BUTTONS
  const signinBtn = document.getElementById('link-sigin-privacy-statement');
  const registerBtn = document.getElementById('create-an-account');
  const forgotBtn = document.getElementById('btn-forgot-continue');

  // FORM FIELDS
  const signinUsername = document.getElementById('signinUsername');
  const signinPassword = document.getElementById('signinPassword');

  signinBtn.addEventListener('click', () => {
    console.log('Sign Button Was Clicked...');
  });

  registerBtn.addEventListener('click', () => {
    console.log('Register Button Was Clicked...');
  });

  forgotBtn.addEventListener('click', () => {
    console.log('Forgot Button Was Clicked...');
  });

  function myFunction(x) {
      x.style.background = "yellow";
  }
  
  function preValidUsername(x) {
    x.style.background = "yellow";
    console.log('Sign In Username Input...');
  }

  function preValidPassword(x) {
    x.style.background = "yellow";
    console.log('Sign In Password Input...');
  }

})();
