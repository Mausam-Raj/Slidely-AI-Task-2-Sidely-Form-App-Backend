import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;
const dbPath = path.resolve(__dirname, 'db.json');

app.use(bodyParser.json())

interface Submission {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}

const getSubmissions = (): Submission[] => {
    return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
};

const saveSubmissions = (submissions: Submission[]) => {
    fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2));
};

app.get('/ping', (req, res) => {
    res.send(true);
});

app.post('/submit', (req, res) => {
    const submissions = getSubmissions();
    submissions.push(req.body);
    saveSubmissions(submissions);
    res.status(201).send(req.body);
});

app.get('/read', (req, res) => {
    const index = parseInt(req.query.index as string, 10);
    const submissions = getSubmissions();
    if (index >= 0 && index < submissions.length) {
        res.send(submissions[index]);
    } else {
        res.status(404).send({ error: 'Submission not found' });
    }
});

app.get('/search', (req, res) => {
    const email = req.query.email as string;
    const submissions = getSubmissions();
    const submission = submissions.find(sub => sub.email === email);
    if (submission) {
        res.send(submission);
    } else {
        res.status(404).send({ error: 'Submission not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`);
});