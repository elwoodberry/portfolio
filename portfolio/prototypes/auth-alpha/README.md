# App Access (ALPHA)

## Single Page Access
This view combines three forms (Sign In, Registration & Forgot Password) into one using CSS's translate and back face visibility.

### Sign In
As An End User, I have the ability to:
1. Learn more about becoming a registered user of this application.
1. Sign into an existing account.
1. Provide my username associated with my registered account.
1. Provide my password associated with my registered account.
1. Have my access be cached in my browser so the app "Remembers" me.
1. Submit my username and password to access my account.
1. Learn more about the terms of use for this application.
1. Learn more about the privacy policy for this application.
1. Gain help if I have forgotten my username or password.
1. Create an account for this application
1. Learn more about other legal terms, policies and/or security terms.

Sign In   | Transition    
:---   | :---:   
![image](https://raw.github.com/elwoodberry/portfolio/master/_img/app-access-alpha__01.png)   | ![image](https://raw.github.com/elwoodberry/portfolio/master/_img/app-access-alpha__02.png)


## Passport Integration
The HTML UI/UX is all set and now I want to "make it work" up until the point where it needs a database to connenct to. To see a working model of this [go here](link).


### Dependencies

```
// PACKAGES
var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    pug = require('pug'),
    expressValidator = require('express-validator'),
    flash = require('connect-flash'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongo = require('mongodb'),
    mongoose = require('mongoose');
```
bcryptjs
body-parser
connect-flash
cookie-parser
express
express-messages
express-session
express-validator
mongodb
mongoose
passport
passport-http
passport-local
pug


### Models


## Inspiration
1. [Mint](https://www.mint.com/)'s login/sign up UI workflow.
1. [Venmo](https://www.mint.com/)
1. [LearnVest](https://www.mint.com/)
1. [LevelMoney](https://www.mint.com/)
1. [Qapital](https://www.mint.com/)
1. [Paypal](https://www.mint.com/)
1. [BudgetBoss](https://www.mint.com/)
1. [Stash](https://www.mint.com/)
