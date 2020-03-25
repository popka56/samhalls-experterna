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

//Används för att få ut datum när det ska ske automatiskt
app.get('/date', (request, response) => {
        response.send(currentDate);
})

//===GET anrop===

//Hämta alla användare
app.get('/users', (request, response) => {
    database.all('select * from users')
    .then(users => {
        response.send(users);
    })
})

//Hämta användare baserat på användarnamn
app.get('/users/:user', (request, response) => {
    database.all('select * from users where username=?', [request.params.user])
    .then(user => {
        response.send(user);
    })
})

//Hämta alla artiklar utan sortering (sorteras efter senaste artikeln SIST)
app.get('/article', (request, response) => {
    database.all('select * from article')
    .then(articles => {
        response.send(articles);
    })
})

//Hämta artikel baserat på id
app.get('/article/id/:articleId', (request, response) => {
    database.all('select * from article where articleId=?', [request.params.articleId])
    .then(article => {
        response.send(article);
    })
})

//Hämta artiklar baserat på yrke (sorteras med senaste artikeln FÖRST)
//Eftersom arrayen i databsen automatiskt lägger in varje ny artikel efter den förra
//behöver vi bara använda reverse() för att få dem i ordning efter senaste först.
app.get('/article/profession/:profession', (request, response) => {
    database.all('select * from article where profession=?', [request.params.profession])
    .then(articles => {
        let sortedArticles = articles.reverse();
        response.send(sortedArticles);
    })
})

//Hämta artiklar baserat på en författare (sorteras med senaste artikeln FÖRST)
app.get('/article/author/:author', (request, response) => {
    database.all('select * from article where author=?', [request.params.author])
    .then(articles => {
        let sortedArticles = articles.reverse();
        response.send(sortedArticles);
    })
})

//Hämta och sortera alla artiklar (sorteras med senaste artikeln FÖRST)
app.get('/article/all', (request, response) => {
    database.all('select * from article')
    .then(articles => {
        let sortedArticles = articles.reverse();
        response.send(sortedArticles);
    })
})

//Hämta och sortera alla artiklar efter populäritet (clicks)
//Använder sort() för att jämföra vilken som har högst clicks, vilket gör att den läggs 
//i ordning efter vilken som har MINST clicks först. Därför gör vi en reverse() på den i 
//responsen, så den visar den med MEST först istället.
app.get('/article/popularity/all', (request, response) => {
    database.all('select * from article')
    .then(articles => {
        let sortedArticles = articles.sort(function(a, b){return a.clicks - b.clicks});
        response.send(sortedArticles.reverse());
    })
})

//Hämta och sortera artiklar efter populäritet (clicks) inom ett visst yrke
app.get('/article/popularity/profession/:profession', (request, response) => {
    database.all('select * from article where profession=?', [request.params.profession])
    .then(articles => {
        let sortedArticles = articles.sort(function(a, b){return a.clicks - b.clicks});
        response.send(sortedArticles.reverse());
    })
})

//Hämta och sortera artiklar efter populäritet (clicks) från en viss författare
app.get('/article/popularity/author/:author', (request, response) => {
    database.all('select * from article where author=?', [request.params.author])
    .then(articles => {
        let sortedArticles = articles.sort(function(a, b){return a.clicks - b.clicks});
        response.send(sortedArticles.reverse());
    })
})

//===POST anrop===

//Registrera nya användare, behöver användarnamn, lösenord och e-post
app.post('/register', (request, response) => {
    database.run('insert into users (username, password, userEmail, userCreatedDate) values (?, ?, ?, ?)', 
    [request.body.username, request.body.password, request.body.userEmail, currentDate])
    .then(() => {
        response.send('En användare har skapats!');
    })
    .catch(e => {
        response.status(409).send();
    })
})

//Skapar nya artiklar, behöver värden för titel, content, datum, författare (användarens namn), en summary och ett profession
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

//===PUT anrop===

//Ändra användarens e-mail och lösenord baserat på användarnamn
app.put('/users/edit/:username', (request, response) => {
    database.run('UPDATE users SET userEmail=?, password=? where username=?', 
    [request.body.userEmail, request.body.password, request.params.username])
    .then(() => {
        response.send(`Användaren ${request.params.username} uppdaterades!`);
    })
})

//ÄNdra profilvärden baserat på användarnamnet
app.put('/profile/edit/:username', (request, response) => {
    console.log(request.body)
    database.run('update users set profileName=?, profileDescription=?, profilePicture=?, profileMerits=? where username=?', 
    [request.body.profileName, request.body.profileDescription, request.body.profilePicture, request.body.profileMerits, request.params.username])
    .then(() => {
        response.send('Du uppdaterade en användare!');
    })
})

//Uppdatera titeln eller content av en artikel
app.put('/article/edit/:articleId', (request, response) => {
    database.run('UPDATE article SET title=?, content=?, dateEdited=? WHERE articleId=?', 
    [request.body.title, request.body.content, request.params.articleId, currentDate])
    .then(() => {
            response.status(202).send('Du uppdaterade en artikel!');
    })
})

//Uppdatera clicks av en artikel
app.put('/article/click/:articleId', (request, response) => {
    database.run('UPDATE article SET clicks=? WHERE articleId=?', 
    [request.body.clicks, request.params.articleId])
    .then(() => {
            response.status(202).send('Du uppdaterade en artikel!');
    })
})

//===DELETE anrop===

//Ta bort en användare baserat på användarnamnet
app.delete('/users/delete/:username', (request, response) => {
    database.run('delete from users where username=?', [request.params.username])
    .then(() => {
        response.send('Du tog bort en användare!');
    })
})

//Ta bort en artikel baserat på artikelns id
app.delete('/article/delete/:articleId', (request, response) => {
    database.run('delete from article where articleId=?', [request.params.articleId])
    .then(() => {
        response.send('Du tog bort en artikel!');
    })
})


//Sätter på servern på port 3000
app.listen(3000);