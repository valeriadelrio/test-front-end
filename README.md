# ResourceAivo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run npm install when the project is cloned.

Run `json-server --watch db.json` to execute the server (mock back-end). This will run in http://localhost:3000

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Specifications

Resource Aivo contains: 
* Social Login with Google and Facebook using angularx-social-login library. *See extra considerations*
* Unit test with a coverage greater than 80%.
* I18n support. The language will be the one defined on the browser. The supported language are English & Spanish. By default the language is English.

## Extra Considerations

As the Facebook app is still in development you should use the following testing user for login:
```
email: aivo_rjvrgku_test@tfbnw.net
password: 1*2*3*4*5*6*
```