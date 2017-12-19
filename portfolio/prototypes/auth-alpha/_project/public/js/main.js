const cardSignIn = document.getElementById('card-signin');
const cardCreate = document.getElementById('card-create');
const cardForgot = document.getElementById('card-forgot');
const linkForgotPassword = document.getElementById('link-forgot-password');
const linkCreateAccount = document.getElementById('link-create-account');

linkForgotPassword.addEventListener("click", () => {
  let cardSignInClassList = cardSignIn.classList;
  let cardForgotClassList = cardForgot.classList;
  let checkSignIn = cardSignInClassList.contains('hide');
  let checkForgot = cardForgotClassList.contains('hide');

  if(!checkSignIn){
    cardSignInClassList.add('hide');
    cardForgotClassList.remove('hide');
  }
});

linkCreateAccount.addEventListener("click", () => {
  let cardSignInClassList = cardSignIn.classList;
  let cardCreateClassList = cardCreate.classList;
  let checkSignIn = cardSignInClassList.contains('hide');
  let checkCreate = cardCreateClassList.contains('hide');

  if(!checkSignIn){
    cardSignInClassList.add('hide');
    cardCreateClassList.remove('hide');
  }
});
