export interface calculateExerciseValues {
  target: number;
  daily_exercises: [hours: number];
}

let sum = 0;
let trainingDays = 0;
let success = true;
let ratingDescription = '';

export const calculateExercises = (
  target: number,
  daily_exercises: Array<number>
) => {
  const periodLength = daily_exercises.length;

  for (let i = 0; i < daily_exercises.length; i++) {
    sum = sum + daily_exercises[i];
    if (daily_exercises[i] > 0) {
      trainingDays = trainingDays + 1;
    }
  }

  const average = sum / periodLength;
  console.log('average', average);
  console.log('target', target);
  if (average < target) {
    success = false;
  } else {
    success === true;
  }

  const rating = average >= 3 ? 3 : average <= 1 ? 1 : 2;

  if (rating === 1) {
    ratingDescription = 'you must try harder';
  } else if (rating === 2) {
    ratingDescription = 'not too bad but could be better';
  } else if (rating === 3) {
    ratingDescription = 'you made it';
  }
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};
