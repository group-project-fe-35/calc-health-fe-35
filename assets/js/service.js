const putToLocalStorage = (data) => {
  localStorage.setItem('userdata', JSON.stringify(data));
};
const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('userdata'));
};
const putActiveUser = (data) => {
  localStorage.setItem('activeUser', JSON.stringify(data));
};
const getActiveUser = () => {
  return JSON.parse(localStorage.getItem('activeUser'));
};
const saveCategory = (data) => {
  localStorage.setItem('categoryBMI', JSON.stringify(data));
};
const getCategory = () => {
  return JSON.parse(localStorage.getItem('categoryBMI'));
};

const setFavoriteFoods = (id, list) => {
  localStorage.setItem('favorite', JSON.stringify(list));
  alert('added food success');
};
const getUserFavorite = () => {
  return localStorage.getItem('favorite');
};

const BASE_URL = 'https://api.spoonacular.com/recipes';
const API_KEY = 'ec89dc683ab14060aec05d34eff4958f';
const INC_NUTRITION = 'includeNutrition=true';

const getListFoodsAPI = async (number = 60) => {
  const url = `${BASE_URL}/complexSearch?apiKey=${API_KEY}&number=${number}`;

  const data = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res.results;
    })
    .catch((err) => {
      throw new Error(err);
    });

  return data;
};
const getFoodInformation = async (id = '716381') => {
  const url = `${BASE_URL}/${id}/information?apiKey=${API_KEY}&${INC_NUTRITION}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
  return data;
};
const getFoodDetailByID = async (id = '716381') => {
  const url = `${BASE_URL}/${id}/nutritionWidget.json?apiKey=${API_KEY}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
  return data;
};

export {
  putToLocalStorage,
  getFromLocalStorage,
  putActiveUser,
  getActiveUser,
  saveCategory,
  getCategory,
  getListFoodsAPI,
  getFoodDetailByID,
  getFoodInformation,
  setFavoriteFoods,
  getUserFavorite,
};
