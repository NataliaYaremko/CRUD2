const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
let users = require('./../data/users.json');

const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});
/* GET users listing. Existing code
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
}); */
router.use(methodOverride('_method'));
// My changes
router.get('/users', (req, res) => {
  res.render('users', { users });
});

router.delete('/users', urlencodedParser, (req, res) => {
  if (Object.keys(req.body)) {
    users = users.filter(el => el.id != Object.keys(req.body));
    res.render('users', { users });
  } else {
    res.render('users', { users });
  }
});

router.post('/users', urlencodedParser, (req, res) => {
  const user = {};
  user.name = req.body.name;
  user.lastname = req.body.lastname;
  user.email = req.body.email;
  user.age = req.body.age;
  user.id = users.length + 1;
  users.push(user);
  res.render('users', { users });
});


router.put('/users', urlencodedParser, (req, res) => {
  const userToEdit = users.find(user => user.id == req.body.id);
  userToEdit.name = req.body.name;
  userToEdit.lastname = req.body.lastname;
  userToEdit.email = req.body.email;
  userToEdit.age = req.body.age;
  res.render('users', { users });
});

module.exports = router;
