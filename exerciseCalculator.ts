interface Result { periodLength: number,
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number ;} 

    let sum=0
    let trainingDays=0
    let success= true
    let ratingDescription=''
    
   
const calculateExercises=(input:number[], target:number,rating:number):Result=>{
   const periodLength= input.length
    

   for (let i=0; i< input.length; i++){ 
    sum= sum+input[i]
    if (input[i]>0){trainingDays=trainingDays+1}}

   const average= sum/periodLength
   console.log("average", average);
   console.log("target", target); 
   if (average < target){
    success = false  
   }
   else {
    success === true
   }

    if (rating===1){ratingDescription='you must try harder'}
    else if (rating===2){ratingDescription='not too bad but could be better'}
    else if(rating===3){ratingDescription='you made it'}
return { periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average}
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1],2,2))