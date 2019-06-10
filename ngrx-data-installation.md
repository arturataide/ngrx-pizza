# Add @ngrx/data to the project

## Update Angular from 7 to 8
(required to @ngrx/store:8.0.0)

[Official Guide](https://update.angular.io/#7.0:8.0) - Please read the Offial Guide carefully since there is some changes.

### Steps:

* Update node v12 or greater:

  * through `nvm`, [StackOverflow topic](https://stackoverflow.com/questions/34810526/how-to-properly-upgrade-node-using-nvm) ; or
  * `brew upgrade node`

* Update to angular 8
 
  * `ng update @angular/cli @angular/core @angular/cdk @angular/flex-layout`

* Update angular-material
  * `ng update @angular/material`

## Update Store and install @ngrx/data

* Update store components
  * `ng update @ngrx/store @ngrx/entity @ngrx/effects`

* Install @ngrx/date
  * `npm install --save @ngrx/data`