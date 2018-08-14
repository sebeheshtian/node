const express = require('express');
const hbs = require('hbs');


port = process.env.PORT || 3001;
let app = express();
hbs.registerPartials(__dirname + '/views/partials/')
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
})

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: "Home Page",
    welcomeMessage: "Wlcome to my website",
    currentYear: new Date().getFullYear()
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(port, () => {
  console.log('server is up and running !');
});
