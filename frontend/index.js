const express = require('express');
const app = express();
const path = require('path');


// 👇️ serving static files from build directory
app.use(express.static(path.join(__dirname, 'build')));

// 👇️ catch-all route
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
