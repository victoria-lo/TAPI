<img src="https://github.com/victoria-lo/TAPI/blob/master/uploads/tea.gif?raw=true">

## Table of contents 👀
* [General info](#general-info)
* [Technologies](#technologies)
* [Blog](#blog)
* [Setup](#setup)


### General info
TAPI or T-API is a Tea REST API made to show some love for the beverage. 

#### The TEA Object 🍵
| Properties | Description | Type  |
|:----------- |:---------------|:--------|
|name| the tea name | String| 
|image| an image url | String |
|description| the description | String | 
|keywords|words associated with the tea  |String | 
|origin|country where the tea is first made | String| 
|brew_time|time to brew in minutes | Number | 
|temperature|best temperature in Celsius to drink | Number | 
|comments|any comments posted about the tea |Array of String | 

#### Routes ⚡
| Routes | HTTP Methods| Description
|:------- |:---------------|:--------------
| /tea      | GET                  | Displays all tea
| /tea      | POST               | Creates a new tea
| /tea      | DELETE            | Deletes all tea
|/tea/:name| GET     | Displays a specific tea, given its name
|/tea/:name| POST  | Adds a comment to a specific tea, given its name
|/tea/:name| DELETE | Deletes a specific tea, given its name
	
### Technologies
Project is created with:
<p>
<img src="https://img.shields.io/badge/-MongoDB%20-1AA121?style=for-the-badge&logo=mongodb&logoColor=green">
<img src="https://img.shields.io/badge/-Expressjs%20-%23323330?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react" >   
<img src="https://img.shields.io/badge/-Nodejs%20-%23323330?style=for-the-badge&logo=Node.js&logoColor=green">
</p>

* Node version: 16.18.0
* Express version: 4.18.2
* Mongoose version: 6.8.0
* Multer version: 1.4.5
* MongoDB Atlas

### How I built it
👉 [Check out the series here!](https://hashnode.com/series/lets-build-a-nodejs-rest-api-ckcov1aob00dcfms19o5g2x42)


### Setup
To run this project locally, clone repo and add an `.env` file in the root:
```
MONGODB_URI='mongodb+srv://username:password@cluster0.eetsx.mongodb.net/database_name'
```

Then execute in command prompt:
```
$ cd tapi
$ npm install
$ npm start or node server.js
```

### Next Steps
- Populate database (DONE)
- Make a simple PWA using this API (DONE - https://victoria-lo.github.io/Hashtag-TEA/)
	
