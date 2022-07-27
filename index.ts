import express from 'express';
import { calculateBmiValues, calculateBmi } from './bmiCalculator';
const app = express();

app.get(`/bmi`, (req, res) => {
  let h = req.query.height;
  let w = req.query.weight;

  if (!h || !w || isNaN(+h) || isNaN(+w)) {
    res.send({
      error: 'malformatted parameters',
    });
  } else {
    const person: calculateBmiValues = {
      height: +h,
      weight: +w,
    };

    const bmi = calculateBmi(person.height, person.weight);
    res.json({
      weight: person.weight,
      height: person.height,
      bmi: bmi,
    });
  }
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
