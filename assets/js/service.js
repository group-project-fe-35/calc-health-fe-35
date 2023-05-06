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
  localStorage.setItem('categoryBMI', JSON.stringify(data))
}
const getCategory = () => {
  return JSON.parse(localStorage.getItem('categoryBMI'))

}
const getPlanMeal = async () => {
  const url = 'https://64549a54a74f994b334434f8.mockapi.io/api/v1/planmeal'
  const data = await fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response
    })
    .catch((err) => {throw new Error(err)})
    return data
}

getPlanMeal()

export {
  putToLocalStorage,
  getFromLocalStorage,
  putActiveUser,
  getActiveUser,
  getPlanMeal,
  saveCategory,
  getCategory
};