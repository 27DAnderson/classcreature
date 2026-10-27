// DEPENDENCIES + STARTUP ↓↓↓
require('dotenv').config();
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const jwt = require('jsonwebtoken');
// const fetch = require('node-fetch');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env.DATABASE_FILE);
const { Server } = require('socket.io');
const http = require('http');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const THIS_URL = process.env.THIS_URL || `http://localhost:${PORT}`;
const AUTH_URL = process.env.AUTH_URL || 'http://formbar.yorktechapps.com';
const SESSION_SECRET = process.env.SESSION_SECRET || 'your-secret-key';
const API_KEY = process.env.API_KEY || 'your-api-key';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    store: new SQLiteStore({ db: 'sessions.db', dir: './db' }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

function isAuthenticated(req, res, next) {
    if (req.session.user) return next();
    res.redirect(`/login?redirectURL=${THIS_URL}`);
}

// ROUTES ↓↓↓
app.get('/', isAuthenticated, (req, res) => {
    res.render('index', { user: req.session.user });
});

app.get('/login', (req, res) => {
    if (req.query.token) {
        const data = jwt.decode(req.query.token);

        // Save user info
        db.run(
            `INSERT OR REPLACE INTO users (username, token) VALUES (?, ?)`,
            [data.displayName, req.query.token]
        );

        req.session.user = data.displayName;
        req.session.token = req.query.token;

        res.redirect('/');
    } else {
        res.redirect(`${AUTH_URL}/oauth?redirectURL=${THIS_URL}`);
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

// SERVER ↓↓↓
const server = http.createServer(app);
const newServer = new Server(server);

const { io } = require('socket.io-client');
const authSocket = io(AUTH_URL, {
    extraHeaders: { api: API_KEY }
});

newServer.on('connection', (socket) => {
    console.log('Connected to auth server');

    socket.on('test', data => {
        console.log('Test event received:', data);
    });
});

newServer.on('disconnect', () => {
    console.log('Disconnected from auth server');
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});