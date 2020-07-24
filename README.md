
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
TAPI or T-API is a Tea REST API made to show some love for the beverage. 🍵

| Routes | HTTP Methods| Description
|:------- |:---------------|:--------------
| /tea      | GET                  | Displays all tea
| /tea      | POST               | Creates a new tea
| /tea      | DELETE            | Deletes all tea
|/tea/:name| GET     | Displays a specific tea, given its name
|/tea/:name| POST  | Adds a comment to a specific tea, given its name
|/tea/:name| DELETE | Deletes a specific tea, given its name
	
## Technologies
Project is created with:
* Node version: 12.14.1
* Express version: 4.17.1
* Mongoose version: 5.9.25 
* Multer version: 1.4.2 
* MongoDB Atlas

## Deployed at
* https://tea-api-vic-lo.herokuapp.com/
	
## Setup
To run this project, install it locally using npm:

```
$ cd tapi
$ npm install
$ npm start or node server.js
```
