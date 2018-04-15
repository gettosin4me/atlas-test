** Created by Akomolafe Tosin (gettosin4me@gmail.com) **

# Procedure
>
>`npm install`
>
>`npm run serve:dev`
>
>`port 3000`

### create data
* `POST` http://127.0.0.1:3000/create
```
{
	"id": "mercy1",
	"name": "mercy",
	"school": "futminna",
	"level": "400",
	"age": "23"
}
```

### fetch data
* `GET` http://127.0.0.1:3000/read/:id 

### update data
* `PUT` http://127.0.0.1:3000/update/:id 
```
{
	"id": "mercy1",
	"name": "mercy",
	"school": "futminna",
	"level": "400",
	"age": "23"
}
```
### delete data
* `DELETE` http://127.0.0.1:3000/delete/:id 