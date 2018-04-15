** Created by Akomolafe Tosin (gettosin4me@gmail.com) **

# Procedure
>
>`npm install`
>
>`npm run serve:dev`
>
>`port 3000`

### Create data
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

### Fetch data
* `GET` http://127.0.0.1:3000/read/:id 

### Update data
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
### Delete data
* `DELETE` http://127.0.0.1:3000/delete/:id 