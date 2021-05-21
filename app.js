/// 2 err  var =>  let 
let express = require('express');
let app = express();
let db = require('./db');
let user = require('./controllers/usercontroller');
let game = require('./controllers/gamecontroller')


/* db.sync(); */
app.use(require('body-parser'));
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(function() {
    console.log("App is listening on 4000");//// 3 err listening port 5433
})

 