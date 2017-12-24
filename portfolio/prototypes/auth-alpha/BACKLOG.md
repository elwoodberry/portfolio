# Task Backlog
App Access (ALPHA)

## Incomplete Tasks

1. [Add jQuery form validation](#add-jquery-form-validation)
1. [Encapsulate javascript files](#encapsulate-javascript-files)
1. [Re-write in ES6](#re-write-in-es6)
1. [SMS Confirmation](#sms-confirmation)

## Completed Tasks
1. [Add Simple Dashboard](#add-simple-dashboard)
1. [Style Flash Messages](#style-flash-messages)
---
---
---

## Style Flash Messages
**STATUS:** Incomplete  

## Add jQuery form validation
**STATUS:** Incomplete  
1. If you click in the field(focus) and the click out of the field and it is blank, the field should turn red or whatever the theme color is for 'warning'.
1. The phone field should be limited to 7 numbers
1. The phone field should auto include the parentheses
1. Password should be
    1. 8-16 character requirement
    1. letters and numbers
    1. include one special character


## Encapsulate javascript files
**STATUS:** Incomplete  
To encapsulate and then to concatenate them into one single 'main.js' file in the public directory.   

Add [Gulp Concat](https://www.npmjs.com/package/)
```
$ npm install --save-dev gulp-concat
```

## Re-write in ES6
**STATUS:** Incomplete

### APP.JS
### GULP FILE

Babel Core
```
$ npm install --save-dev babel-core
```
Add [Gulp Babel](https://www.npmjs.com/package/gulp-babel)
```
$ npm install --save-dev gulp-babel babel-preset-env
```

## Add Simple Dashboard
**STATUS:** ~~Complete~~  
This demo is only focused on the login, register and forgot password. To see more complex versions of dashboards, [add a link here](#).  

Simple Jumbotron(pug)
```
.jumbotron
  h1(class="display-3") Jumbotron heading

  p(class="lead") Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

  p
    a(class="btn btn-lg btn-success" href="#" role="button") Sign Out
```

## SMS Confirmation
**STATUS:** Incomplete
 
