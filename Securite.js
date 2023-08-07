const express = require('express');
const app = express();
const session = require('express-session');


app.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: false
}));


app.use(express.json());
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];


const checkAuth = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    req.session.userId = user.id;
    return res.json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/protected-page', checkAuth, (req, res) => {
  return res.json({ message: 'Welcome to the protected page!' });
});


app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Error logging out' });
    }
    return res.json({ message: 'Logout successful' });
  });
});

app.listen(8000, () => {
  console.log('Server started on http://localhost:8000');
});
