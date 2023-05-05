import { getPlanMeal } from './service.js';
import { resultCalculateBMI } from './bmi';

const getDataPlanMeal = async () => {
  const data = await getPlanMeal();
  mapPlanMeal(data);
  // return data
};

const mapPlanMeal = (planMeal) => {
  planMeal.map((item) => {
    const { normal, underweight, overweight, obesity } = item.kategori;
    return showPlanMeal(normal, underweight, overweight, obesity);
  });
};

// const showPlanMeal = (normal, underweight, overweight, obesity) => {
//   if (resultCalculateBMI == normal) {
    
//   }
// };
