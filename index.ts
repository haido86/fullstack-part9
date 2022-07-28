/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
const app = express();
app.use(express.json());
import {
  calculateExercises,
  calculateExerciseValues,
} from './exerciseCalculator';

app.post('/exercises', (request, response) => {
  const { target, daily_exercises } = request.body;

  if (!target || !daily_exercises) {
    return response.status(400).json({
      error: 'parameters missing',
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const findNaN = daily_exercises.find((i: any) => isNaN(Number(i)));

  if (isNaN(Number(target)) || findNaN) {
    return response.status(400).json({
      error: 'malformatted parameters',
    });
  }
  const result: calculateExerciseValues = {
    target: target,
    daily_exercises: daily_exercises,
  };

  return response.json(
    calculateExercises(result.target, result.daily_exercises)
  );
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
