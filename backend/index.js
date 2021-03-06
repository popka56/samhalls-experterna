const crypto = require('crypto')
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite');
const moment = require('moment');
const uuid = require('uuid/v4')
const multer = require('multer')

const app = express();
app.use(express.json());
app.use(cors());

//===Egna värden att använda till våra anrop===

//===Filuppladdning Start===
//Bestämmer vilka filformat vi accepterar vid filuppladdning
const fileFilter = function(request, file, callback){
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    if(!allowedTypes.includes(file.mimetype)){
        const error = new Error('Fel filändelse');
        error.code = 'LIMIT_FILE_TYPES';
        return callback(error, false)
    }

    callback(null, true)
}
//Multer väljer en mapp där vi lägger filer uppladdade av användare, samt hämtar krav för filen
const upload = multer({ storage: multer.diskStorage({
        destination: '../frontend/public/img', //Vart filen sparas
        filename: (req, file, cb) => { 
            cb(null, Date.now() + "-" + file.originalname); //Vad filnamnet blir när den läggs i mappen
        },
        fileFilter,
        limits: {
            fileSize: 500000 //Filer får inte överstiga 500kb
        }
    })
})
//===Filuppladdning Slut===

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
//Skapar nya artiklar, behöver värden för titel, content, datum, författare (användarens namn), en summary och ett profession
app.post('/article/new', (request, response) => {
    database.run('insert into article (title, content, dateCreated, author, authorPicture, summary, profession) values (?, ?, ?, ?, ?, ?, ?)', 
    [request.body.title, request.body.content, currentDate, request.body.author, request.body.authorPicture, request.body.summary, request.body.profession])
    .then(() => {
        response.send('Ett nytt inlägg har skapats!');
    })
    .catch(e => {
        response.status(409).send();
    })
})

//===PUT anrop===


//===Filuppladdning Start===
//Ladda upp en fil till servern för granskning
app.put('/upload/verification/:username', upload.single('file'), (request, response) => {
    database.run('UPDATE users SET userHasUploadedVerification=?, userUploadedFile=?  where username=?', 
    [1, request.file.filename, request.params.username])
    .then(() => {
        response.json({ file: request.file });
    })
})

//Ladda upp en profilbild
app.put('/upload/profilePicture/:username', upload.single('file'), (request, response) => {
    database.run('UPDATE users SET profilePicture=? where username=?', 
    [request.file.filename, request.params.username])
    .then(() => {
        response.json({ file: request.file });
    })
})
//===Filuppladdning Slut===

//Ändra användarens e-mail och lösenord baserat på användarnamn
app.put('/users/edit/:username', (request, response) => {
    database.run('UPDATE users SET userEmail=?, password=? where username=?', 
    [request.body.userEmail, request.body.password, request.params.username])
    .then(() => {
        response.send(`Användaren ${request.params.username} uppdaterades!`);
    })
})

//Ändra profilvärden baserat på användarnamnet
app.put('/profile/edit/:username', (request, response) => {
    console.log(request.body)
    database.run('UPDATE users SET profileName=?, profileDescription=?, profilePicture=?, profileMerits=?, profileJob?, ProfileEducation? WHERE username=?', 
    [request.body.profileName, request.body.profileDescription, request.body.profilePicture, request.body.profileMerits, request.body.profileJob, request.body.profileEducation, request.params.username])
    .then(() => {
        console.log('hej')
        response.send({sucess: 'Du uppdaterade en användare!'});
    })
})

//Uppdatera en användares verifikation
app.put('/users/validate/:username', (request, response) => {
    database.run('UPDATE users SET userVerified=? where username=?', 
    [request.body.userVerified, request.params.username])
    .then(() => {
        response.send(`${request.params.username}s verifikation uppdaterades!`);
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

//=== Inloggning ===

// Funktion för att se om användaren är inloggad
function authenticate(request, response, next) {
  const cookie = request.get('Cookie')
  if (cookie) {
    database.all('SELECT username FROM sessions WHERE token=?', /token=([0-9a-f-]*)/.exec(cookie)[1])
      .then(rows => {
        if (rows.length === 1) {
          request.username = rows[0].username
          next()
        } else {
          response.status(401).send()
        }
      })
  } else {
    response.status(401).send()
  }
}

// Logga ut
app.delete('/logout', (request, response) => {
    database.run(
        'DELETE FROM sessions WHERE token = ?;',
        [request.get('Cookie').split('=')[1]])
    .then(() => {
        response.send(null);
    })
})
// Logga in, behöver användarnamn och lösenord
app.post('/login', (request, response) => {
    const hash = crypto.createHash('sha256')
    hash.update(request.body.password)
    database.all(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [request.body.username, hash.digest('hex')]
    )
        .then(users => {
        if (users.length === 0) {
            response.status(401).send('hej')
        } else {
            const token = uuid()

            database.run(
            'INSERT INTO sessions VALUES (?, ?)',
            [request.body.username, token]
            )
            .then(() => {
                response.set('Set-Cookie', 'token=' + token + '; Path=/')
                response.send({sucess: `Du har loggat in!`})
            })
        }
    })
})
// Registrera nya användare, behöver användarnamn, lösenord och e-post
app.post('/register', (request, response) => {
    
    const hash = crypto.createHash('sha256')
    hash.update(request.body.password)
    
    database.run(
        'insert into users (username, password, userEmail, userCreatedDate) values (?, ?, ?, ?)', 
        [request.body.username, hash.digest('hex'), request.body.userEmail, currentDate])
    .then(() => {
        response.send('En användare har skapats!');
    })
    .catch(e => {
        response.status(409).send();
    })
})
//Kolla fall en användare är inloggad
app.get('/auth', authenticate, (request, response) => {
    response.send({requestUserName: request.username})
})

//Ta bort artiklar baserat på artikelns författare
app.delete('/article/delete/all/:author', (request, response) => {
    database.run('delete from article where author=?', [request.params.author])
    .then(() => {
        response.send('Du tog bort en artikel!');
    })
})


//Sätter på servern på port 3000
app.listen(3000);