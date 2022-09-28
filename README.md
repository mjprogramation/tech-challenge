# Tech Challenge Laravel App

## Installation
First clone this repository.
```bash
$ git clone git@github.com:mjprogramation/tech-challenge.git
```
### Backend
install dependencies, run
```bash
$ composer install
```
copy the .env.example to .env
```bash
$ cp .env .env.example 
```

adjust your database credentials and generate application key

```bash
$ php artisan key:generate
```

then run migration 
```bash
$ php artisan migrate
```

then serve app using builtin server
```bash
$ php artisan serve
```
if you are working with docker and you don't have php installed on your computer run :
```bash
$ docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

and use `vendor/bin/sail artisan` instead of `php artisan`

## Front end

Install dependencies with 
```bash
$ npm install
```
I use webpack and babel to compile my file into a bundle in `public/js`, to make any changes you need to run the compiler (keept runing)
```bash
$ npm start
```
for production 
```bash
$ npm run prod
```

to update tailwind css or to rebuild use (keept runing)
```bash
$ npm run tailwind
```



