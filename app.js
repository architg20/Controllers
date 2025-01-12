const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const contactController = require('./controllers/contactController');
const successController = require('./controllers/successController');
const errorController = require('./controllers/errorController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Contact Us Routes
app.get('/contactus', contactController.getContactUs);
app.post('/contactus', contactController.postContactUs);

// Success Route
app.get('/success', successController.getSuccess);

// Handle Page Not Found
app.use(errorController.get404);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
