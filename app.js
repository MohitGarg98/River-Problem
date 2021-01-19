const express = require('express')
const app = express();

app.use(express.json())

app.post('/total-time', function (req, res) {
    const river_velocity = req.body.river_velocity;
    const person_velocity = req.body.person_velocity;
    const angle = req.body.angle;
    const distance = req.body.distance;

    let time = distance / (person_velocity * Math.sin(angle));
    let drift = (river_velocity + person_velocity * Math.cos(angle)) * time;

    let ans = {
        time: time,
        drift: drift,
        xAxis: drift,
        yAxis: distance
    }

    res.send(ans);
});

app.listen(3000, () => {
    console.log('Server started');
})