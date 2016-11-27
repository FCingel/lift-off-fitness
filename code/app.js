const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({
	layoutsDir: './views/layouts',
	defaultLayout: 'main'
}));

app.use(express.static('public'));

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);



app.get('/', function (req, res) {
   res.redirect('/home');
});

// Load and mount the home controller
const home = require('./controllers/home');
app.use('/home', home);

// Load and mount the sign-up controller
const signUp = require('./controllers/sign-up');
app.use('/sign-up', signUp);

// Load and mount the sign-in controller
const signIn = require('./controllers/sign-in');
app.use('/sign-in', signIn);

// Load and mount the profile controller
const profile = require('./controllers/profile');
app.use('/profile', profile);

// Load and mount the leaderboard controller
const leaderboard = require('./controllers/leaderboard');
app.use('/leaderboard', leaderboard);

// Load and mount the users controller
const users = require('./controllers/users');
app.use('/users', users);


module.exports = app;
app.listen(8000);
