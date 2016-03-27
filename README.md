# django_example_code
A simple project using ShimmerCat and Django

## Installing and running the `Django` project
We recomend to use a python virtual environment to keep the project dependencies there:

```
$ virtualenv venv
```
Now you have created the virtualenv, let's activate it:

```
$ source venv/bin/activate
```

Once done that let's clone the respository, and set it up to have the project ready to use:

```
$ git clone git@github.com:shimmercat/django_example_code.git
```

```
$ cd django_example_code
```

Installing project dependencies:
```
$ pip install -r requirements.txt
```

Let's then run the migrations:
```
$ python django_api/managey.py migrate --noinput
```

Now you can run the `Django` project:
```
$ python django_api/managey.py runserver 8080
```
The `API` is now ready to use.

## The client with `ShimmerCat`
Now you just need to open a new command line tab, and run the project with `ShimmerCat`:
```
$ cd /to/where/devlove.yaml/file/is/
```
```
$ shimmercat devlove
```
Now we should open `Chrome` with `sc-tool`:
```
sc-tool chrome
```

Go to `Chrome`, and reach the site under https://www.httpdos.com, and play with it.

