const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite');
const moment = require('moment');

const app = express();
app.use(express.json());
app.use(cors());

//Egna värden att använda till våra anrop

//Formatera moment att vara svensk
moment.locale('sv');
//Använd currentDate för att få ut dagens datum
let currentDate = moment().format('L');


//Importera databasen
let database;

sqlite.open('databas.sqlite').then(data => {
    database = data;
})

app.get('/date', (request, response) => {
        response.send(currentDate);
})

//GET anrop
app.get('/users', (request, response) => {
    database.all('select * from users')
    .then(users => {
        response.send(users);
    })
})

app.get('/users/:user', (request, response) => {
    database.all('select * from users where username=?', [request.params.user])
    .then(user => {
        response.send(user);
    })
})

app.get('/article', (request, response) => {
    database.all('select * from article')
    .then(article => {
        response.send(article);
    })
})

app.get('/article/:articleId', (request, response) => {
    database.all('select * from article where articleId=?', [request.params.articleId])
    .then(articleId => {
        response.send(articleId);
    })
})

//POST anrop
app.post('/register', (request, response) => {
    database.run('insert into users (username, password, userEmail) values (?, ?, ?)', 
    [request.body.username, request.body.password, request.body.userEmail])
    .then(() => {
        response.send('En användare har skapats!');
    })
    .catch(e => {
        response.status(409).send();
    })
})

//TODO: Måste fixa så author görs automatiskt och inte manuellt!
app.post('/article/new', (request, response) => {
    database.run('insert into article (title, content, dateCreated, author, summary, profession) values (?, ?, ?, ?, ?, ?)', 
    [request.body.title, request.body.content, currentDate, request.body.author, request.body.summary, request.body.profession])
    .then(() => {
        response.send('Ett nytt inlägg har skapats!');
    })
    .catch(e => {
        response.status(409).send();
    })
})

//PUT anrop TODO: Dessa fungerar inte som dem ska!!! Dem tar bort allt!!!
//Jag kunde skapa en användare och redigare med users/edit/:username samt /profile/edit/:username, du kanske är inkompetent?
app.put('/users/edit/:username', (request, response) => {
    database.run('UPDATE users SET userEmail=?, password=? where username=?', 
    [request.body.userEmail, request.body.password, request.params.username])
    .then(() => {
        response.send(`Användaren ${request.params.username} uppdaterades!`);
    })
})

app.put('/profile/edit/:username', (request, response) => {
    console.log(request.body)
    database.run('update users set profileName=?, profileDescription=?, profilePicture=?, profileMerits=? where username=?', 
    [request.body.profileName, request.body.profileDescription, request.body.profilePicture, request.body.profileMerits, request.params.username])
    .then(() => {
        response.send('Du uppdaterade en användare!');
    })
})

app.put('/article/edit/:articleId', (request, response) => {
    database.run('UPDATE article SET title=?, content=? WHERE articleId=?', 
    [request.body.title, request.body.content, request.params.articleId])
    .then(() => {
            response.status(202).send('Du uppdaterade en artikel!');
    })
})

//DELETE anrop
app.delete('/users/delete/:username', (request, response) => {
    database.run('delete from users where username=?', [request.params.username])
    .then(() => {
        response.send('Du tog bort en användare!');
    })
})

app.delete('/article/delete/:articleId', (request, response) => {
    database.run('delete from article where articleId=?', [request.params.articleId])
    .then(() => {
        response.send('Du tog bort en artikel!');
    })
})

app.listen(3000);