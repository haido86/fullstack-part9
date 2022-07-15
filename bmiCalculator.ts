// const calculateBmi  = (height:number, weight:number, message: string) => {
// const BMI=weight/((height/100)*(height/100))
// if (BMI<18.5){ return message='under weight'}
// else if (18.5<=BMI  && BMI<= 24.9) {return message='Normal (healthy weight)'}
// else {return message='over weight'}
//   }
  
// console.log(calculateBmi(180, 74,''))

interface calculateBmiValues {
  height: number;
  weight: number;
 }

// const parseArguments = (args: Array<string>): calculateBmiValues => {
//   if (args.length < 4) throw new Error('Not enough arguments');
//   if (args.length > 4) throw new Error('Too many arguments');

//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       height: Number(args[2]),
//       weight: Number(args[3]),     
//     }
//   } else {
//     throw new Error('Provided values were not numbers!');
//   }
// }

const calculateBmi = (height: number, weight: number) => {
 
  const BMI=weight/((height/100)*(height/100))
  if (BMI<18.5){ 
    console.log('under weight');
    
  }
  else if (18.5<=BMI  && BMI<= 24.9) {
    console.log('Normal (healthy weight)');
    
  }
  else {
     console.log('over weight') 
  }
}

try {
  const { height, weight} = parseArguments(process.argv);
  calculateBmi(height, weight);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}