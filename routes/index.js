const express = require('express');
const router = express.Router();

const login = 'admin';
const password = '1234';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

/* GET login form. */
router.get('/login', (req, res) => {
  res.render('login', { title: 'Logowanie' });
});

/* POST login data. */
router.post('/login', (req, res) => {
  const body = req.body;

  if (login === body.login && password === body.password) {
    req.session.admin = 1;
    res.redirect('/admin');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
