// interface Result {
// periodLength: number,
//     trainingDays: number;
//     success: boolean;
//     rating: number;
//     ratingDescription: string;
//     target: number;
//     average: number ;
// }

//     let sum=0
//     let trainingDays=0
//     let success= true
//     let ratingDescription=''

// const calculateExercises=(input:number[], target:number,rating:number):Result=>{
//    const periodLength= input.length

//    for (let i=0; i< input.length; i++){
//     sum= sum+input[i]
//     if (input[i]>0){trainingDays=trainingDays+1}}

//    const average= sum/periodLength

//    if (average < target){
//     success = false
//    }
//    else {
//     success === true
//    }
//    const rating = average >= 3 ? 3 : average <= 1 ? 1 : 2;

//     if (rating===1){ratingDescription='you must try harder'}
//     else if (rating===2){ratingDescription='not too bad but could be better'}
//     else if(rating===3){ratingDescription='you made it'}
// return { periodLength,
//     trainingDays,
//     success,
//     rating,
//     ratingDescription,
//     target,
//     average}
// }

// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1],2,2))

interface calculateExerciseValues {
  rating: number;
  target: number;
  input: [hours: number];
}

const parseArguments = (args: Array<string>) => {
  if (args.length <= 1) throw new Error('Not enough arguments');

  const findNaN = args.slice(2).find((item) => isNaN(Number(item)));

  if (!findNaN) {
    return {
      target: Number(args[2]),
      hours: args.slice(3).map((item) => Number(item)),
    };
  } else {
    throw new Error(`Provided values were not numbers!, ${findNaN}`);
  }
};

let sum = 0;
let trainingDays = 0;
let success = true;
let ratingDescription = '';

const calculateExercises = (target: number, input: Array<number>) => {
  const periodLength = input.length;

  for (let i = 0; i < input.length; i++) {
    sum = sum + input[i];
    if (input[i] > 0) {
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
  console.log({
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  });
};

try {
  const { target, hours } = parseArguments(process.argv);
  calculateExercises(target, hours);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
