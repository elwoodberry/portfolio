/*
CARD SPIN
Used for the login, register and forgot password.

*/
(function(){

  const cardSignIn = document.getElementById('card-signin');
  const cardCreate = document.getElementById('card-create');
  const cardForgot = document.getElementById('card-forgot');
  const cardSignInClassList = cardSignIn.classList;
  const cardForgotClassList = cardForgot.classList;
  const cardCreateClassList = cardCreate.classList;
  const siginLinkForgotPassword = document.getElementById('link-sigin-forgot-password');
  const siginLinkCreateAccount = document.getElementById('link-sigin-create-account');
  const forgotLinkSignIn = document.getElementById('link-forgot-signin');
  const createLinkSignIn = document.getElementById('create-link-signin');

  siginLinkForgotPassword.addEventListener("click", () => {
    let checkSignIn = cardSignInClassList.contains('hide');

    if(!checkSignIn){
      cardSignInClassList.add('hide');
      cardForgotClassList.remove('hide');
    }
  });

  siginLinkCreateAccount.addEventListener("click", () => {
    let checkSignIn = cardSignInClassList.contains('hide');

    if(!checkSignIn){
      cardSignInClassList.add('hide');
      cardCreateClassList.remove('hide');
    }
  });

  forgotLinkSignIn.addEventListener("click", () => {
    let checkCardForgot = cardForgotClassList.contains('hide');
    if(!checkCardForgot){
      cardForgotClassList.add('hide');
      cardSignInClassList.remove('hide');
    }
  });

  createLinkSignIn.addEventListener("click", () => {
    let checkCardCreate = cardCreateClassList.contains('hide');
    if(!checkCardCreate){
      cardCreateClassList.add('hide');
      cardSignInClassList.remove('hide');
    }
  });



})();

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
