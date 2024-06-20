const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-email', (req, res) => {
    const email = req.body.email;
    // Save the email to a file (or database)
    fs.appendFile('emails.txt', email + '\n', (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server error');
        } else {
            res.send('Thank you! Your email has been submitted.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});