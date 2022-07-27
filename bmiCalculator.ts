export interface calculateBmiValues {
  height: number;
  weight: number;
}

export const calculateBmi = (height: number, weight: number) => {
  const BMI = weight / ((height / 100) * (height / 100));
  if (BMI < 18.5) {
    return 'under weight';
  } else if (18.5 <= BMI && BMI <= 24.9) {
    return 'Normal (healthy weight)';
  } else {
    return 'over weight';
  }
};
