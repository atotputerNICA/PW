# PW
:sparkles: The Secret Garden - Flower Shop

### Prerequisites
* [Heroku](https://signup.heroku.com/signup/dc) account and [installed locally](https://cli-assets.heroku.com/heroku-x64.exe).
* [Php](http://php.net/) installed locally.
* [Composer](https://getcomposer.org/doc/00-intro.md) installed locally.

### Set up
```bash
> heroku login
> php -v
> composer -V
> git --version
```

### Prepare the app
* **composer.json** indicates to Heroku that your application is written in **PHP**
* **Procfile**, a text file in the root directory of the application, to explicitly declare what command should be executed to start the app

### Deploy the app
```bash
> heroku create #Create an app on Heroku, which prepares Heroku to receive your source code
> git push heroku master # Deploy the code
> heroku open #  Open the website
> heroku logs --tail # View logs
```

### Documentation
* [Getting Started on Heroku with PHP](https://devcenter.heroku.com/articles/getting-started-with-php)
