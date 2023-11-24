const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = "mongodb+srv://jjlong6866:Pang55699@cluster0.z1icjmf.mongodb.net/Exams23001?retryWrites=true&w=majority";

app.get('/', async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('Exams23001');
        const records = database.collection('quizexamrecords');

        const doc = { name: "Ho Pang Tang", sid: "300370895" };

        await records.insertOne(doc);
        res.send('Document inserted');
    } catch (e) {
        console.error(e);
        res.status(500).send('Error occurred: ' + e.message);
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${3000}/`);
});
