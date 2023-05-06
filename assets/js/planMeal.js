import { getListFoodsAPI } from './service.js';
import { handleAuthUser, handleLogOut } from './auth.js';
import { getCategory } from './service.js';

const container = document.getElementById('container-card');
const needCalories = document.getElementById('total-calorie')

handleAuthUser();
setTimeout(() => {
  const logout = document.getElementById('logout');
  logout.addEventListener('click', () => {
    handleLogOut();
  });
}, [1000]);

const getListFoods = async () => {
  const data = await getListFoodsAPI();
  mapListFoods(data);
};

const mapListFoods = (foods = []) => {
  foods.map((food, i) => {
    const { id, image, title } = food;
    return writeFoodComponent(id, image, title);
  });
};

const writeFoodComponent = (id, image, title) => {
  container.innerHTML += `<div class="card pe-0 ps-0 card-food" style="width: 16rem;">
                            <img src=${image} class="card-img-top" alt="${image}">
                            <div class="card-body">
                              <h5 class="card-title">${title}</h5>
                              </div>
                            <div class="card-footer">
                              <a href="./detail.html?${id}" type="button" id=${id} onclick="tes(${id})"><button  class=" btn btn-dark button-main">Detail</button></a>
                            </div>
                          </div>`;
};
getListFoods()

const getTotalCalories = () => {
  const caloriesNeed = getCategory()
  const { calories } = caloriesNeed
  return writeCaloriInHtml(calories);
}

const writeCaloriInHtml = (calorie) => {
  needCalories.textContent = calorie + ' kkal'
}

getTotalCalories()
