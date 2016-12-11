// const express = require('express');
// const app = express();
// const exphbs = require('express-handlebars');
// var bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.engine('handlebars', exphbs({
// 	layoutsDir: './views/layouts',
// 	defaultLayout: 'main'
// }));

// app.use(express.static('public'));

// app.set('view engine', 'handlebars');
// app.set('views', `${__dirname}/views/`);










const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const express = require('express');
const expressSession = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const models = require('./models/');
const passport = require('./middlewares/authentication');
const viewHelpers = require('./middlewares/viewHelpers')

const app = express();
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: true })));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./public'));

app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

app.use(viewHelpers.register());



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

// Load and mount the main leaderboard controller
const leaderboard = require('./controllers/leaderboard');
app.use('/leaderboard', leaderboard);

// Load and mount the bench press leaderboard controller
const leaderboard_bench_press = require('./controllers/leaderboard/bench_press');
app.use('/leaderboard/bench_press', leaderboard_bench_press);

// Load and mount the military press leaderboard controller
const leaderboard_military_press = require('./controllers/leaderboard/military_press');
app.use('/leaderboard/military_press', leaderboard_military_press);

// Load and mount the squat leaderboard controller
const leaderboard_squat = require('./controllers/leaderboard/squat');
app.use('/leaderboard/squat', leaderboard_squat);

// Load and mount the deadlift leaderboard controller
const leaderboard_deadlift = require('./controllers/leaderboard/deadlift');
app.use('/leaderboard/deadlift', leaderboard_deadlift);



// Load and mount the users controller
const users = require('./controllers/users');
app.use('/users', users);


models.sequelize.sync().then(() => {
  app.listen(8000);
});

