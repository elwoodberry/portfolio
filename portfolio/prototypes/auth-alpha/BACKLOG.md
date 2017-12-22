# Task Backlog
App Access (ALPHA)

## Incomplete Tasks
1. [Style Flash Messages](#)
1. [Add jQuery form validation](#)
1. [Encapsulate javascript files](#)

## Completed Tasks
1. [Add Simple Dashboard](#add-simple-dashboard)

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

Add Gulp Uglify
```
$ npm install --save-dev gulp-uglify
```
Add Gulp Concat
```
$ npm install --save-dev gulp-concat
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
