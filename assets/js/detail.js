// import { container, buttonSave } from './dom.js';
import { handleAuthUser, handleLogOut } from './auth.js';
import {
  getFoodInformation,
  setFavoriteFoods,
  getUserFavorite,
} from './service.js';

const buttonSave = document.getElementById('btn-save')

handleAuthUser();
setTimeout(() => {
  const logout = document.getElementById('logout');
  logout.addEventListener('click', () => {
    handleLogOut();
  });
}, [1000]);


let foodActive = {};

async function getAnchorQuery() {
  var currentUrl = document.URL,
    urlParts = currentUrl.split('?');
  let id = urlParts[1];
  if (urlParts.length === 1) {
    return console.log('error 404');
  }

  const food = await getFoodInformation(id);

  if (food.nutrition != null) {
    writeNutritionToHtml(food.nutrition);
  }
  writeDetailToHtml(food.image, food.title, food.summary);

  return (foodActive = food);
}

const writeDetailToHtml = (image, namefood, description) => {
  const img = document.getElementById('imgfood');
  const name = document.getElementById('foodName');
  const descripe = document.getElementById('foodDesc');
  img.innerHTML = `<img src=${image}  alt=${image} >`;
  name.innerText = `${namefood}`;
  descripe.innerHTML = `${description}`;
};

const writeNutritionToHtml = (nutritions) => {
  const { nutrients } = nutritions;
  const nutribox = document.getElementById('nutribox');
  nutrients.map((value, i) => {
    nutribox.innerHTML += `<table class="table">
                              <tbody>
                                <tr>
                                  <td>${value.name}: ${value.amount}</td>
                                </tr>
                              </tbody>
                            </table>`;
  });
};

getAnchorQuery();
const recentFoods = JSON.parse(getUserFavorite());


const handleSaveFavorite = () => {
  let newarray = [];
  if (recentFoods != null) {
    recentFoods.push(foodActive);
    alert('save food success');
    return localStorage.setItem(
      'favorite',
      JSON.stringify(recentFoods)
    );
  }
  newarray.push(foodActive);
  alert('save food success');
  return localStorage.setItem('favorite', JSON.stringify(newarray));
};

buttonSave.addEventListener('click', () => {
  handleSaveFavorite();
});
