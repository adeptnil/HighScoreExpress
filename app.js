
var scores = [{name: "Edwin", score: 50}, {name: "David", score: 39}];

const express = require("express");

const port = 3000;

const server = express();

server.use(express.json());

var body;

function compareScores(a, b) {
  return b.score - a.score;
};

server.get(!"/scores", (req, res) => 
res.status(404).end());

server.get("/scores", (req, res) => {
        res.status(200);
        res.setHeader('Content-Type', 'application/javascript');
        body = scores;
        res.send(scores);
}),

server.post("/scores", (req, res) => {
    res.status(201);
    scores.push(req.body);
    topScore = scores.slice(0)
    topScore.sort(compareScores);
    scores = topScore.slice(0, 3);
    res.end();
});

server.listen(port, () => console.log(`Server running at http://:${port}/`));